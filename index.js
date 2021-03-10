const hamburguer = document.getElementById("hamburguer")
const menu = document.getElementById("menu")
const close = document.getElementById("close")

hamburguer.onclick = function() {
    menu.style.width = "100%"
}

close.onclick = function() {
    menu.style.width = "0"
}