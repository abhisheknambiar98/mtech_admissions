'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(module.filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require('../config/config.json')[env];
const db        = {};
var sequelize ={};


if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
   // return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach((file) => {
    const model = sequelize['import'](path.join(__dirname, file));
    console.log(model)
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize
		.authenticate()
		.then(() => {
			console.log('Connection has been established successfully.');
		})
		.catch((err) => {
			console.log('Unable to connect to the database:', err);
		});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Import Models such that I can use them in the api just by importing 'db'
db.user = require('./users')(sequelize, Sequelize);
db.applicant = require('./applicant')(sequelize, Sequelize);
db.education = require('./applicant_educational_details')(sequelize,Sequelize);
db.college = require('./college_details')(sequelize,Sequelize);
db.course = require('./courses')(sequelize,Sequelize);
db.options = require('./applicant_options')(sequelize,Sequelize);

module.exports = db;
