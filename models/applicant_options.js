'use strict';

module.exports = (sequelize, DataTypes) => {
    const Option = sequelize.define('Education', {
      user_id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
      },
    course_id:{
        type:DataTypes.INTEGER()
    },
    college_opt1:{
        type:DataTypes.INTEGER(),
        allowNull:false
    },
    college_opt2:{
        type:DataTypes.INTEGER(),
        allowNull:false
    },
    college_opt3:{
      type:DataTypes.INTEGER(),
      allowNull:false
  }
    });


    
    

      
return Option;
};