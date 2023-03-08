
const revealWork = () => {
    document.querySelector('#trabalhos').style.display = "block"
    document.querySelector('#home1').style.display = "none"
    document.querySelector('#experiences').style.display = "none"
    document.querySelector('#contact').style.display = "none"

}

const revealHome = () => {
    document.querySelector('#trabalhos').style.display = "none"
    document.querySelector('#home1').style.display = "block"
    document.querySelector('#experiences').style.display = "none"
    document.querySelector('#contact').style.display = "none"
}

const revealExperiences = () => {
    document.querySelector('#experiences').style.display = "block"
    document.querySelector('#trabalhos').style.display = "none"
    document.querySelector('#home1').style.display = "none"
    document.querySelector('#contact').style.display = "none"
}

const revealContact = () => {
    document.querySelector('#contact').style.display = "block"
    document.querySelector('#experiences').style.display = "none"
    document.querySelector('#trabalhos').style.display = "none"
    document.querySelector('#home1').style.display = "none"
}