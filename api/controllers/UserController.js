/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new':function(req,res){
		console.log('app launch');
		var create = "CREATE TABLE IF NOT EXISTS users (name TEXT,email TEXT, mobile INT , city TEXT)";
		User.query(create, function(err,results){
			if(err){
				res.send(400);
			}else{
				console.log('success');
			}
		});


		var results = req.params.all();
		var name = results.name,
		    email = results.email,
				mobile = results.mobile,
				city = results.city;
		var insert = "INSERT INTO users (name, email, mobile, city) VALUES('"+name+"','"+email+"',"+mobile+","+"'"+city+"')";
		User.query(insert, function(err,results){
			if(err){
				console.log('bad request');
				res.send(400);
			}else{
				console.log('insert success');
				res.redirect('/user/view');
			}
		});


	},

	'view':function(req,res){
		var select = "SELECT * FROM users";
		User.query(select,function(err,results){
			if(err){
				console.log('select fail');
				res.send(400);
			}else{
				console.log('select success ',results.rows[0]);
				res.view({
					user:results.rows
				});
			}
		});
	}
};
