  
import links from './links'
links.burgerButton.addEventListener('click', evt => {
    if (evt) {
        links.nav.classList.add('is-open')
        links.header.style.overflow = 'visible';
        links.headerMenu.style.opacity = 0;       
    }
})
links.closeButton.addEventListener('click', evt => {
    if (evt) {
        links.nav.classList.remove('is-open')
        links.header.style.overflow = 'hidden';
        links.headerMenu.style.opacity = 1;        
    }
})
links.navContainer.addEventListener('click', evt => {
    if (evt) {
        links.nav.classList.remove('is-open')
        links.header.style.overflow = 'hidden';
        links.headerMenu.style.opacity = 1;        
    }
})


