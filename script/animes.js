/*menu*/
var menu =  document.querySelector('header');
var notification = document.querySelector('.bi-bell');
var notificationFill = document.querySelector('.bi-bell-fill');
var arrowDown = document.querySelector('.bi-caret-down-fill');
var arrowUp = document.querySelector('.bi-caret-up-fill');
var imageLog = document.querySelector('.div-header-perfil img')

const menuColor = setInterval(() =>{
    if(window.scrollY > 10){
        menu.style.background = '#000000';
    }else{
        menu.style.background = 'transparent';
    }

    notification.addEventListener('click', () =>{
        notification.style.display = 'none';
        notificationFill.style.display = 'block';
    });
    
    notificationFill.addEventListener('click', () =>{
        notification.style.display = 'block';
        notificationFill.style.display = 'none';
    });
}, 50);


const menuPerfil = setInterval(() =>{
    arrowDown.addEventListener('click', () =>{
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'block';
    });
    arrowUp.addEventListener('click', () =>{
        arrowDown.style.display = 'block';
        arrowUp.style.display = 'none';
    });

    imageLog.addEventListener('click', () =>{
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'block';
    });
}, 50)

//seacrh
let searchDiv = document.querySelector('.div-search');
let searchButton = document.querySelector('.bi-search');
let searchInput = document.querySelector('#isearch');
let closeSearch = document.querySelector('.bi-x');

const searchOpen = setInterval(() =>{
    searchButton.addEventListener('click', () =>{
        searchDiv.style.width = '170px';
        searchDiv.style.border = '1px solid #fff';
        searchInput.style.zIndex = '3';
        closeSearch.style.display = 'block';
    });

    closeSearch.addEventListener('click', () =>{
        searchDiv.style.width = '25px';
        searchDiv.style.border = 'none';
        searchInput.style.zIndex = '-4';
        closeSearch.style.display = 'none';
    });
},50);

//perfil
let perfilOpen = document.querySelector('.div-header-perfil img');
let perfil = document.querySelector('.div-perfs-log');  
let closerLog = document.querySelector('.second-x')

const openPerfil = setInterval(() =>{
    perfilOpen.addEventListener('click', () =>{
        perfil.style.display = 'block';
    });
    arrowDown.addEventListener('click', () =>{
        perfil.style.display = 'block';
    });

    arrowUp.addEventListener('click', () =>{
        perfil.style.display = 'none';
    });

    closerLog.addEventListener('click', () =>{
        perfil.style.display = 'none';
        arrowUp.style.display = 'none';
        arrowDown.style.display = 'block';
    });
}, 50);