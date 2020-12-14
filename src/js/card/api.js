
import cardTpl from '../../templates/card.hbs';
const btn = document.getElementsByClassName('pagination-catigories-btn')
const cleanButton = document.querySelector('.header-nav__clear__button ')
const cleanButton2 = document.querySelector('.header-menu__clear__button')
const removePagin = document.querySelector('.pagination-div')
const cardRef = document.querySelector('.card__list');
const renderDiv = document.querySelector('.pagination-div')
const is_hiden = document.querySelector('.card')
import CategoriesApi from '../header.js/categories-API'
const catApi = new CategoriesApi();
const cat = document.querySelector('.js-header-list')
const btnSectionIsHiden = document.querySelector('.section-btn')


cat.addEventListener('click', clickFilter)
function clickFilter(e) {
    e.preventDefault 
    if (e.target.tagName !== "A") return
    
    if(e.target.getAttribute('href') === '/property'){
        renderDiv.classList.remove('style')
     catApi.onProperty().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/electronics'){
        renderDiv.classList.remove('style')
    catApi.onElectronics().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/free'){
        renderDiv.classList.remove('style')
    catApi.onFree().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/recreationAndSport'){
        renderDiv.classList.remove('style')
    catApi.onRecreationAndSport().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/sales'){
        renderDiv.classList.remove('style')
    catApi.onSales().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/trade'){
        renderDiv.classList.remove('style')
    catApi.onTrade().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/transport'){
        renderDiv.classList.remove('style')
    catApi.onTransport().then(result =>render(result))};
                            
    if(e.target.getAttribute('href') === '/work'){
        renderDiv.classList.remove('style')
    catApi.onWork().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/businessAndServices'){
        renderDiv.classList.remove('style')
    catApi.onbusinessAndServices().then(result =>render(result))};
                                    
}

cleanButton2.addEventListener('click', cleanRenderCategory)


cleanButton.addEventListener('click', cleanRenderCategory)
function cleanRenderCategory(e) {
    e.preventDefault()
    btnSectionIsHiden.classList.remove('is_hiden')
    
     if (btn[0].children[0].classList.contains('active') || btn[1].children[0].classList.contains('active') || btn[2].children[0].classList.contains('active')) {
         renderDiv.classList.remove('render_card')
         is_hiden.classList.add('is_hiden')
         cardRef.innerHTML = ''         
    }
   
}


removePagin.addEventListener('click', clickCategory) 

function clickCategory(e) {
    e.preventDefault();
    
    const query = e.target.getAttribute('class');
    if (e.target.tagName === "A") {
        const camelQuery = camelize(query)       
        function camelize() {
            return query.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
                if (+match === 0) return "";
                return index === 0 ? match.toLowerCase() : match.toUpperCase();
            });
        }
        let url = `https://callboard-backend.herokuapp.com/call/specific/${camelQuery}`        

        
        if (e.target.getAttribute('data-class') === 'false') {
           
        const cardExamp = fetch(url)
            .then(resronce => resronce.json()).then(resul => {render(resul)}) 
        }



        if (e.target.getAttribute('data-class') === 'true') {
            console.log('salessss');
           url = 'https://callboard-backend.herokuapp.com/call?page=1'
           const cardExamp = fetch(url)
        .then(resronce => resronce.json()).then(resul => {render(resul.sales)}) 
        }
       

   
    }
}

 function render(result) {           
    renderDiv.classList.add('render_card')
     cardRef.innerHTML = ''   
     btnSectionIsHiden.classList.add('is_hiden')
      is_hiden.classList.remove('is_hiden')  
      const card = cardTpl(result)
  cardRef.insertAdjacentHTML("beforeend", card);
  }