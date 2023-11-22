let korz= document.querySelector(".korz")
let left= document.querySelector(".left")
let right= document.querySelector(".right")



let dviz=0
left.addEventListener("click", function (){
    dviz=dviz+50
    korz.style.left=dviz+'px'
})
right.addEventListener("click", function (){
    dviz=dviz-50
    korz.style.left=dviz+'px'
})

