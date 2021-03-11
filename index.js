const hamburguer = document.getElementById("hamburguer")
const menu = document.getElementById("menu")
const close = document.getElementById("close")
const navButtons = document.getElementsByClassName("overlay-content__item")

hamburguer.onclick = function() {
    menu.style.width = "100%"
}

close.onclick = function() {
    menu.style.width = "0"
}


Array.prototype.forEach.call(navButtons, button => {
    button.onclick = () => menu.style.width = "0"
});

console.log(navButtons)