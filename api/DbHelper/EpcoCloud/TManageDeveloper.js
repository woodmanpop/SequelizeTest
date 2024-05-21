const {Model,DataTypes} =require('sequelize');
const {db_epcocloud} =require('../sequelize');
class TManageDeveloper extends Model{}
TManageDeveloper.init(
    {
        did:{
            type:DataTypes.UUID,
            primaryKey:true,
            allowNull:false,
            field:'d_id'
        },
        dno:{
            type:DataTypes.STRING,
            field:'d_no'
        },
        dname:{
            type:DataTypes.STRING,
            field:'d_name'
        },
        dsecret:{
            type:DataTypes.STRING,
            field:'d_secret'
        }
    },{
        sequelize:db_epcocloud.sequelize,
        timestamps: false,
        tableName:'T_ManageDeveloper'
    }
)
module.exports =TManageDeveloper;