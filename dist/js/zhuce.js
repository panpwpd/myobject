$(function(){
	//先让随机出现4位验证码
	
		/*var odl_yzm = document.getElementById("dl_yzm");
		var odl_yz_mazhi = document.getElementById("dl_yz_mazhi");
		var odl_tanchu = document.getElementById("dl_tanchu");
		
		 odl_yzm.onclick = function(){
				var str="abcdefghijklmnopqrstuvwxyz1234567890";
//			
			var yanzhengma = "";
			for(var i=0;i<4;i++){
				var randNum = parseInt(Math.random()*str.length);
				yanzhengma = yanzhengma+str[randNum];
			}
			odl_yzm.innerHTML = yanzhengma;
		}();
//		
		var dl_tanchu = document.getElementById("dl_tanchu ");
//		
		$("#dl_btn").click(function(){
			//console.log($("#dl_yz_mazhi").val()===$("#dl_yzm").val())
			//console.log($("#dl_yzm").val())
			if($("#dl_yz_mazhi").val() == ""){
	
				$("#dl_tanchu").text("验证码不能为空").show();
			}else if($("#dl_yz_mazhi").val().toUpperCase() == $("#dl_yzm").text().toUpperCase()){
		
				$("#dl_tanchu").text("验证码正确");
			}else{
				
				$("#dl_tanchu").text("验证码错误").show();
			}
			
		});	
			
//	//获取电话号码
//	
	var reg = /^1(3|5|7|8)\d{9}$/;
	var dl_xiedianhua = document.getElementById("dl_xiedianhua");
	var dl_tel_cs=document.getElementById("dl_tel_cs");
	dl_xiedianhua.onblur=function(){
		console.log("aa")
		if(reg.test(dl_xiedianhua.value)==false){
			dl_tel_cs.innerHTML = "请输入正确电话号码"
			dl_tel_cs.style.color="red"
		}else{
			dl_tel_cs.innerHTML = ""
		}
//		
	}*/
//	var dl_zhuce_chs = document.getElementById("dl_zhuce_chs");
//	var tijiao = document.getElementById("tijiao");
//	
//	tijiao.onclick = function(){
//		if(dl_tel_cs.innerHTML = "" && dl_tanchu.innerHTML = "验证码正确" ){
//			dl_zhuce_chs.innerHTML = "注册成功"
//			dl_zhuce_chs.style.display="block";
//			//window.location.href="http://localhost:8080/zhuye.html";
//		}else{
//			dl_zhuce_chs.innerHTML = "检查信息是否错误"
//			dl_zhuce_chs.style.display="block";
//		}
//		
//		
//	}
//			
//$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{"status":"register","userID":$("#dl_xiedianhua").val(),"password":$("#dl_yz_mazhi").val()},function(data){
//	console.log(data)
//})

$("#dl_btn").click(function(){
	
	//	$.get
			/*url:待载入页面的URL地址

			data:待发送 Key/value 参数。

			callback:载入成功时回调函数。

		翻墙软件  网址	http://datainfo.duapp.com/shopdata/datainfo.html


			*/
	
	$.get(
		"http://datainfo.duapp.com/shopdata/userinfo.php",
		{"status":"register","userID":$("#dl_xiedianhua").val(),"password":$("#dl_yz_mazhi").val()},
		function(data){
			console.log(data)
			if(data == 0){
				alert("该用户名已被注册");
			}else if(data == 1){
			window.location.href="denglu.html";
			}
	})		
			
})

	
	
})
