'use strict';

const bcrypt =  require('bcrypt-nodejs')

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true,
    },
    email:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    password:{
        type: DataTypes.STRING(1000),
        allowNull:false
    },
    
    is_admin : {
      type : DataTypes.BOOLEAN,
      allowNull: false, 
      defaultValue: false
    }
  });

  User.hook('beforeCreate' ,function(user) {
   user.password= bcrypt.hashSync(user.password,bcrypt.genSaltSync(10));
  }
  );
  
  User.comparePassword = function(pass,user) {
    
    //test
      console.log('yes');
      console.log(user.password);
      console.log(pass);

    var isMatch=bcrypt.compare(pass, user.password);
    console.log(isMatch);
    return isMatch;
      
  }
  return User;
}

