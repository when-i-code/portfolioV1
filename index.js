// template_f1zldxd
// service_zafgk5f
// C1Fwgybb8FQ_s2Bkt

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
            alert ('The email service is temporarily unavailable. Please contact me directly on adrianasavastre@gmail.com')
        })
}