const express=require("express");
const pool=require("../pool/pool");
var router=express.Router();

router.get("/v5/index_list",(req,res)=>{
    var sql=`select * from index_1f_product union select * from index_like_product union select * from index_more_product`;
    pool.query(sql,(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        };
    });
});

module.exports=router;