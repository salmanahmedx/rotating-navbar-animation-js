const logos = document.querySelectorAll(".logo")
const logoContainer = document.querySelector('.logo-container')

//nav functionality

logos.forEach(logo => {
    logo.addEventListener('click', e => {

        const navActivateCondition = e.target.classList.contains('fa-bars');

        if (navActivateCondition) {

            //nav icon animation - expand
            logoContainer.classList.remove("logo-inactive")
            logoContainer.classList.add("logo-active")
        } else {

            //nav icon animation - contract
            logoContainer.classList.remove("logo-active")
            logoContainer.classList.add("logo-inactive")
        }
    })
})