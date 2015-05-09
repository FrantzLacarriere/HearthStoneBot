var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/', function(req, res){
  //All the web scraping magic is going to go here
  url = 'http://www.reddit.com/r/hearthstone/top/#page=1/';

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var title, link;
      var json = {title : "", link : ""};
    }
  })
})

app.listen('9000')



exports = module.exports = app;
