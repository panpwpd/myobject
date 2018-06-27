$(function(){
	
	//遍历图片数据
	(function(){
		var libiao_zhanshi_hang_kuai_wrap = document.getElementsByClassName("libiao_zhanshi_hang_kuai_wrap")[0];
		var strlibiao = "";
		for(var i=0;i<60;i++){
			strlibiao+=`
							<div class="libiao_zhanshi_hang_kuai">
					<div id="libiao_zhanshi_hang_kuai_tu">
						<img src="../images/12825588_big--w_220_h_220.jpg" alt="" />
					</div>
					<div id="libiao_zhanshi_hang_kuai_zi">
						<div>
							<img src="../images/12825588_1_01--w_30_h_30.jpg" alt="" />
							<img src="../images/12825588_2_01--w_30_h_30.jpg" alt="" />
							<img src="../images/12825588_3_01--w_30_h_30.jpg" alt="" />
						</div>
						<div>
						￥535	
						</div>
						<div>
							汤姆森3代战靴2018新款
						</div>
						<div>
							<p class="libiao_xianshi_bian">
								<span></span>
								<span>立即购买</span>
							</p>
							<p class="libiao_xianshi_bian2">
								<span id="qufangdajing"><a href="gouwuche.html">加入购物车</a></span>
								<span></span>
							</p>
						</div>
						
					</div>
					
				</div>
			
			`
		}
		libiao_zhanshi_hang_kuai_wrap.innerHTML=strlibiao;
	})();
	
	
	
	
	
	
	
	
	
	
	//划过大块显示
	$(".libiao_zhanshi_hang_kuai").hover(function(){
		$(this).css({"border":"1px solid #f1f1f1","box-shadow":"1px 0 1px 1px #f1f1f1"}).find("div:nth-child(4)").show();
		//console.log("aaa")
		
	},function(){
		$(this).css({"border":"0px solid #f1f1f1","box-shadow":"0px 0 0px 0px #f1f1f1"}).find("div:nth-child(4)").hide();
		
	});
	
	//划过小块 变颜色
	$(".libiao_xianshi_bian").hover(function(){
		//console.log("aaa")
		$(this).css({"border":"1px solid red"}).find("span:nth-child(2)").css({"color":"red"}).end().find("span:nth-child(1)").css({"background":"url(../images/list-icons-1008.png)  no-repeat 0px -22px","background-size":"20px auto"});
	},function(){
		$(this).css({"border":"1px solid #f1f1f1"}).find("span:nth-child(2)").css({"color":"#000"}).end().find("span:nth-child(1)").css({"background":"url(../images/list-icons-1008.png)  no-repeat","background-size":"20px auto"});
	});
	
		
		$(".libiao_xianshi_bian2").hover(function(){
		//console.log("aaa")
		$(this).css({"border":"1px solid red"}).find("span:nth-child(1) a").css({"color":"red"}).end().find("span:nth-child(2)").css({"background":"url(../images/list-icons-1008.png)  no-repeat 0px -100px","background-size":"20px auto"});
	},function(){
		$(this).css({"border":"1px solid #f1f1f1"}).find("span:nth-child(1) a").css({"color":"#000"}).end().find("span:nth-child(2)").css({"background":"url(../images/list-icons-1008.png)  no-repeat 0 -80px","background-size":"20px auto"});
	});
	
	//点击图片时候会跳转到详情页
	$("#libiao_zhanshi_hang_kuai_tu").click(function(){
		window.location.href = "xiangqing.html";
	})
	
	
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
	
	
	
	
	//侧边栏
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
	
	
	//点击精选按钮会收会或者下拉
	var num11=0;
	
	$("#jingxunbtn").click(function(){
		num11++;
		//console.log("aaa")
		if(num11%2==1){
			$("#shaixlb").find("li:nth-child(4),li:nth-child(6),li:nth-child(7)").hide();
		$("#jingxunbtn").css({"bottom":"85px"}).text("更多选项");
		}else{
			$("#shaixlb").find("li:nth-child(4),li:nth-child(6),li:nth-child(7)").show();
			$("#jingxunbtn").css({"bottom":"-30px"}).text("精简选项");

		}
	})	
		
	
	
	
	//三级菜单划过出现
	$("#zhuye_yousan").hover(function(){
		//console.log("aaa")
		$(this).find(".zhuye_sanji").show().css({"background":"#999"})
	},function(){
		$(this).find(".zhuye_sanji").hide()
	})
	
	$(".zhuye_sanji").hover(function(){
		$(this).children().css({"background":"#999"})
	});

	
	
	
	
	
	/*$(function(){
					var classid = location.search.split("=")[1];
					$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{classID:classid},function(data){
						console.log(data);
						var str = "";
						$.each(data,function(index,item){
							str += `<div>
							<a href="detail.html?id=${item.goodsID}">
							<img src="${item.goodsListImg}">
							<p>${item.goodsName}</p>
							<p>${item.price}</p>
							
							</div>`
						})
						$("#product_list").html(str);
					});
					

			})
	    
	    */   
	     
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
	