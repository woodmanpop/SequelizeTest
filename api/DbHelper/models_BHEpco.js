const {Model, DataTypes} =require('sequelize');
const Database=require('./sequelize');
const db =new Database('192.168.254.9',1998,'mssql','BHEpco','sa','Ep5admin')
class VProject extends Model{}

VProject.init(
    {
        dno:{
            primaryKey:true,
            type:DataTypes.STRING,
            allowNull:false,
            field:'d_no'
        },
        dname:{
            type:DataTypes.STRING,
            field:'d_name'
        },
        dstart:{
            type:DataTypes.DATE,
            field:'d_start'
        }
    },{
        sequelize:db.sequelize,
        timestamps:false,
        tableName:'V_Project'
    }
)
module.exports={
    db,
    VProject
}