var app 			 = require('./app_config.js');
var validator		 = require('validator');
var usersController = require('./controllers/userscontroller.js');

app.get('/', function(req, res){
	new User({
		fullname	: 	'Osvaldo Abel',
		email		:	'test@gmail.com',
		password	: 	123456,
		created_at	: 	new Date(),
	}).save(function(error, user) {
		if(error) {
			res.json({error: 'nao foi possivel acessar'});
		} else {
			res.json(user);			
		}
	});
});

app.get('/users', function(req, res) {
	usersController.list(function(resp){
		res.json(resp);
	});
});

app.post('/users', function(req, res) {
	var fullname 	= validator.trim(validator.escape(req.param('fullname')));
	var email 		= validator.trim(validator.escape(req.param('email')));
	var password 	= validator.trim(validator.escape(req.param('password')));
	var created_at 	= new Date();

	usersController.save(fullname, email, password, function(resp) {
		res.json(resp);
	});
});

app.get('/users/:id', function(req, res) {
	usersController.user(id, function(resp){
		res.json(resp);
	});
});

app.put('/users', function(req, res) {
	var id 			= validator.trim(validator.escape(req.param('id'))); 
	var fullname 	= validator.trim(validator.escape(req.param('fullname')));
	var email 		= validator.trim(validator.escape(req.param('email')));
	var password 	= validator.trim(validator.escape(req.param('password')));
	var created_at 	= new Date();
	
	usersController.update(id, fullname, email, password, function(resp) {
		res.json(resp);
	});
});

app.delete('/users/:id', function(req, res) {
	var id 			= validator.trim(validator.escape(req.params('id')));
	usersController.delete(id, function(resp){
		res.json(resp);
	});
});