const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const models = require("../../models");
const Promise = require("bluebird");
const key = require("../../config/api.json").API_SECRET;
const { sequelize } = require("../../models");

const authMethods=[]

authMethods.registerApplicant=function(data){
    return new Promise(function(resolve,reject){
        bcrypt.hash(data.password,saltRounds).then(hash=>{
            return sequelize.transaction(function(t1){
                let user={}
                user.email=data.email
                user.password=hash
                user.is_admin=false

                return models.user
                    .create(user,{transaction:t1})
                    .then(function(user){
                        resolve({success:true})
                    })
                    .catch(function(err){
                        reject({success:false})
                    })
            })
        })
    }) 
}


authMethods.registerAdmin=function(data){
    return new Promise(function(resolve,reject){
        bcrypt.hash(data.password,saltRounds).then(hash=>{
            return sequelize.transaction(function(t2){
                let user={}
                user.email=data.email
                user.password=hash
                user.is_admin=true

                return models.user
                    .create(user,{transaction:t2})
                    .then(function(user){
                        resolve({success:true})
                    })
                    .catch(function(err){
                        reject({success:false})
                    })
            })
        })
    }) 
}


authMethods.authenticate=function(email,password){
    return new Promise(function(resolve,reject){
models.user.findOne({
    where:{email:email}
    }).then(result=>{
        if(result){
            console.log(result.dataValues)
            let isSame=bcrypt.compare(password,result.dataValues.password)
                if(isSame){
                    console.log("Correct password!")
                    const token=jwt.sign(
                        {id:result.dataValues.user_id,
                         privilege:result.dataValues.is_admin,
                         email:email
                        },
                        key,
                        {expiresIn:"1h"}
                    );
                    let privilage=result.dataValues.is_admin;
                    let user_id=result.dataValues.user_id
                    resolve({
                        success:true,
                        token:token,
                        privilege:privilage,
                        user_id:user_id
                    })
    
                }
                else{
                    console.log("Incorrect password");

                    reject({
                        success:false, token:null
                    });
                }

        }
        else{
            reject(new Error());
        }
    }).catch(err=>{
        reject(err);
    })
    })
}

module.exports=authMethods;