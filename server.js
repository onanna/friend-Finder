//set up dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

const routes = require('./app/routing/html-Routes.js') 

const apiRoutes = require('./app/routing/api-routes.js')
//creates express server and sets up a port
var app = express(); 
var PORT = process.env.PORT || 3000; 

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Static files
// needs to be called before the routes in order to work
app.use(express.static('app/public'));

app.use('/', routes);
//Listening to the port that was set up
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });