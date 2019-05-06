'use strict';

module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
      course_id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true
      },
      course_name:{
          type: DataTypes.STRING(200)
      },
        department:{
          type: DataTypes.STRING(100)
      },
      eligibility_1:{
        type: DataTypes.STRING(100)
    },
    eligibility_2:{
        type: DataTypes.STRING(100)
    },
    eligibility_3:{
        type: DataTypes.STRING(100)
    }


    });

return Course;
}

