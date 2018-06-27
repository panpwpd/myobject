$(function(){
	
	//遍历数据
		
		(function(){
		var zhuye_zhuashi_hang_kuai_wrap=document.getElementsByClassName("zhuye_zhuashi_hang_kuai_wrap")[0];
//		   console.log(zhuye_zhuashi_hang_kuai_wrap)
		      var str1="";
		      for(var i=0 ; i<60;i++){
		      	str1+=`
		      	 <div class="zhuye_zhuashi_hang_kuai">
					
					<div id="zhuye_zhuashi_hang_kuai_tu">
						<img src="images/96828136_1_01.jpg" alt="" />
					</div>
					<div id="zhuye_zhuashi_hang_kuai_zi">
						<div id="zhuye_zhuashi_hang_kuai_zi_tu">
							
							<a href=""><img src="images/96828136_1_01--w_30_h_30.jpg" alt="" /></a>
							<a href=""><img src="images/96828136_2_01--w_30_h_30.jpg" alt="" /></a>
							<a href=""><img src="images/96828136_4_01--w_30_h_30.jpg" alt="" /></a>
							
						</div>
						<p>女子短袖针织衫</p>
						<p>￥99.00</p>
						<div id="zhuye_zhuashi_hang_kuai_zi_a">
							
							<a href="">
								立即购买
								<span></span>
							</a>
							
						</div>
					</div>
					
				</div>

		      	
		      	`
		      }
		      zhuye_zhuashi_hang_kuai_wrap.innerHTML=str1;
		
		})();
		
	
	
	
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
			};
			
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
			};
			
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
		$(this).find("span").animate({"width":"300px"}).end().find("a").css({"color":"#fff"});
	},function(){
		$(this).find("span").animate({"width":"0px"}).end().find("a").css({"color":"#999"});
	})
	
	//展示商品下面购买状态
	$("#zhuye_zhuashi_hang_kuai_zi_a").hover(function(){
		$(this).find("span").animate({"width":"125px"}).end().find("a").css({"color":"#fff"});
	},function(){
		$(this).find("span").animate({"width":"0px"}).end().find("a").css({"color":"#999"});
		
	});
	
	//划过商品下面的字的时候高度变高
	$(".zhuye_zhuashi_hang_kuai").hover(function(){
		//console.log("aaa")
		$(this).find("#zhuye_zhuashi_hang_kuai_zi").css({"height":"148px","background-color":"#fff","border":"1px solid #cecece",}).end().find("#zhuye_zhuashi_hang_kuai_zi_tu").show().end().find("#zhuye_zhuashi_hang_kuai_zi_a").show();
	
	},function(){
		$(this).find("#zhuye_zhuashi_hang_kuai_zi").css({"height":"75px","background-image":"url(images/overburden.png)"}).end().find("#zhuye_zhuashi_hang_kuai_zi_tu").hide().end().find("#zhuye_zhuashi_hang_kuai_zi_a").hide();
		
})
	//划过图下面的小图会自动到大框中
	
	
	
	
	
	//主页侧边栏
	$("#shouye_shouchang").hover(function(){
		$(this).find("p").show();
	},function(){
		$(this).find("p").hide();
	})
	
	$("#shouye_liulan").hover(function(){
		$(this).find("p").show();
	},function(){
		$(this).find("p").hide();
	})
	
	$("#shouye_shijian").hover(function(){
		console.log("aaa")
		$(this).find("p").show();
	},function(){
		$(this).find("p").hide();
	})
	
	$("#shouye_kefu").hover(function(){
		$(this).find("p").show();
	},function(){
		$(this).find("p").hide();
	})
	
	$("#shouye_ceerma").hover(function(){
		$(this).find("p").show();
	},function(){
		$(this).find("p").hide();
	})
	
	var timerhui = null;
	var ozhuyehui = document.getElementById("zhuye_dingbu");
	window.onscroll = function(){
		var Oscroll = document.documentElement.scrollTop||document.body.scrollTop;
					if(Oscroll>=300){
						ozhuyehui.style.display = "block";
					}else{
						ozhuyehui.style.display = "none";
					}
	}
	ozhuyehui.onclick = function(){
		timerhui = setInterval(function(){
			var scrolltop1 = document.documentElement.scrollTop||document.body.scrollTop;
			var target1=0;
			var speed1 = (target1-scrolltop1)/9;
			speed1=speed1>0? Math.ceil(speed1):Math.floor(speed1);
			document.documentElement.scrollTop = document.body.scrollTop =scrolltop1+speed1;
				if(speed1==target1){
					clearInterval(timerhui);
				}
		},30)
		
	};
	
	//三级菜单划过出现
	$("#zhuye_yousan").hover(function(){
		console.log("aaa")
		$(this).find(".zhuye_sanji").show().css({"background":"#999"})
	},function(){
		$(this).find(".zhuye_sanji").hide()
	})
	
	$(".zhuye_sanji").hover(function(){
		$(this).children().css({"background":"#999"})
	});

    
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})	
	
	
	
	
	
	
	
	

	
	

	


	
	
	
