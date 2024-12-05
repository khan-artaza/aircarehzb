let mobile = document.getElementById("mobile")
let close = document.getElementById("close")
let hamb = document.getElementById("hamb")

mobile.addEventListener("click",()=>{
    hamb.style.right="-70px"
})
close.addEventListener("click", ()=>{
    hamb.style.right="-2000px"
})
