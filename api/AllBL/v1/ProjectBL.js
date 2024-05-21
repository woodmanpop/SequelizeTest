const express =require('express');
const router =express.Router();
const {db,VProject}=require('../../DbHelper/models_BHEpco');
const namespace ='user';
router.post('/getlist',async(req,res)=>{
    // var rows =[{did:'001',dname:'0002',dstart:'2024-1-2'},
    // {did:'002',dname:'0003',dstart:'2024-1-3'}
    // ];
    // console.log(req.headers['token']);
    let project =await db.getByCondition(VProject,{exclude: ['dstart']},{},[['dno','desc']]);
    if(project.status){
        var rlt ={status:true,rows:project.data};
        res.send(rlt);
    }
    else{
        var rlt ={status:false,error:project.error};
        res.send(rlt);
        // console.log(project.error);
    }
    // var data ={name:'woodman',enable:true}
    // // console.log(db);
    // let u =await db.insertData(user,data);
    // console.log(u.status?'数据写入成功':('写入失败：\n',u.error));
})
module.exports=router;