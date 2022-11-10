let a = document.getElementById('meter');
let b = document.getElementById('feet');
a. addEventListener ('click',function(){
let p = document.getElementById('input').value;
document.getElementById('output').value = p/3.281 + "Meter"; 
})
b. addEventListener ('click',function(){
let p = document.getElementById('input').value;
document.getElementById('output').value = p*3.281 + "Feet";
})