
function skiplogin(){
    //获取前一个网页？后面的参数
	var url=new URLSearchParams(location.search);
	//获取参数中uid
    var uid=url.get("uid");
    if(uid!==null){
        alert("小可爱已登录哟");
    }else{
        location.href="userlogin.html"
    };
}


function skipuserlist(){
    //获取前一个网页？后面的参数
	var url=new URLSearchParams(location.search);
	//获取参数中uid
    var uid=url.get("uid");
    if(uid!==null){
        location.href="userlist.html?uid="+uid;
    }else{
        alert("小可爱请先登录哟");
    };
};

/* 创建秒杀框函数*/
function conttime(){
    //获取当地时间
    var now= new Date();
    //设置截止时间
    var end=new Date("2019/7/6 00:00:00");
    //计算两个时间相差的毫秒数并转成秒数
    var diff=Math.floor((end-now)/1000);
    //计算相差的小时数
    var hour=Math.floor(diff/3600);
    //计算相差的分钟数
    var min=Math.floor(diff/60)%60;
    //计算相差的秒钟数
    var second=diff%60;
    function setNum(num){
        if(num<10){
            num='0'+num;
        }
        return num;
    };
    hour=setNum(hour);
    min=setNum(min);
    second=setNum(second);
    //将获取的时间拼接到页面
    hourr.innerHTML=hour;
    minn.innerHTML=min;
    sec.innerHTML=second;
    //设置一次性定时装置1秒钟一次反复调用函数conttime
    setTimeout(conttime,1000);
}


//抽奖框
function get(){
    var arr=["./image/1f_1.jpg","./image/1f_2.jpg","./image/pro_honor2.jpg","./image/pro_honor3.jpg","./image/pro_1.jpg","./image/pro_2.jpg","./image/pro_phone.jpg","./image/phone_mi1.jpg","./image/phone_mi2.jpg","./image/phone_mi3.png"]
    var i=true;
    var timer;
    return function(){
        if(i==true){
            timer=setInterval(function(){
                document.getElementById("img_draw").src=arr[Math.floor(Math.random()*arr.length)];
            },50)
            i=false;
            but.style.background="#f00";
            but.innerHTML="结束";
        }else{
            clearInterval(timer);
            i=true;
            but.innerHTML="开始";
            but.style.background="#ff5000";
        };
    };
};
var draw=get();