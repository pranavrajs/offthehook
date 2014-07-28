/**
 * ApiController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/api/url`
   */
  url: function (req, res) {
  console.log("Entered api call");
  
  //---Includes---
  var request = require('request');
      cheerio = require('cheerio');
      data_input=req.param('id');
  var fs = require('fs');
      console.log(data_input);
      data_=decodeURIComponent(data_input);
      data = 'http://'+data_;


  //--- URL FORMATTING ---
  regex = /^((http|https):\/\/){1}/;
  regex2 = /^(\/\/)/
  regex3 = /^(\/){1}/
  //--- Request Function ---
  request(data, function (error, response, body) {
  if (!error && response.statusCode == 200) {
      var $ = cheerio.load(body);
      //Cache all Links available
      $('a').each(function() {
        if($(this).attr('href')!='#')
        {
          if (undefined != $(this).attr('href'))
          {
          link = $(this).attr('href');
          console.log($(this).attr('href'));
          if(!regex.test(link)&&!regex2.test(link))
              if(!regex3.test(link))
                 link = data+'/'+$(this).attr('href');
              else
                  link = data+$(this).attr('href');
    
          fs.appendFile('C:\\node\\proj\\assets\\html5\\app.appcache',link+'\n', function (err) {
            if (err) throw err;
          });
          }
        }
        
      });
      //Cache all Image files
      $('img').each(function(){

        if($(this).attr('src')!='')
        {
          if (undefined != $(this).attr('src'))
          {
          link = $(this).attr('src');
          console.log($(this).attr('src'));
          if(!regex.test(link)&&!regex2.test(link))
              if(!regex3.test(link))
                  link = data+'/'+$(this).attr('src');
              else
                  link = data+$(this).attr('src');
          fs.appendFile('C:\\node\\proj\\assets\\html5\\app.appcache',link+'\n', function (err) {
            if (err) throw err;
          });
          }
        }

        console.log($(this).attr('src'));
      });
      //Cache all stylesheets
      $('link').each(function(){

        if($(this).attr('href')!='')
        {
          if (undefined != $(this).attr('href'))
          {
          link = $(this).attr('href');
          console.log($(this).attr('href'));
          if(!regex.test(link)&&!regex2.test(link))
              if(!regex3.test(link))
                  link = data+'/'+$(this).attr('href');
              else
                  link = data+$(this).attr('href');
          fs.appendFile('C:\\node\\proj\\assets\\html5\\app.appcache',link+'\n', function (err) {
            if (err) throw err;
          });
          }
        }
        console.log($(this).attr('href'));
      });

      //Cache all Javascript Files 
      $('script').each(function(){

        if($(this).attr('src')!='')
        {
          if (undefined != $(this).attr('src'))
          {
          link = $(this).attr('src');
          console.log($(this).attr('src'));
          if(!regex.test(link)&&!regex2.test(link))
              if(!regex3.test(link))
                  link = data+'/'+$(this).attr('src');
              else
                  link = data+$(this).attr('src');
          fs.appendFile('C:\\node\\proj\\assets\\html5\\app.appcache',link+'\n', function (err) {
            if (err) throw err;
          });
          }
        }
        console.log($(this).attr('src'));
      });
  }
})
    
    // Send a JSON response
    return res.json({
      success:'ok'
    });
  },





  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ApiController)
   */
  _config: {}

  
};
