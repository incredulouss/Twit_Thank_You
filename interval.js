ar x =388;
console.log("bot starting");
var Twit = require('twit');
 var config = require('./ab');
 //console.log(config);
var T = new Twit(config);
tweetIt();
setInterval(tweetIt,1000*5);
function tweetIt()
{
	var r = Math.floor(Math.random()*100);
var tweet =   { 
	 status: ' the random no is ' + r + ' #shyamlal'
	}
function tweeted(err, data, response)
{
	if(err)
{console.log(' something wrong');
}else console.log(' it is working');
}

 T.post('statuses/update',tweet, tweeted); 
}
