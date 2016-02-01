var db 			= require('../db_config.js');

exports.list 	= function(callback) {
	db.User.find({}, function(error, users){
		if(error) {
			callback({error: 'Nao foi possivel retornar os usuarios'});			
		} else {
			callback(users);
		}
});
};

exports.user 	= function(id, callback) {
	var id = validator.trim(validator.escape(req.param('id')));
		db.User.findById(id, function(error, user){
		if(error) {
			callback({error: 'Nao foi possivel retornar o usuario'});
		} else {
			callback(user);
		}
	});
};

exports.save 	= function(fullname, email, password, callback) {
	new db.User({
		fullname	: 	fullname,
		email		:	email,
		password	: 	password,
	}).save(function(error, user) {
		if(error) {
			callback({error: 'nao foi possivel acessar'});
		} else {
			callback(user);			
		}
	});

};
exports.update 	= function(id, fullname, email, password, callback) {
	db.User.findById(id, function(error, user) {
		if(fullname) {
			user.fullname 	= fullname;
		}
		if(email) {
			user.email 		= email;
		}
		if(password) {
			user.password 	= password;
		}

		user.save(function(error, user) {
			if(error) {
				callback({error: 'Não foi possivel salvar o usuario'});
			} else {
				callback(user);
			}
		});
	});
};

exports.delete 	= function(id, callback) {
	//var id = validator.trim(validator.escape(req.param('id')));
	
	db.User.findById(id, function(error, user) {
		if(error) {
			callback({error: 'Nao foi possivel Remover o usuario'});
		} else {
			user.remove(function(error) {
				if(!error) {
					callback({response: 'Ususário Excluido com sucesso!'});
				}
			});
		}
	});	
};
