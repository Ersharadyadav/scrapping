const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app     = express();

app.get('/', function(req, res) {
    let url = 'https://time.com';
    request(url, function(error, response, html) {
        // First we'll check to make sure no errors occurred when making the request
        if (!error) {
            letestnews = [];
          // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
          var $ = cheerio.load(html);
          $('.latest-stories__item a').each((i, elem) => {
            letestnews.push({
            title : $(elem).find('h3.latest-stories__item-headline').text(),
            link : $(elem).attr('href')
          });
        });
        res.send(letestnews);
        }
    });
  });

app.listen('8080');
console.log('API is running on http://localhost:8080');

