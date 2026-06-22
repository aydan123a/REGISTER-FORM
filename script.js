let password=document.getElementById("password");

password.oninput=function(){

let value=password.value;

let strength=document.getElementById("strength");

if(value.length<4){

strength.innerHTML="Weak";

strength.style.color="red";

}
else if(value.length<8){

strength.innerHTML="Medium";

strength.style.color="orange";

}
else{

strength.innerHTML="Strong";

strength.style.color="green";
}
}
document.getElementById("username").oninput=function(){

let value=this.value;

if(value.length<3){

document.getElementById("userError").innerHTML=
"Username minimum 3 characters";

}else{

document.getElementById("userError").innerHTML="";

}
}
function register(){

let pass=document.getElementById("password").value;

let confirm=document.getElementById("confirm").value;


if(pass!=confirm){

document.getElementById("confirmError").innerHTML=
"Passwords do not match";

}else{

document.getElementById("confirmError").innerHTML=
"Registration successful";

}

}
