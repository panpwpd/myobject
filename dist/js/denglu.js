$(function(){
	
//	登录页面         
	$("#btn").click(function(){
				$.post("http://datainfo.duapp.com/shopdata/userinfo.php",{"status":"login","username":$("#txt").val(),"password":$("#psw").val()},function(data){
					console.log(data);
					if(data.code==0){
						alert("失败");
						
					}else{
						//alert("成功");
						window.location.href="../zhuye.html";
					}
				});
				
			});
			
		});
	
	

	
	
	
	
	
	
	
	
	
	
	
	

