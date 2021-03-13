// Getting DOM elements
const showNavButton = document.getElementById("show-nav")
const navBar = document.getElementById("nav-bar")
const navBox = document.getElementById("nav-box")
const navList = document.getElementById("nav-list")
const hideNavButton = document.getElementById("hide-nav")
const navButtons = document.getElementsByClassName("overlay-content__item")
const desktopMedia = window.matchMedia('(min-width: 900px)')

// Function onclick to show the navigation menu
showNavButton.onclick = function() {
    navBar.style.width = "100%"
}

// Function onclick to hide the navigation menu
hideNavButton.onclick = function() {
    if (matchDesktopMedia()) {}
    navBar.style.width = "0"
}

// Loop for all buttons in navBar to hide it when a button is clicked.
if (!matchDesktopMedia()) {
    Array.prototype.forEach.call(navButtons, button => {
        button.onclick = () => navBar.style.width = "0"
    });
}

function matchDesktopMedia(media = desktopMedia) {
    // debugger
    return media.matches
}

function hideHamburguerOnDesktop() {
    if (!matchDesktopMedia()) {
        // navBar.classList.remove("overlay")
        // navBox.classList.remove("overlay-box")
        // navList.classList.remove("overlay-content")
        hideNavButton.classList.remove("fas", "fa-times")
        showNavButton.classList.remove("fas", "fa-bars")
    }
}

function onResize() {
    if (matchDesktopMedia()) {
        navBar.style.width = '100%'
    } else {
        navBar.style.width = '0'
    }
}

hideHamburguerOnDesktop()
window.addEventListener('resize', onResize)



