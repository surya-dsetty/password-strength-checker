const password = document.getElementById("password");
const bar = document.getElementById("strength-bar");
const text = document.getElementById("strength-text");
const toggle = document.getElementById("toggle");

const lengthRule = document.getElementById("length");
const upperRule = document.getElementById("upper");
const numberRule = document.getElementById("number");
const symbolRule = document.getElementById("symbol");

toggle.onclick = function(){
if(password.type === "password"){
password.type = "text";
toggle.innerText = "Hide";
}else{
password.type = "password";
toggle.innerText = "Show";
}
}

password.addEventListener("input",function(){

let value = password.value;
let score = 0;

if(value.length >= 8){
lengthRule.classList.add("valid");
score++;
}else{
lengthRule.classList.remove("valid");
}

if(/[A-Z]/.test(value)){
upperRule.classList.add("valid");
score++;
}else{
upperRule.classList.remove("valid");
}

if(/[0-9]/.test(value)){
numberRule.classList.add("valid");
score++;
}else{
numberRule.classList.remove("valid");
}

if(/[^A-Za-z0-9]/.test(value)){
symbolRule.classList.add("valid");
score++;
}else{
symbolRule.classList.remove("valid");
}

if(score === 1){
bar.style.width = "25%";
bar.style.background = "red";
text.innerText = "Weak Password";
}
else if(score === 2){
bar.style.width = "50%";
bar.style.background = "orange";
text.innerText = "Medium Password";
}
else if(score === 3){
bar.style.width = "75%";
bar.style.background = "yellowgreen";
text.innerText = "Good Password";
}
else if(score === 4){
bar.style.width = "100%";
bar.style.background = "green";
text.innerText = "Strong Password";
}
else{
bar.style.width = "0%";
text.innerText = "";
}

});