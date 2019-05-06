'use strict';

module.exports = (sequelize, DataTypes) => {
  const Option = sequelize.define('Option', {
    user_id: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true,
    },
    course_id: {
        type: DataTypes.INTEGER()
      },
    college_op1:{
        type: DataTypes.INTEGER(),
        allowNull:false
    },
    college_op2:{
        type: DataTypes.INTEGER(),
        allowNull:false
    },
    college_op3:{
        type: DataTypes.INTEGER(),
        allowNull:false
    }
  })

  Option.associate = function (models) {
    models.Option.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'user_id',
        allowNull: false
      },
    });
  };

  Option.associate = function (models) {
    models.Option.belongsTo(models.Course, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'course_id',
        allowNull: false
      },
    });
  };


//must add college foriegn key

//   Option.associate = function (models) {
//     models.Option.belongsTo(models.College, {
//       onDelete: 'CASCADE',
//       foreignKey: {
//         name: 'college_id',
//         allowNull: false
//       },
//     });
//   };



}