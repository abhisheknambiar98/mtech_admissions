const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const users=require('../models').user;
const config=require('./config.js');


module.exports=  function(passport){
	let opts={};
	opts.jwtFromRequest= ExtractJwt.fromAuthHeaderAsBearerToken("JWT ");

	opts.secretOrKey=config;
	passport.use(new JwtStrategy(opts,function(jwt_payload,done){
		users.findOne({id:jwt_payload.id},function(err,users){
			if(err)
			{
				console.log(err);
				return done(err,false);
			}
			if(users)
			{
				return done(null,users);
			}
			else{
				done(null,false);
			}

		});
	}));

}