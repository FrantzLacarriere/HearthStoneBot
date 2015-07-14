var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var list = [];
var Twit = require('twit');
var twitInfo = require('./config.js');
var twitter = new Twit(twitInfo);
//This is the scraper

twitter.post('statuses/update', {status: "Hello World"}, function (err, data, response){
  console.log(data);
});

// app.get('/', function(req, res){
//
//   //this is the r/hearthstone url that i am scraping
//   var url = 'https://www.reddit.com/r/hearthstone/top/?sort=top&t=day';
//   var world = "";
//
//   request(url, function(error, response, html){
//     if(!error){
//       var $ = cheerio.load(html);
//
//       var title, link;
//       var json = {title : "", link : ""};
//
//       //this is our entry point for data that
//       //contains each post info
//       $('.thing').each(function(i, elem) {
//         list[i] = $(elem).text();
//       });
//
//       console.log(list);
//
//     }
//   });
//
//   res.send(console.log(list));
// });

app.listen(9000);



//exports = module.exports = app;
