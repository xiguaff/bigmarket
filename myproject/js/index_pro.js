(function(){
    ajax({
        url:"/index/v5/index_list",
        type:"get",
        dataType:"json",
    }).then(result=>{

        // 3楼商品
        var [p1,p2,p3,p4,p5,p6]=result;
        var oneflow=[p1,p2,p3,p4,p5,p6];        
        var list_1f=document.querySelectorAll("[data-rel=pro]");
        for(var i=0;i<oneflow.length;i++){
            list_1f[i].innerHTML=`
            <div class="three_first mr-md-2 mb-2 p-3">
            <div class="text-center">
                <img src="${oneflow[i].pic}" alt="">
            </div>
            <div>
                <div class="h4 price_color">￥${oneflow[i].price.toFixed(2)}</div>
                <div><a href="" class="detail_a text-muted">${oneflow[i].title}</a></div>
                <div class="font_small text-danger">${oneflow[i].detail}</div>
                <div class="d-flex justify-content-around">
                    <div><a href="${oneflow[i].href}" class="font_normal text-muted">水密码自营店</a></div>
                    <div><button class="beaut_btn">加入购物车</button></div>
                </div>
            </div>
        </div>`;
        };


        // 猜你喜欢
        var [,,,,,,p7,p8,p9,p10,p11,p12,p13,p14,p15]=result;
        var like=[p7,p8,p9,p10,p11,p12,p13,p14,p15];
        var likes=document.querySelectorAll("[data-like=likes]");
        for(var j=0;j<like.length;j++){
            likes[j].innerHTML=`
            <div class="love_pro mr-md-2 mb-2">
            <div class="text-center mt-2">
                <img src="${like[j].pic}" alt="">
            </div>
            <div class="p-3">
                <p class="text-muted mb-0">${like[j].title}</p>
                <p class="price_color mb-0">￥${like[j].price.toFixed(2)}</p>
                <p class="font_small text-muted">1.5万+条评价 <span class="ml-2">每满300-30</span></p>
            </div>
            </div>`;
        };

        //更多商品
        var [,,,,,,,,,,,,,,,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27]=result;
        var more=[p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27];
        var mores=document.querySelectorAll("div#card div.d-flex div.w-25");
        for(var a=0;a<more.length;a++){
            mores[a].innerHTML=`
            <div class="text-center">
                <img src="${more[a].pic}" alt="">
            </div>
            <p class="text-muted font_small mt-3 mb-0 p_height">${more[a].title}</p>
            <p class="price_color font_small mb-1">￥${more[a].price.toFixed(2)}</p>
            <p class="text-muted font_small">180人已购买<span><a href="${more[a].href}"><img src="../image/shop_car.png" alt=""></a></span></p>`;
        };
    });
})();



// (function(){
//     ajax({
//         url:"/index/v5/index_like",
//         tyle:"get",
//         dataType:"json",
//     }).then(result=>{
//         console.log(result);
//     });
// })();