import refs from './refs'

export default function toggleRegisterModal() {
    refs.modalRegistr.classList.toggle('is-hidden')
}

refs.openBtnRegistrModal.addEventListener('click', toggleRegisterModal);
refs.closeBtnRegistrModal.addEventListener('click', toggleRegisterModal);
refs.backgropModal.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
        toggleRegisterModal();
    }
});

document.onkeydown = function (e) {
    if (e.key === 'Escape') {
        refs.modalRegistr.classList.add('is-hidden')
    }
}