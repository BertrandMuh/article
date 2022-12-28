const displayForm = () => {
    let form = document.getElementById('form')
    form.classList.toggle('form-show');
    console.log(form)
}

let navbar = document.getElementsByClassName('navbar')[0];
const elementPressed = el => {
    const pageTitle = document.getElementsByClassName('title')[0];
    const isAnchor = el.target.nodeName === 'A';
    if (isAnchor) {
        pageTitle.innerHTML = el.target.innerHTML
    }
}
navbar.addEventListener("click", elementPressed);