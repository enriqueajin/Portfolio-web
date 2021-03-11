const showNavButton = document.getElementById("show-nav")
const navBar = document.getElementById("nav-bar")
const hideNavButton = document.getElementById("hide-nav")
const navButtons = document.getElementsByClassName("overlay-content__item")

showNavButton.onclick = function() {
    navBar.style.width = "100%"
}

hideNavButton.onclick = function() {
    navBar.style.width = "0"
}

Array.prototype.forEach.call(navButtons, button => {
    button.onclick = () => navBar.style.width = "0"
});
