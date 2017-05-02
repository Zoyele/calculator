window.onload = function(){
	for (var i = 0; i < dataInput.length; i++) {
		dataInput[i].onclick = insertData;
	};
	resetBtn.onclick = reset;
	delBtn.onclick = del;
	resultBtn.onclick = function(){
	res.value = calculate(showBox.value);

	};

}

var dataInput = document.querySelectorAll(".data-input");
var str = "";
var showBox = document.getElementById('show-box');
var res = document.getElementById("result");
var resultBtn = document.querySelector(".cal");
var resetBtn = document.querySelector(".reset");
var delBtn = document.querySelector(".del");
	
function insertData(e){
	e = e ||window.event;
	str += e.target.innerHTML;
	showBox.value = str;
}	
//清零
function reset(){
	str = "";
	showBox.value = str;
}
//后退一步
function del(){
	str = showBox.value;
	str = str.substring(0,str.length-1);
	showBox.value = str;
}
//做字符串的合法性检查
//左右括号对称
//加减乘除不能连在一起
//不可以以加减乘除开头结尾
//计算

function calculate(strData){
	var StartIndex = strData.lastIndexOf("(");
	if(StartIndex > -1){
		var LastIndex = strData.indexOf(")",StartIndex);
		var result = calculate(strData.substring(StartIndex+1,LastIndex));
		return calculate(strData.substring(0,StartIndex) + result + strData.substring(LastIndex+1));	
	}
	var index = strData.indexOf("+");
	 if(index > -1){
	 	return calculate(strData.substring(0,index)) + calculate(strData.substring(index+1));

	 }

	 index = strData.lastIndexOf("-");
	 if(index > -1){
	 	return calculate(strData.substring(0,index)) - calculate(strData.substring(index+1));
	 	
	 }

	 index = strData.indexOf("*");
	 if(index > -1){
	 	return calculate(strData.substring(0,index)) * calculate(strData.substring(index+1));
	 	
	 }
	 index = strData.lastIndexOf("/");
	 if(index > -1){
	 	return calculate(strData.substring(0,index)) / calculate(strData.substring(index+1));
	 	
	 }
	 if(""== strData){
	 	return 0;
	 }else{
	 	return strData -1 + 1;
	 }
	
}

	



