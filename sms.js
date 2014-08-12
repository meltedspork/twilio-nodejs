var twilio = require('twilio'),
	http = require('http'),
	url = require('url');

http.createServer(function (req, res) {

	var variables = url.parse(req.url, true).query;
	console.log(variables);

    // Create a TwiML response and a greeting
    var resp = new twilio.TwimlResponse();
    resp.sms('Welcome to Twilio Node.js!');

    //Render the TwiML document using "toString"
    res.writeHead(200, {
        'Content-Type':'text/xml'
    });
    res.end(resp.toString());

}).listen(1337);

console.log('');
