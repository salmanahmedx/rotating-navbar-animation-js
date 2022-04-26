const logos = document.querySelectorAll(".logo")
const logoContainer = document.querySelector('.logo-container')
const nav = document.querySelector("nav")
const body = document.querySelector(".body")

//nav functionality

logos.forEach(logo => {
    logo.addEventListener('click', e => {

        const navActivateCondition = e.target.classList.contains('fa-bars');

        if (navActivateCondition) {

            //nav icon animation - expand
            logoContainer.classList.remove("logo-inactive")
            logoContainer.classList.add("logo-active")
            logoContainer.classList.add("logo-container-active")

            //nav items
            nav.classList.toggle("nav-expand")

            //body
            body.classList.toggle('body-expand')

        } else {

            //nav icon animation - contract
            logoContainer.classList.remove("logo-active")
            logoContainer.classList.add("logo-inactive")
            logoContainer.classList.remove("logo-container-active")

            //nav-items
            nav.classList.toggle("nav-expand")

            //body
            body.classList.toggle('body-expand')
        }
    })
})