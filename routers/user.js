//引入express模块
const express=require("express");

//引入连接池
const pool=require("../pool/pool.js");

//创建路由器
var router=express.Router();

//添加用户名确认路由
router.get("/v5/check/:uname",(req,res)=>{
	//获取数据
	var $uname=req.params.uname;
	//执行SQL语句
	pool.query("select uid,uname from xm_user where uname=?",[$uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		};
	});
});
//添加用户注册路由
router.post("/v5/reg",(req,res)=>{
	//获取请求数据
	var obj=req.body;
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $email=req.body.email;
	var $phone=req.body.phone;
	var $gender=req.body.gender;
	//判断是否为空
	console.log(obj);
	if(!$uname){
		res.send("用户名不能为空");
		return;
	};
	if(!$upwd){
		res.send("密码不能为空");
		return;
	};
	if(!$email){
		res.send("邮箱不能为空");
		return;
	};
	if(!$phone){
		res.send("电话不能为空");
		return;
	};
	if(!$gender){
		res.send("请选择性别");
		return;
	};
	//执行SQL语句
	pool.query("insert into xm_user set ?",[obj],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		};
	});
});

//添加用户登录路由
router.get("/v5/login/:uname&:upwd",(req,res)=>{
	//获取数据
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	console.log(req.params);
	//执行SQL语句
	pool.query("select uid,uname,upwd from xm_user where uname=? and upwd=?",[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		}
	});
});


//添加用户修改验证路由
router.get("/v5/updatepwd/:uname&:email&:phone",(req,res)=>{
	//获取数据
	var $uname=req.params.uname;
	var $email=req.params.email;
	var $phone=req.params.phone;
	//执行SQL语句
	pool.query("select uid from xm_user where uname=? and email=? and phone=?",[$uname,$email,$phone],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		};
	});
});


//添加用户修改密码路由
router.put("/v5/updateupwd",(req,res)=>{
	//获取数据
	var $uid=req.body.uid;
	var $upwd=req.body.upwd;
	//执行SQL语句
	pool.query("update xm_user set upwd=? where uid=?",[$upwd,$uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		};
	});
});
//导出路由器
module.exports=router;