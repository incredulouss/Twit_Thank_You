	var x =388;
console.log("bot starting");
var Twit = require('twit');
 var config = require('./ab');
 //console.log(config);
var T = new Twit(config);

var params =   { 
	q: 'sachin ',
	//geocode : '37.781157 -122.398720 1mi'
    
      }

T.get('search/tweets',params, getData );

function getData(err, data, response)
{
	var tweets = data.statuses;
	for(var i =0 ; i< tweets.length ; i++)
	{
    console.log(tweets[i].text);
    }	
};