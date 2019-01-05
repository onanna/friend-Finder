//Dependency
var path = require('path');
var express = require('express');
var app = express();
const router = express.Router();
//route


//GET request 
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

