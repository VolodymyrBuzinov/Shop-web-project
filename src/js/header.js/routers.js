import links from './links'
import CategoriesAPI from './categories-API'
const catApi = new CategoriesAPI();
import routers from './paths' 
let auth = true;
let startState = true;

function updatePage (e) {
    if (e.target.tagName !== "A")
        return
    e.preventDefault();
    updateHistory(e);
    updatedContent();
}

function updateHistory(e) {
    const query = e.target.getAttribute('href');    
    let router = routers.find(item => item.path === query);  
    if (!router) return
    if (!router.meta.auth || !auth) history.pushState(query, null, query)
}

function updatedContent() {
    let router = routers.find( item => item.path === history.state || item.path === location.pathname)
    if (!router) {
        catApi.onError();
        return
    }
    if (!router.meta.auth || !auth) {
        router.component(); 
    }
    else if (router.meta.auth && auth && startState) {
        routers[0].component();
        history.pushState(routers[0].path, null, routers[0].path) 
    } 
    startState = false;
}

window.onpopstate = function(event) {
    updatedContent();
};

links.navList.addEventListener('click', updatePage);
window.addEventListener('load', updatedContent());


