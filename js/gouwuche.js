$(function(){
	//点击继续购物回到首页
	$("#gouwu_hs").click(function(e){
		var evt=e||event;
		evt.preventDefault();
		location.href = "../zhuye.html";
	})
	
	//点击加减数量发生变化
	
	var shangpinxian = document.getElementById("shangpinxian");
	var shangpinjian = document.getElementById("shangpinjian");
	var shangpinjia=document.getElementById("shangpinjia");
	var  gouwuche_goumai_li=document.getElementById("gouwuche_goumai_li");
	//价钱变量
	var danjia1 = document.getElementById("danjia1");
	var  danjia = document.getElementById(" danjia");
	var huquzhuye = document.getElementById("huquzhuye");
	var shu = shangpinxian.value=1;
	var zongjia = document.getElementsByClassName("zongjia")[0];
	var zongjia1 = document.getElementsByClassName("zongjia")[1];
	shangpinjia.onclick=function(){
		shu++;
		console.log(danjia.innerHTML)
	 	shangpinxian.innerHTML=shu;
	 	zongjia.innerHTML = shu*danjia.innerHTML+".00";
	 	zongjia1.innerHTML = shu*danjia.innerHTML+".00";
	}
	shangpinjian.onclick=function(){
		
		if(shu<=1){
			gouwuche_goumai_li.style.display="none";
			
		}else{
			shu--;
		}
		shangpinxian.innerHTML=shu;
		zongjia.innerHTML = shu*danjia.innerHTML+".00";
	 	zongjia1.innerHTML = shu*danjia.innerHTML+".00";
		
		
		
	}
	
	huquzhuye.onclick = function(){
		location.href = "../zhuye.html";
	}
	
	 
	
	
	
	
	
	
	
	
})