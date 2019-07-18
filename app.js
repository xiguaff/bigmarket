//引入express模块
const express=require("express");

//引入body-parser中间件
const bodyParser=require("body-parser");

//引入路由器
const userRouter=require("./routers/user.js");
const index=require("./routers/index.js");

//创建服务器
var app=express();

//监听端口
app.listen(1994);

//托管静态资源目录
app.use(express.static("myproject/html"));
app.use(express.static("myproject"));
//app.use(express.static("myproject/image"));
//app.use(express.static("myproject/js"));

//使用body-parser中间件
app.use(bodyParser.urlencoded({
	extended:false
}));

//使用路由器
app.use("/mypro",userRouter);
app.use("/index",index);