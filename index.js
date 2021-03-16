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
    // if (matchDesktopMedia()) {}
    navBar.style.width = "0"
}

Array.prototype.forEach.call(navButtons, button => {
    button.onclick = () => {
        (!matchDesktopMedia()) ? navBar.style.width = "0" : navBar.style.width = "100%"
}});

// Loop for all buttons in navBar to hide it when a button is clicked.
window.addEventListener('resize', () => {
    // debugger
    Array.prototype.forEach.call(navButtons, button => {
        button.onclick = () => {
            (!matchDesktopMedia()) ? navBar.style.width = "0" : navBar.style.width = "100%"
    }});
})


function matchDesktopMedia(media = desktopMedia) {
    // debugger
    return media.matches
}

// Function to show hamburguer button when media query is desktop
function hideHamburguerButton() {
    hideNavButton.classList.remove("fas", "fa-times")
    showNavButton.classList.remove("fas", "fa-bars")
}

// Function to show hamburguer button when media query is mobile or tablet
function showHamburguerButton() {
    hideNavButton.classList.add("fas", "fa-times")
    showNavButton.classList.add("fas", "fa-bars")
}

// Function to change width of nav bar depending media query we are
window.addEventListener('resize', () => {
    if (matchDesktopMedia()) {
        navBar.style.width = '100%'
        hideHamburguerButton()
    } else {
        navBar.style.width = '0'
        showHamburguerButton()
    }
})
