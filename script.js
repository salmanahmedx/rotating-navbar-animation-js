const logos = document.querySelectorAll(".logo")
const logoContainer = document.querySelector('.logo-container')

logos.forEach(logo => {
    logo.addEventListener('click', e => {

        const navActivateCondition = e.target.classList.contains('fa-bars');
        if (navActivateCondition) {
            logoContainer.classList.remove("logo-inactive")
            logoContainer.classList.add("logo-active")
        } else {
            logoContainer.classList.remove("logo-active")
            logoContainer.classList.add("logo-inactive")
        }
    })
})