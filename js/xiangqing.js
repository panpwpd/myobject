$(function(){
	
	//三级菜单划过出现
	$("#zhuye_yousan").hover(function(){
		console.log("aaa")
		$(this).find(".zhuye_sanji").show().css({"background":"#999"})
	},function(){
		$(this).find(".zhuye_sanji").hide()
	})
	
	$(".zhuye_sanji").hover(function(){
		$(this).children().css({"background":"#999"})
	})
	
	
	
	
	var obox = document.getElementById("box");
			var tupianq = document.getElementById("tupianq");
			var fdj = document.getElementById("fdj");
			var fdqu = document.getElementById("fdqu");
			var yt = tupianq.children[0];
			var fdt = fdqu.children[0];
			//鼠标划过原图区时 放大镜和放大的图片显示出来
			tupianq.onmouseover = function(){
				fdj.style.display = "block";
				fdqu.style.display = "block";
			}
			tupianq.onmouseout = function(){
				fdj.style.display = "none";
				fdqu.style.display = "none";
			}
			//当鼠标在原图上移动时
			tupianq.onmousemove = function(e){
	//要考虑到当屏幕有滚动条时将页面向上划,可视区域发生改变,因此要使用page属性,即当前文档的上边距和左边距
	//规定放大镜的运动范围
				var evt = e||event;
				var x = evt.pageX - obox.offsetLeft;
				var y = evt.pageY - obox.offsetTop;
				var _left = x-fdj.offsetWidth/2;
				var _top = y-fdj.offsetHeight/2;
				if(_left<=0){
					_left=0;
				}
				if(_left>=tupianq.offsetWidth - fdj.offsetWidth){
					_left=tupianq.offsetWidth - fdj.offsetWidth
				}
				if(_top<=0){
					_top=0;
				}
				if(_top>=tupianq.offsetHeight - fdj.offsetHeight){
					_top=tupianq.offsetHeight - fdj.offsetHeight;
				}
				//上面是规定范围,下面两行是将放大镜出现在原图中.
				fdj.style.left = _left+"px";
				fdj.style.top  = _top+"px";
				
				//将放大镜在原图上的范围与放大区域的图链接起来
				//放大图   距离  放大区域   的左边距=  放大镜距放原图区域的左边距/原图的宽   * 放大区域的宽
			fdt.style.left = -fdj.offsetLeft/tupianq.offsetWidth*fdt.offsetWidth+"px";
			fdt.style.top = -fdj.offsetTop/tupianq.offsetHeight*fdt.offsetHeight+"px";
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
	
	
	
	$("#qugouwuche").click(function(){
		window.location.href = "gouwuche.html";
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
})

