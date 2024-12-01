let ham = document.querySelector(".ham");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close");

menu.addEventListener("click", ()=>{

    ham.style.right="0px"

})

close.addEventListener("click", ()=>{
     ham.style.right= "-500px"
})
