const {Model, DataTypes} =require('sequelize');
const Database=require('./sequelize');
// const db =new Database('192.168.254.9',1998,'mssql','BHEpco','sa','Ep5admin')
const {db_bhepco} =require('./sequelize');
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
        sequelize:db_bhepco.sequelize,
        timestamps:false,
        tableName:'V_Project'
    }
)
module.exports={
    db:db_bhepco,
    VProject
}