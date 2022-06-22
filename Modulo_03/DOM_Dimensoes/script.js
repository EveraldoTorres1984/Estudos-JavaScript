function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function botaoScroll() {
    if (window.scrollY === 0) {
        //ocultar o botão
        document.querySelector('.scrollButton').style.display = 'none';
    } else {
        //mostrar o botão
        document.querySelector('.scrollButton').style.display = 'block';
    }

}

window.addEventListener('scroll', botaoScroll);