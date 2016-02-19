var input = document.getElementsByTagName('input')[1];
var inp = document.getElementById("tryout");
var para = document.createElement("P");
var p = document.createElement("P");
var t = document.createTextNode("Please enter your IIT email address.");
var text = document.createTextNode("Enter your name.");
var name= document.getElementById("name");

name.onfocus = function NameHelp(){
	if (this.id == "name"){
		p.appendChild(text);
		inp.insertBefore(p, inp.childNodes[4]);
	}
}
name.onblur = function RemoveName(){
	inp.removeChild(p);
}

input.onfocus = function EmailHelp(){
	if (this.id == "email"){
		para.appendChild(t); 
  	inp.insertBefore(para, inp.childNodes[8]);
 	} 
}
input.onblur = function RemoveText(){
	inp.removeChild(para);
}
