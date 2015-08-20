var express = require('express');
var app = express();
var jwt = require('express-jwt');
var bodyParser = require('body-parser'); //bodyparser + json + urlencoder
var morgan  = require('morgan'); // logger
var tokenManager = require('./config/token_manager');
var secret = require('./config/secret');

app.listen(3001);
app.use(bodyParser());
app.use(morgan('dev'));

//Routes
var routes = {};
routes.posts = require('./route/posts.js');
routes.users = require('./route/users.js');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
});

//Get all published post
app.get('/post', routes.posts.list);

//Get all posts
app.get('/post/all', jwt({secret: secret.secretToken}), tokenManager.verifyToken, routes.posts.listAll);

//Get the post id
app.get('/post/:id', routes.posts.read);

//Like the post id
app.post('/post/like', routes.posts.like);

//Unlike the post id
app.post('/post/unlike', routes.posts.unlike);

//Get posts by tag
app.get('/tag/:tagName', routes.posts.listByTag);

//Create a new user
app.post('/user/register', routes.users.register);

//Login
app.post('/user/signin', routes.users.signin);

//Logout
app.get('/user/logout', jwt({secret: secret.secretToken}), routes.users.logout);

//Create a new post
app.post('/post', jwt({secret: secret.secretToken}), tokenManager.verifyToken , routes.posts.create);

//Edit the post id
app.put('/post', jwt({secret: secret.secretToken}), tokenManager.verifyToken, routes.posts.update);

//Delete the post id
app.delete('/post/:id', jwt({secret: secret.secretToken}), tokenManager.verifyToken, routes.posts.delete);

console.log('MEAN Stack API is starting on port 3001');