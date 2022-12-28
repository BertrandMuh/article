const displayForm = () => {
    let form = document.getElementById('form')
    form.classList.toggle('form-show');
}

const changePageTitleContent = el => {
    const pageTitle = document.getElementsByClassName('title')[0];
    //check if the element clicked is an anchor
    const isAnchor = el.target.nodeName === 'A';
    if (isAnchor) {
        //change the content of the title if true
        pageTitle.innerHTML = el.target.innerHTML
    }
}
let navbar = document.getElementsByClassName('navbar')[0];
navbar.addEventListener("click", changePageTitleContent);
let searchIcon = document.getElementsByClassName('fa-search')[0];
searchIcon.addEventListener("click", displayForm);