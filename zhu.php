<?php
	header("Content-type:text/html;charset=utf-8");
	//获取用户输入
	$userphone= $_POST['userphone'];
	$userpass = $_POST['userpass'];
	
	//建立连接
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		die("连接失败");
	}
	//连接数据库
	mysql_select_db("mydb1811",$con);
	//执行sql语句
	$sqlstr = "select*from user where userphone = '$userphone'";
	$result = mysql_query($sqlstr,$con);
	if(mysql_num_rows($result)>0){
		mysql_close($con);
		echo "0";
	}else{
		$sqlstr = "insert into user (userphone ,userpass) values ('$userphone','$userpass')";
		$result = mysql_query($sqlstr,$con);
		mysql_close($con);
		if($result==1){
			echo "1";
		}else{
			echo "0";
		}
	}
	
?>