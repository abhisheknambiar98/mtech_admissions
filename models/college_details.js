'use strict';

module.exports = (sequelize, DataTypes) => {
    const College = sequelize.define('College',{

        college_id: {
            type: DataTypes.INTEGER(),
            primaryKey: true,
            autoIncrement: true,
          },
          college_name:{
              type:DataTypes.STRING(200)
          },
          category:{
            type:DataTypes.STRING(60)
        },
        district:{
            type:DataTypes.STRING(100)
        },
        university_affiliated:{
            type:DataTypes.STRING(100)
        },
        is_aicte_affiliated:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }

    });
return College;
}


