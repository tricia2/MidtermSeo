//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, 'views/about.html'));
 });
app.get('/about2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/about2.html'));
 });
app.get('/about3', function(req, res){
  res.sendFile(path.join(__dirname, 'views/about3.html'));
 });
app.get('/about4', function(req, res){
  res.sendFile(path.join(__dirname, 'views/about4.html'));
 });
app.get('/about5', function(req, res){
  res.sendFile(path.join(__dirname, 'views/about5.html'));
 });
app.get('/about6', function(req, res){
  res.sendFile(path.join(__dirname, 'views/about6.html'));
 });
app.get('/about7', function(req, res){
  res.sendFile(path.join(__dirname, 'views/about7.html'));
 });
app.get('/about8', function(req, res){
  res.sendFile(path.join(__dirname, 'views/about8.html'));
 });

//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port 5000 ',app.get('port'));
 });