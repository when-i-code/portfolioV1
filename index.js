// template_f1zldxd
// service_zafgk5f
// C1Fwgybb8FQ_s2Bkt

let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += ' dark-theme'
    } else {
        document.body.classList.remove('dark-theme');
    }
}


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += ' modal__overlay--visible'

    emailjs
        .sendForm(
            'service_zafgk5f',
            'template_f1zldxd',
            event.target,
            'C1Fwgybb8FQ_s2Bkt'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible');
            success.classList += ' modal__overlay--visible'
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible');
            alert('The email service is temporarily unavailable. Please contact me directly on adrianasavastre@gmail.com')
        })
}
let isModalOpen = false;
function toggleModal() {

    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal--open');
    }
    isModalOpen = true;
    document.body.classList += ' modal--open';
}