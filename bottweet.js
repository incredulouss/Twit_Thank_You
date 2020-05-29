
var x =388;
console.log("bot starting");
var Twit = require('twit');
 var config = require('./ab');
 //console.log(config);
var T = new Twit(config);
var stream = T.stream('user');
 
stream.on('follow',followed);

function followed(eventMsg)
{
	var name = eventMsg.source.name;
	//var screenName = eventMsg.source.screen_name;
	tweetIt('.@ ' +name + ' thanku for following me' );
//setInterval(tweetIt,1000*10);
}




function tweetIt(txt)
{

var tweet =   { 
	 status: txt
	}
function tweeted(err, data, response)
{
	if(err)
{
	console.log(' something wrong');
}
else 
	console.log(' it is working');
}

   T.post('statuses/update',tweet, tweeted); 
}
