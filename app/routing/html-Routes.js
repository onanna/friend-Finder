//Dependency
var path = require('path');
var express = require('express');
const router = express.Router();
//route


//GET request 
    router.get('/survey', function (req, res)
    {
        console.log(path.join(__dirname,'../public'))
		res.sendFile(path.join(__dirname,'../public','survey.html'));
	});

	// If no matching route is found default to home
	router.get( "/", function(req, res){
		res.sendFile(path.join(__dirname, '../public',"home.html"));
	});

module.exports = router