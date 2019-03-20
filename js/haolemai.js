

function countTime() {  
    //获取当前时间  
    let date = new Date();  
    let now = date.getTime();  
    //设置截止时间  
    let str="2019/3/20 00:00:00";
    let endDate = new Date(str); 
    let end = endDate.getTime();  
    
    //时间差  
    let leftTime = end-now; 
    //定义变量 d,h,m,s保存倒计时的时间  
    let d,h,m,s;  
    if (leftTime>=0) {  
        d = Math.floor(leftTime/1000/60/60/24);  
        h = Math.floor(leftTime/1000/60/60%24);  
        m = Math.floor(leftTime/1000/60%60);  
        s = Math.floor(leftTime/1000%60);                     
    }  
    //将倒计时赋值到div中 

    // document.getElementById("_d").innerHTML = d+"天";  
    $('.day i').html(d<10? "0"+d:d);
    $(".hour i").html(h<10? "0"+h:h);  
    $(".minute i").html(m<10? "0"+m:m);  
    $(".second i").html(s<10? "0"+s:s); 

    // $("#time_hour").style.position="relative";
    // $("#time_hour").style.top=2+"px";
    //递归每秒调用countTime方法，显示动态时间效果 setTimeout(countTime,1000);
}

function countTime2() {  
    //获取当前时间  
    let date = new Date();  
    let now = date.getTime();  
    //设置截止时间  
    let str="2019/3/20 00:00:00";
    let endDate = new Date(str); 
    let end = endDate.getTime();  
    
    //时间差  
    let leftTime = end-now; 
    //定义变量 d,h,m,s保存倒计时的时间  
    let d,h,m,s;  
    if (leftTime>=0) {  
        d = Math.floor(leftTime/1000/60/60/24);  
        h = Math.floor(leftTime/1000/60/60%24);  
        m = Math.floor(leftTime/1000/60%60);  
        s = Math.floor(leftTime/1000%60);                     
    }  
    //将倒计时赋值到div中 

    // document.getElementById("_d").innerHTML = d+"天";  
    $('.day span').html(d<10? "0"+d:d);
    $(".hour span").html(h<10? "0"+h:h);  
    $(".minute span").html(m<10? "0"+m:m);  
    $(".second span").html(s<10? "0"+s:s); 

    // $("#time_hour").style.position="relative";
    // $("#time_hour").style.top=2+"px";
    //递归每秒调用countTime方法，显示动态时间效果 setTimeout(countTime,1000);
}

function countTime3() {  
    //获取当前时间  
    let date = new Date();  
    let now = date.getTime();  
    //设置截止时间  
    let str="2019/3/20 20:15:50";
    let endDate = new Date(str); 
    let end = endDate.getTime();  
    
    //时间差  
    let leftTime = end-now; 
    //定义变量 d,h,m,s保存倒计时的时间  
    let d,h,m,s;  
    if (leftTime>=0) {  
        d = Math.floor(leftTime/1000/60/60/24);  
        h = Math.floor(leftTime/1000/60/60%24);  
        m = Math.floor(leftTime/1000/60%60);  
        s = Math.floor(leftTime/1000%60);                     
    }  
    //将倒计时赋值到div中 

    // document.getElementById("_d").innerHTML = d+"天";  
    // $('.day span').html(d<10? "0"+d:d);
    // $(".hour span").html(h<10? "0"+h:h);  
    // $(".minute span").html(m<10? "0"+m:m);  
    // $(".second span").html(s<10? "0"+s:s); 

    $('.day i').html(d<10? "0"+d:d);
    $(".hour i").html(h<10? "0"+h:h);  
    $(".minute i").html(m<10? "0"+m:m);  
    $(".second i").html(s<10? "0"+s:s); 

    // $("#time_hour").style.position="relative";
    // $("#time_hour").style.top=2+"px";
    //递归每秒调用countTime方法，显示动态时间效果 setTimeout(countTime,1000);
}

$(function(){
    setInterval(countTime,1000);
    setInterval(countTime2,1000);
    setInterval(countTime3,1000);
})
    