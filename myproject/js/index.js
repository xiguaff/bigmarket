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