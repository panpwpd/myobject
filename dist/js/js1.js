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
	
	//导航永远在顶部
	var onav = document.getElementById("nav");
	$(window).scroll(function(){
		if($(document).scrollTop()>=60){
			$("#nav").css({"position":"fixed","z-index":999,"left":"0","right":"0","top":"0","margin":"atuo"});
		}else{
			$("#nav").css("position","static");
		}
	//	console.log("aaa")
	})
	
	//main2 中轮播图

	var omain2_lb_left_kuai = document.getElementById("main2_lb_left_kuai");
			var omain2_left_img = document.getElementById("main2_lb_left_img");
			var omain2_left_numlist = document.getElementById("main2_lb_left_num");
			var amain2_left_list = omain2_left_img.children;
			var len =amain2_left_list.length;
			var perWidth =amain2_left_list[0].offsetWidth;
			
// -------------------------------------

			var amian2_left_numlist = omain2_left_numlist.children;
			
			var aBtn = document.getElementsByClassName("btn");
			var oPrev = aBtn[0];
			var oNext = aBtn[1];
			
// ---------------------------------------------


			omain2_left_img.style.width = perWidth * len + "px";
			
			var i = 0;
			
			var timer = setInterval(function(){
				move();
			},3000);
			
// --------------------------------------

			function move(){
				i++;
				//两个临界值的判断
				if(i==len){
					omain2_left_img.style.left = 0;
					i = 1;
				}
				if(i==-1){
					omain2_left_img.style.left = -perWidth * (len-1) + "px";
					i = len - 2;
				}
				for(var j = 0; j < amian2_left_numlist.length; j++){
					amian2_left_numlist[j].className = "";
				}
				
				//从第三张图片往第四张变时，显示的是第一张，对应的角标要点亮	
				if(i==len-1){
					amian2_left_numlist[0].className = "hover";
				}else{
					amian2_left_numlist[i].className = "hover";
				}
				
				
				startMove(omain2_left_img,{left:-perWidth*i});
			}
			
// ------------------------------------------

			oNext.onclick = function(){
				move();
			}
			
			oPrev.onclick = function(){
				i = i - 2;
				move();
			}
			
			
			for(let k = 0; k < amian2_left_numlist.length; k++){
				amian2_left_numlist[k].onmouseover = function(){
					i = k-1;
					move();
					
				}
			}
			
			
			omain2_lb_left_kuai.onmouseover = function(){
				clearInterval(timer);
			}
			omain2_lb_left_kuai.onmouseout = function(){
				timer = setInterval(function(){
					move();
				},3000);
			}
			
	//main2中右边轮播图
	
	var omain2_lb_right_kuai = document.getElementById("main2_lb_right_kuai");
			var omain2_right_img = document.getElementById("main2_lb_right_img");
			var omain2_right_numlist = document.getElementById("main2_lb_right_num");
			var amain2_right_list = omain2_right_img.children;
			var lenr =amain2_right_list.length;
			var perWidthr =amain2_right_list[0].offsetWidth;
			
// -------------------------------------

			var amian2_right_numlist = omain2_right_numlist.children;
			
			var aBtnright = document.getElementsByClassName("btnright");
			var oPrevright = aBtnright[0];
			var oNextright = aBtnright[1];
			
// ---------------------------------------------


			omain2_right_img.style.width = perWidthr* lenr + "px";
			
			var io = 0;
			
			var timer1 = setInterval(function(){
				move1();
			},3000);
			
// --------------------------------------

				function move1(){
				io++;
				//两个临界值的判断
				if(io==lenr){
					omain2_right_img.style.left = 0;
					io = 1;
				}
				if(io==-1){
					omain2_right_img.style.left = -perWidthr * (lenr-1) + "px";
					io = lenr - 2;
				}
				for(var l = 0; l < amian2_right_numlist.length; l++){
					amian2_right_numlist[l].className = "";
				}
				
				//从第三张图片往第四张变时，显示的是第一张，对应的角标要点亮	
				if(io==lenr-1){
					amian2_right_numlist[0].className = "huaguo";
				}else{
					amian2_right_numlist[io].className = "huaguo";
				}
				
				
				startMove(omain2_right_img,{left:-perWidthr*io});
			}
			
// ------------------------------------------

			oNextright.onclick = function(){
				move1();
			}
			
			oPrevright.onclick = function(){
				io = io-2;
				move1();
			}
			
			
			for(let x = 0; x < amian2_right_numlist.length; x++){
				amian2_right_numlist[x].onmouseover = function(){
					io = x-1;
					move1();
					
				}
			}
			
			
			omain2_lb_right_kuai.onmouseover = function(){
				clearInterval(timer1);
			}
			omain2_lb_right_kuai.onmouseout = function(){
				timer1 = setInterval(function(){
					move1();
				},3000);
			}
	
	//最下方的"添加更多划过效果"
	$("#zhuye_zengduo_kuang").hover(function(){
		$(this).find("span").animate({"width":"300px"}).end().find("a").css({"color":"#fff"})
	},function(){
		$(this).find("span").animate({"width":"0px"}).end().find("a").css({"color":"#999"})
	})
	
	//头部搜索框
	var 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
	
	

	


	
	
	
