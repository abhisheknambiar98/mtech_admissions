const Promise = require('bluebird');
var models = require('../models');
var Sequelize = require('sequelize');
const methods = require('../methods')
const env       = process.env.NODE_ENV || 'development';
const config    = require('../config/config.json')[env];
let sequelize ={};

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

usermethods.getAllUser = () => {return new Promise((resolve,
    reject) => {
        models.user.findAll()
      .then((user) => {
        resolve(user);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}
usermethods.getUserByEmail = (user) => { return new Promise((resolve,
  reject) => {
    sequelize.query('SELECT * FROM Users WHERE Users.username = :username ',
    { replacements: { username: [user] }, type: sequelize.QueryTypes.SELECT }
  ).then(user => {
    console.log(user);
    resolve(user);
  })
  .catch((err) => {
      console.log(err);
      reject(err);
    });
});
}
