function saveCookie(key,value,dayCount){
	//1.定义日期
	var d=new Date();
	d.setDate(d.getDate()+dayCount);
	//2.保存cookie
	document.cookie=key+"="+escape(value)+";expires"+d.toGTMstring();
}


function checkAll(type,value){
	var reg=null;
	switch(type){
		case"userphone":reg=/^1[^0126]\d{9}$/;break;
		case"userpass":reg=/^[a-zA-z0-9!@#$^&*]{6,16}$/;break;
		default:;
	}
	if(reg!=null){
		if(reg.test(value)){
			return true;
		}
	}
	return false;
}


$(function(){
	//手机号码失焦
	$('#userphone').blur(function(){
		if($('#userphone').val().length==""){
			$(".error").show(300).html('不能为空');
			$(".error").css("color","#d00");
		}else if(checkAll("userphone",$("#userphone").val())){
			//数据库判断
		}
	})
	//


})

//注册
$(function(){
	
	$(".register_btn").click(function(){
		let phone=$("#userphone").val();
		let pass=$("#userpass").val();
		$.ajax({
		   type: "POST",
		   url: "zhu.php",
		   data: "userphone="+phone+"&userpass="+pass,
		   success: function(msg){
		   		console.log(msg);
		   		if(msg==0){
		   			$(".error").css({display:"block"});
		   			$(".error").html("电话已存在");
		   			$(".error").css("color","red");
		   		}else{
		   			window.location.href="registe.html";
		   		}

		   }
		});

	})
})
// 登录
$(function(){
	$(".deng").click(function(){
		let phone=$("#userphone").val();
		let pass=$("#userpass").val();
		console.log(phone);
		console.log(pass);
		$.ajax({
		   type: "POST",
		   url: "deng.php",
		   data: "userphone="+phone+"&userpass="+pass,
		   success: function(msg){
		   		console.log(msg);
		   		if(msg==0){
		   			$(".error").css({display:"block"});
		   			$(".error").html("亲啊，您输入的电话或密码有误");
		   			$(".error").css("color","red");
		   		}else{
					saveCookie("userphone",phone,"7")
		   			window.location.href="okbuy.html";
		   		}

		   }
		});

	})
})
