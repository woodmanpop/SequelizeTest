const {Model, DataTypes} =require('sequelize');
const Database=require('./sequelize');
const db =new Database('192.168.254.9',1998,'mssql','EpcoCloud','sa','Ep5admin')
const TManageDeveloper = require('./EpcoCloud/TManageDeveloper');
var tManageDeveloper =new TManageDeveloper(db.sequelize);
module.exports= {
    db,
    tManageDeveloper
}