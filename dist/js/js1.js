$(function(){
	var goumai = document.getElementById("main_xl_s_zi")
	var ofigure = document.getElementsByTagName("figure");
//	console.log(ofigure)
	ofigure.onmouseover=function(){
		goumai.style.display = "block"
		console.log("aaa")
	}
	
	
	//菜单划过显示
var onav_xl = document.getElementById("nav_xl")	
var onav_xl_xia=document.getElementById("nav_xl_xia")
	onav_xl.onmouseover=function(){
		onav_xl_xia.style.display = "block";
		
	}
	onav_xl.onmouseout=function(){
		onav_xl_xia.style.display = "none";
		
	}
	//二维码出现
	var otou_sj = document.getElementById("tou_sj");
	var oerwei=document.getElementById("erwei");
	otou_sj.onmouseover=function(){
		oerwei.style.display = "block";
	}
	otou_sj.onmouseout=function(){
		oerwei.style.display = "none";
	}
	
	//导航中二级菜单出现
	var onav_er = document.getElementsByClassName("nav_er");
	
	var onav_er_er = document.getElementById("nav_er_er");
//	console.log(onav_er_er)
for(var i=0;i<onav_er.length;i++){
	onav_er[i].onmouseover = function(){
		
		$(this).find('#nav_er_er').css('display','block');
		
//		console.log("aaa")
	}
	onav_er[i].onmouseout = function(){
		onav_er_er.style.display = "none"
		
	}
}
	
	
	
})
	

	


	
	
	
