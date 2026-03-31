function toggleMenu(){

const menu=document.getElementById("dropdown")

if(menu.style.display==="block"){

menu.style.display="none"

}else{

menu.style.display="block"

}

}


const hour=new Date().getHours()

let greeting="Good Evening"

if(hour<12){

greeting="Good Morning"

}
else if(hour<17){

greeting="Good Afternoon"

}

document.getElementById("greeting").innerText=greeting
