function changecolor(){
    var x=document.getElementsByName("pwd").values;
if(x==""){
document.getElementById("pwd").style.borderLeftColor="red";
}
else{
    document.getElementById("pwd").style.borderLeftColor="green";
}
x=document.getElementsByName("login").values;
if(x==""){
document.getElementById("login").style.borderLeftColor="red";
}
else{
    document.getElementById("login").style.borderLeftColor="green";
}
}