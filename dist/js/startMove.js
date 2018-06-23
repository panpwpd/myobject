
//{opacity:70}
//opacity:0.7 filter:alpha(opacity=70)
//运动封装函数  第一个为发生时间的事件源,第二个为要改变的属性  top  left height   width,   第三个是函数的链式回调,可以再下面写一个函数执行完上面的函数后再返回原来的位置.
function startMove(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;
		for(var attr in json){

			if(attr == "opacity"){
				var iCur = parseInt(getStyle(obj,"opacity")*100);
			}else{
				var iCur = parseInt(getStyle(obj,attr));
			}
			var iTarget = json[attr];
			
			
			var iSpeed = (iTarget - iCur)/8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			
			
			if(attr == "opacity"){
				obj.style.opacity = (iCur+iSpeed)/100;
				obj.style.filter = "alpha(opacity="+(iCur+iSpeed)+")";
			}else{
				obj.style[attr] = iCur + iSpeed + "px";
			
			}
			
			
			if(iCur != iTarget){
				
				flag = false;
			}
		}
		//所有的样式都达到目标值之后才能清除定时器
		
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},30);
}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	return getComputedStyle(obj,null)[attr];
}


