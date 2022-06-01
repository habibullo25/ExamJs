let dropdown = document.querySelector('.drop')
let dropdown1 = document.querySelector('.drop1')
function drop(){
    dropdown.classList.toggle("block")
    
}
function drop1(){
    dropdown1.classList.toggle("block")
}
let left = document.querySelector('.left-side')
function toggling(){
    left.classList.toggle("hided")
}
let form1 = document.querySelector(".form-1")

function show(){
    form1.classList.toggle("show")
    settings.classList.remove("settings1")
    not.classList.remove("notification1")

    
}
let settings = document.querySelector(".settings")
function show1(){
    settings.classList.toggle("settings1")
    form1.classList.remove("show")
    not.classList.remove("notification1")
    
}
let range = document.querySelector("#range")
function rangeFont(){
    document.body.style.fontSize = `${range.value}px`
}
window.onscroll = function(){
    form1.classList.remove("show")
    settings.classList.remove("settings1")
    not.classList.remove("notification1")

}
let not = document.querySelector(".notification")
function notif(){
    not.classList.toggle("notification1")
    settings.classList.remove("settings1")
    form1.classList.remove("show")
}
