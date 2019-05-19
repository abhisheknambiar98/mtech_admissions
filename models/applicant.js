'use strict';

const bcrypt= require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const Applicant = sequelize.define('Applicant', {
      user_id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
      },
      applicant_id:{
        type:DataTypes.STRING(8),
        primaryKey:true
      },
    full_name:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    dob: {
        type:DataTypes.DATE
    },
    sex:{
        type:DataTypes.STRING(1)
    },
    email:{
        type:DataTypes.STRING(200)
    },
    address:{
        type:DataTypes.STRING(1000)
    },
    mobile_number:{
        type:DataTypes.STRING(10)
    },
    landline_number:{
        type:DataTypes.STRING(11)
    },
    religion:{
        type:DataTypes.STRING(50)
    },
    caste:{
        type:DataTypes.STRING(50)
    },
    nationality:{
        type:DataTypes.STRING(100)
    },
    is_keralite:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    non_creamy:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }

    });

    Applicant.associate = function (models) {
        models.Applicant.belongsTo(models.User, {
          onDelete: 'CASCADE',
          foreignKey: {
            name: 'user_id',
            allowNull: false
          },
        });
      };
      
return Applicant;   
};