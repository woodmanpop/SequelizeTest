const {Model,DataTypes} =require('sequelize');
class TManageDeveloper extends Model{
    constructor(db){
        return TManageDeveloper.init(
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
                sequelize:db,
                timestamps: false,
                tableName:'T_ManageDeveloper'
            }
        )
    }
}
module.exports =TManageDeveloper;