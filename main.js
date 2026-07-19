const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navclose = document.getElementById("nav-close")


//======= menu Show=========== 
// validate if constent exist 

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

//=============menu hideen============ 
// validate if constant exists

if (navclose) {
    navclose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

// ===================CHANGE BACKGROUND HEADER=======
const bgHeader = () => {
    const header = document.getElementById("header")
    // when the scroll is geater than 50vh add the scroll header class to the header tag
    this.scrollY >= 50 ? header.classList.add("bg-header")
        : header.classList.remove("bg-header")
}
window.addEventListener("scroll", bgHeader)




// ============ DARK LIGHT THEME========================

const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "ri-sun-line"

// previously selected topic (is user selected)

const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

// we obtain the current theme that the inter face has by validating the dark-theme classs

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line"

// we validate if the user previousl chose a topic 

if (selectedTheme) {

    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
    themeButton.classList[selectedTheme === "ri-moon-line" ? "add" : "remove"](iconTheme)
}

// activate / deactivate the theme manually with the button 

themeButton.addEventListener("click", () => {
    // add or remove the dark / icon theme 
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // we save the theme and the current icon that the user chose 

    localStorage.setItem("selected-theme", getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon())
})