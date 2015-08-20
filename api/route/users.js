var db = require('../config/mongo_database');
var jwt = require('jsonwebtoken');
var secret = require('../config/secret');
var redisClient = require('../config/redis_database').redisClient;
var tokenManager = require('../config/token_manager');

exports.signin = function(req, res) {
	var username = req.body.username || '';
	var password = req.body.password || '';

	if (username == '' || password == '') { 
		return res.status(401).json({message: 'Please fill out all fields'});
	}
    //db.userModel.setPassword(password);

	db.userModel.findOne({username: username}, function (err, user) {
		if (err) {
			console.log(err);
			return res.status(401).json({message: 'Please enter valid credentials'});
		}

		if (user == undefined) {
			return res.status(401).json({message: 'Please enter valid credentials'});
		}

		if(!user.validPassword(password)) {
			return res.status(401).json({message: 'Please enter valid credentials'});
		}

		var token = jwt.sign({id: user._id}, secret.secretToken, { expiresInMinutes: tokenManager.TOKEN_EXPIRATION });

		return res.json({token:token});


	});
};

exports.logout = function(req, res) {
	if (req.user) {
		tokenManager.expireToken(req.headers);

		delete req.user;
		return res.send(200);
	}
	else {
		return res.send(401);
	}
}

exports.register = function(req, res) {
	var username = req.body.username || '';
	var password = req.body.password || '';
	var passwordConfirmation = req.body.passwordConfirmation || '';

	if (username == '' || password == '' || password != passwordConfirmation) {
		return res.send(401);
	}

	var user = new db.userModel();
	user.username = username;
	user.setPassword(password);
	user.save(function(err) {
		if (err) {
			console.log(err);
			return res.send(500);
		}

		db.userModel.count(function(err, counter) {
			if (err) {
				console.log(err);
				return res.send(500);
			}

			if (counter == 1) {
				db.userModel.update({username:user.username}, {is_admin:true}, function(err, nbRow) {
					if (err) {
						console.log(err);
						return res.send(500);
					}

					console.log('First user created as an Admin');
					return res.send(200);
				});
			}
			else {
				return res.send(200);
			}
		});
	});
}