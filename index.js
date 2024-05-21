const express =require('express');
const path =require('path');
const app =express();
const ProjectBL =require('./api/AllBL/v1/ProjectBL');
const { error } = require('console');
const {db,TManageDeveloper} =require('./api/DbHelper/models_EpcoCloud');
app.get('/connect',async (req,res)=>{
    var str =await db.Connect();
    res.send(str);
});
const viewsPath = path.join(__dirname, 'views');
// 指定静态文件目录

const endMiddleware =async (req, res, next) => {
    // console.log('拦截器');
    // const defaultWrite = res.write;
    // const defaultEnd = res.end;
    // const chunks = [];
    // res.write = (...restArgs) => {
    //   chunks.push(Buffer.from(restArgs[0]));
    //   defaultWrite.apply(res, restArgs);
    // };
    // res.end = (...restArgs) => {
    //   let mList = ["POST","GET"]
    //   if(mList.indexOf(req.method) !== -1){
    //     if (restArgs[0]) {
    //       chunks.push(Buffer.from(restArgs[0]));
    //     }
    //     const body = Buffer.concat(chunks).toString('utf8');
    //     // const time = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    //     // AdminRequestLog.create({
    //     //   user_id: (req.data && req.data.user_id) ? req.data.user_id : null,
    //     //   url:req.url,
    //     //   method: req.method,
    //     //   body: JSON.stringify(req.body),
    //     //   params: "",
    //     //   ip_address: getClientIp(req),
    //     //   result: JSON.stringify(body),
    //     //   create_time: time,
    //     //   updated_time: time,
    //     // });
    //   }
    //   defaultEnd.apply(res, restArgs);
    // };
    //next();
    if(req.method.toLowerCase()!=='post'){
      res.send({status:false,error:'请求方式出错'});
      return;
    }
    var appid=req.get('appid');
    var user=req.get('user');
    if(appid==undefined || appid ==''){
      res.send({status:false,error:'必须要有请求参数[appid]'});
      return;
    }
    if(user==undefined || user ==''){
      res.send({status:false,error:'必须要有请求参数[user]'});
      return;
    }
    let tmd =await db.getForm(TManageDeveloper,{dno:appid});
    console.log(tmd);
    // res.send({status:false,error:'授权失败'});
    next();
  };
app.use('/api/*',endMiddleware);

app.use(express.static(viewsPath));
app.use('/api/v1/project',ProjectBL);


app.listen(3000);