// JavaScript Document
var currentNum = -1; //最近点击的正确数字
var tdNum = 0; //当前td被点击的数字
var dataStart = new Date();
var dataStop = new Date();
//alert(dataStart);

function judgeTd(inner,obj){
	//alert (obj.innerHTML);
	if(currentNum == -1)
	{
		document.getElementById('top').style.color="#FFF";
		document.getElementById('linker').innerHTML="重新测试";
		obj.style.backgroundColor="#000";
		var currentStartTime = new Date();
		dataStart = currentStartTime;
		currentNum = 0;
		return 0;
	}
	tdNum = inner;
	if(tdNum == 1)
	{
		if(currentNum == 25)
		{
			//timers(dataStop,obj);
			alert ("测试已经结束！");	
			obj.style.backgroundColor="#000000";
			return;
		}
/*		else
		{
			if(currentNum == 0)
			{
				var currentStartTime = new Date();
				dataStart = currentStartTime;
			}
		}*/
	}
    if((tdNum - currentNum) == 1)
	{
		currentNum = tdNum;
		//alert(dataStart);
		if(currentNum == 25)
		{
			var currentStopTime = new Date();
			dataStop = currentStopTime;
			timers(dataStop,obj);
			return;
		}
		return;
	}
	else
	{
		if(currentNum == 25)
		{
			//timers(dataStop,obj);
			alert ("测试已经结束！");	
			obj.style.backgroundColor="#000000";
			return;
		}
		else
		{
			obj.style.backgroundColor="#FF0000";
		}
	}
}
function judgeLevel(age,seconds,obj){
	//alert(age);
	if(age<=12)
	{
		if(seconds>50)
		{
			obj.innerHTML="成绩：不及格";
		}
		else
		{
			if(seconds>42)
			{
				obj.innerHTML="成绩：及格";
			}
			else
			{
				if(seconds>26)
				{
					obj.innerHTML="成绩：良好";
				}
				else
				{
					obj.innerHTML="成绩：优秀";
				}
			}
		}
	}
	else
	{
		if(seconds>30)
		{
			obj.innerHTML="成绩：不及格";
		}
		else
		{
			if(seconds>25)
			{
				obj.innerHTML="成绩：及格";
			}
			else
			{
				if(seconds>20)
				{
					obj.innerHTML="成绩：良好";
				}
				else
				{
					obj.innerHTML="成绩：优秀";
				}
			}
		}
	}
}
function timers(dataStop,obj)
{
/*	alert(dataStart);
	alert(dataStop);*/
	var date3=dataStop.getTime()-dataStart.getTime();  //时间差的毫秒数
	var seconds=Math.round(date3/1000);
	var pr = document.getElementById('reasult');
	var namer = document.getElementById('reasult').innerHTML;
	var post_name = document.getElementById('post_name').innerHTML;
	var post_age = document.getElementById('post_age').innerHTML;
	var linker = document.getElementById('linker');
	//var exe = document.getElementById('exe');
	//exe.innerHTML = "\<? $u_date = date('Y-m-d H:i:s');include_once 'inc/conn.php';$exec = \"insert into usr(name,age,score,millisecond,date) values ('$u_name','$u_age','$u_score','$u_millisecond','$u_date')\";$result = mysql_query($exec);$rs = mysql_fetch_object($result);?\>"
	//var p_date = dataStop.getFullYear()+"-"+dataStop.getMonth()+"-"+dataStop.getYear()+"-"+dataStop.getYear()+"-"+dataStop.getYear()+"-"+dataStop.getYear();
	var level_age = dataStop.getFullYear() - post_age + 1;
	judgeLevel(level_age,seconds,pr);

    pr.innerHTML=namer+"用了 "+seconds+" 秒<br/>"+pr.innerHTML;
	alert(" 您用了 "+seconds+" 秒");
	obj.style.backgroundColor="#000000";
	//alert("姓名"+namer);
	
	document.getElementById('data').href="statistics.php?name="+post_name+"&age="+post_age+"&sub_score="+seconds+"&sub_data="+date3;
	var test_data = "current_data";
	setCookie(test_data,date3);
	//linker.href="statistics.php?name="+post_name+"&age="+post_age+"&score="+seconds+"&millisecond="+date3;
	linker.innerHTML="提交成绩";
	linker.href="#";
}

function setCookie(name,value) 
{ 
    var Days = 30; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 

function submitData(){
	var linker = document.getElementById('linker');
	var dataer = document.getElementById('data');
	//alert (linker.href);
	if(linker.innerHTML == "提交成绩")
	{
		//alert (dataer.href);
		window.location.href = dataer.href;
		
	}
}
	
window.onload = function(){
     var a = document.getElementsByTagName('td');
     for(var i =0;i<a.length;i++){
          a[i].onmousedown = function(){
			  	document.getElementsByTagName('td');
				
				for(var i =0;i<a.length;i++){
					a[i].style.backgroundColor="#000000";
				}
			  	this.style.backgroundColor="#FFF68F";
                judgeTd(this.innerHTML,this);
           }
		   
		   a[i].onmouseup = function(){
			   var obj = this;
			   function discolor()
			   {
				   //alert ('进入了discolor！');
				   obj.style.backgroundColor="#000000";
			   }
			   setTimeout(discolor,300);
			   //这里格外注意，第一条语句不能包含括号，否则会出错
			   //setTimeout("alert('5 seconds!')",1000);
			   //this.style.backgroundColor='#000000';
		   }
     }
	 
}