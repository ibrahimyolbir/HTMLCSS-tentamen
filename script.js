function problem6Listener(e){
console.log('Hello World');

} 


document.querySelector('#problem6abutton').addEventListener('click',problem6Listener);




var p = document.createElement("p");
p.textContent = "Hello World!"
var myDiv = document.querySelector("#problem6b .problem-area");
myDiv.appendChild(p);