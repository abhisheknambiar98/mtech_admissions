'use strict';

module.exports = (sequelize, DataTypes) => {
    const Education = sequelize.define('Education', {
      user_id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
      },
    qualification:{
        type:DataTypes.STRING(100)
    },
    branch:{
        type:DataTypes.STRING(100)
    },
    college_name:{
        type:DataTypes.STRING(200)
    },
    university_name:{
        type:DataTypes.STRING(100)
    },
    is_aicte_affiliated:{
        type:DataTypes.BOOLEAN
    },
    year_of_passing:{
        type: DataTypes.STRING(4)
    },
    semester_1_sgpa:{
        type:DataTypes.FLOAT
    },
    semester_2_sgpa:{
        type:DataTypes.FLOAT
    },
    semester_3_sgpa:{
        type:DataTypes.FLOAT
    },
    semester_4_sgpa:{
        type:DataTypes.FLOAT
    },
    semester_5_sgpa:{
        type:DataTypes.FLOAT
    },
    semester_6_sgpa:{
        type:DataTypes.FLOAT
    },
    gate_reg_no:{
        type:DataTypes.STRING(10)
    },
    gate_score:{
        type:DataTypes.FLOAT
    },
    physical_disability:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    is_sponsored:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }

    });

    Education.associate = function (models) {
        models.Education.belongsTo(models.Applicant, {
          onDelete: 'CASCADE',
          foreignKey: {
            name: 'user_id',
            allowNull: false
          },
        });
      };
      
return Education;
};