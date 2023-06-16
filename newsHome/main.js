import './style.scss'

let open = document.querySelector(".open")
let close = document.querySelector(".close")

close.addEventListener("click",()=>{
    document.body.classList.remove("active")
})

open.addEventListener("click",()=>{
    document.body.classList.add("active")
})
