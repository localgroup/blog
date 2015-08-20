# Blog using MEAN Stack


## Description

This is  simple blog application built with AngularJS, Node.js and MongoDB. Creates your article and shares them in a beautiful minimalistic template.

![Blog Admin UI Page](https://upload.wikimedia.org/wikipedia/commons/5/5b/BlogAdminArtilceCreationPageUsingMEAN.png)

![Blog Post UI Page](https://upload.wikimedia.org/wikipedia/commons/7/79/BlogPostUsingMEAN.png)

## Features

- [x] Create Article
- [x] Edit Article
- [x] Delete Article
- [x] Public/Un publish  Article to Users
- [x] Add tags to Article
- [x] Add Authentication to the administration
- [x] Add registration for new user
- [x] Handle Logout
- [x] Handle Login
- [x] Add users management
- [x] Add Like to post
- [] Add comment to post
- [] Add Like to comment


## Dependencies

You need `mongodb-2.4.10` up and running on port `27017`

### Start Redis

Start your redis instance:



           _.-``__ ''-._
      _.-``    `.  `_.  ''-._           Redis 2.8.9 (00000000/0) 64 bit
  .-`` .-```.  ```\/    _.,_ ''-._
 (    '      ,       .-`  | `,    )     Running in stand alone mode
 |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
 |    `-._   `._    /     _.-'    |     PID: 13499
  `-._    `-._  `-./  _.-'    _.-'
 |`-._`-._    `-.__.-'    _.-'_.-'|
 |    `-._`-._        _.-'_.-'    |           http://redis.io
  `-._    `-._`-.__.-'_.-'    _.-'
 |`-._`-._    `-.__.-'    _.-'_.-'|
 |    `-._`-._        _.-'_.-'    |
  `-._    `-._`-.__.-'_.-'    _.-'
      `-._    `-.__.-'    _.-'
          `-._        _.-'
              `-.__.-'
              
              
              

Downloads Redis server from

https://github.com/rgl/redis/downloads

This needs to be installed in your machine and Running with port :6379

## Installation

Clone the repository with:

git clone https://github.com/localgroup/blog.git
cd BlogUsingMEANStack

## Directory Layout

   	  BlogUsingMEANStack/          --> all of the files to be used in development
      package.json/         --> It normally located at the root directory and contains dependencies which needs for this application
      gulpfile.js/   -->  Gulp.js is a Node-based task runner just like Grunt and as such, you'll need to have Node.js installed to use it
	  app/   --->  Contains all UI modules
	  api/   --->  Contains all rest api exposed as well as Mongo DB,Redis server configurations,etc
      app/index.html  --> Blog Admin Home page


### Build angularjs app

The build result is already available, but if you want to build it yourself, install gulp and the dependencies,
then run it under BlogUsingMEANStack Directory

install gulp and the gulp dependencies:  npm install


Edit app/js/app.js and replace the value of `options.api.base_url` to match your server configuration.


Run gulp to build the scripts of the AngularJS app with: gulp


### Install



Go to the api folder and install the dependencies: npm install

Edit api/blog.js and replace the value of Access-Control-Allow-Origin to match your server configuration.


Navigate into the below directory
api

Run the Rest api exposed application: node blog.js


Navigate into the below directory
app

Run the Blog UI  application: live-server


## Run

You can now open your browser: `http://localhost:8080/#/admin`

Create a first account on `http://localhost:8080/#/admin/register`

To access the Administration, go to `http://localhost:8080/#/admin/login`

## Technology Stack Used

* AngularJS
* Bootstrap
* MongoDB
* Redis
* GulpJs
* Node.js
* Express Js
* Json web Token


Want to Contribute ?
===================

I'm so happy if you do. Fork the project, make whatever changes you want to do and submit a pull request.


## Licence
The MIT License (MIT)

Copyright (c) 2015 Ramachandran Krishnan and Nishant Shreshth (ramackri@gmail.com,nishantshreshth@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
