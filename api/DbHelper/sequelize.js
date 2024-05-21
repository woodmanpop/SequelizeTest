const {Sequelize} = require('sequelize');
class Database{
    constructor(host,port,type,databaseName,username,password){
        this.sequelize =new Sequelize(databaseName,username,password,{
            host:host,
            port:port,
            dialect:type
        });
    }
    async initialize(){
        try{
            // await this.sequelize.sync();
            return {status:true};
        }catch(error){
            return {status:false,error};
        }
    }
    async checkConnection(){
        try{
            await this.sequelize.authenticate();
            return{status:true};
        }
        catch(error){
            return {status:false,error};
        }
    }
    async closeConnection(){
        try{
            await this.sequelize.close();
            return {status:true};
        }catch(error){
            return {status:false,error};
        }
    }
    async insertData(dataTable,insertData){
        try{
            // console.log(insertData);
            await dataTable.create(insertData);
            return{status:true};
        }catch(error){
            return {status:false,error:error};
        }
    }
    async getByCondition(dataTable,props,condition,order){
        try{
            const data= await dataTable.findAll({attributes:props, where:condition,order:order});
            return {status:true,data:data.map(data=>data.toJSON())};
        }catch(error){
            return {status:false,error:error};
        }
    }
    async getForm(dataTable,condition){
        try{
            const data= await dataTable.findAll({where:condition});
            var rlt = null;
            if(data.length>0)
                rlt =data[0].toJSON();
            return {status:true,data:rlt};
        }catch(error){
            return {status:false,error:error};
        }
    }
}
const db_bhepco =new Database('192.168.254.9',1998,'mssql','BHEpco','sa','Ep5admin');
const db_epcocloud =new Database('192.168.254.9',1998,'mssql','EpcoCloud','sa','Ep5admin');
module.exports ={
    db_bhepco,
    db_epcocloud
}