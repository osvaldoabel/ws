var express		= require('express');
var app 		= module.exports = express();
var bodyParser 	= require('body-parser');

var allowCors 	= function(req, res, next) {
	req.header('Access-Control-Allow-Origin', 		'127.0.0.1:500');
	req.header('Access-Control-Allow-Methods', 		'GET,PUT,POST,DELETE');
	req.header('Access-Control-Allow-Headers', 		'Content-Type');
	req.header('Access-Control-Allow-Credentials', 	'true');
	next();
}

app.listen(5005);
app.use(allowCors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
