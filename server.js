var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

//This is the scraper

app.get('/', function(req, res){

  //this is the r/hearthstone url that i am scraping
  url = 'http://www.reddit.com/r/hearthstone/top/#page=1/';

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var title, link;
      var json = {title : "", link : ""};

      //this is our entry point for data that
      //contains each post info
      $('p.title').filter(function(){

      })
    }
  })
})

app.listen('9000')



exports = module.exports = app;
