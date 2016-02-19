var input = document.getElementsByTagName('input')[1];
var inp = document.getElementById("tryout");
var para = document.createElement("P");
var t = document.createTextNode("You must enter your IIT email.");

input.onfocus = function NameHelp(){
	if (this.id == "email"){
		para.appendChild(t); 
  	inp.insertBefore(para, inp.childNodes[8]);
 	} 
}
input.onblur = function RemoveText(){
	inp.removeChild(para);
}
