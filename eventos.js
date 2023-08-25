const elDiv = document.getElementById("hola")
const btn = document.getElementById("btn")

elDiv.addEventListener("click",(e) =>{
 
    e.target.style.backgroundColor = alert("Hola! Soy el div")
})

btn.addEventListener("click",function(){
    event.stopPropagation();
    alert('Hola!');
    
    
})