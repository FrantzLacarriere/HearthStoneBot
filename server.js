var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/', function(req, res){
  //All the web scraping magic is going to go here
  res.send('IT IS HAPPENING!!!')
})

app.listen('9000')



exports = module.exports = app;
