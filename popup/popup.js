let gbField = document.getElementById("gb");
let mbField = document.getElementById("mb");
let kbField = document.getElementById("kb");
let bField = document.getElementById("bytes");
let gbValue = "";
let mbValue = "";
let kbValue = "";
let bValue = "";
function copyField(a){
	let gbField = document.getElementById("gb");
	let mbField = document.getElementById("mb");
	let kbField = document.getElementById("kb");
	let bField = document.getElementById("bytes");
	let gbValue = gbField.value;
	let mbValue = mbField.value;
	let kbValue = kbField.value;
	let bValue = bField.value;
	let fieldToCopy = document.getElementById(a);
	toClipBoard(fieldToCopy.value);
	gbField.value = gbValue;
	mbField.value = mbValue;
	kbField.value = kbValue;
	 bField.value = bValue;
}
function toClipBoard(a){
navigator.clipboard.writeText(a);
alert("Copied\n\n" + a + "\n\nto the clipboard.");
}
function cleanUp(a){
	let unCleaned = a;
	return unCleaned.split(",").join("");
}
function bFunc(){
	let gbField = document.getElementById("gb");
	let mbField = document.getElementById("mb");
	let kbField = document.getElementById("kb");
	let bField = document.getElementById("bytes");
	let tmp = "";
	bValue = parseInt(cleanUp(bField.value),10);
	tmp = bValue/1024;
	kbField.value = tmp.toFixed(3);
	tmp = bValue/1024/1024;
	mbField.value = tmp.toFixed(3);
	tmp = bValue/1024/1024/1024;
	gbField.value = tmp.toFixed(3);
}
function kbFunc(){
	let gbField = document.getElementById("gb");
	let mbField = document.getElementById("mb");
	let kbField = document.getElementById("kb");
	let bField = document.getElementById("bytes");
	let tmp = "";
	kbValue = parseInt(cleanUp(kbField.value),10);
	tmp = kbValue*1024;
	bField.value = tmp.toFixed(3);
	tmp = kbValue/1024;
	mbField.value = tmp.toFixed(3);
	tmp = kbValue/1024/1024;
	gbField.value = tmp.toFixed(3);
}
function mbFunc(){
	let gbField = document.getElementById("gb");
	let mbField = document.getElementById("mb");
	let kbField = document.getElementById("kb");
	let bField = document.getElementById("bytes");
	let tmp = "";
	mbValue = parseInt(cleanUp(mbField.value),10);
	tmp = mbValue*1024;
	kbField.value = tmp.toFixed(3);
	tmp = mbValue*1024*1024;
	bField.value = tmp.toFixed(3);
	tmp = mbValue/1024;
	gbField.value = tmp.toFixed(3);
}
function gbFunc(){
	let gbField = document.getElementById("gb");
	let mbField = document.getElementById("mb");
	let kbField = document.getElementById("kb");
	let bField = document.getElementById("bytes");
	let tmp = "";
	gbValue = parseInt(cleanUp(gbField.value),10);
	tmp = gbValue*1024;
	mbField.value = tmp.toFixed(3);
	tmp = gbValue*1024*1024;
	kbField.value = tmp.toFixed(3);
	tmp = gbValue*1024*1024*1024;
	bField.value = tmp.toFixed(3);
}
document.getElementById("gb").onchange = gbFunc();
document.getElementById("mb").onchange = mbFunc();
document.getElementById("kb").onchange = kbFunc();
document.getElementById("bytes").onchange = bFunc();
