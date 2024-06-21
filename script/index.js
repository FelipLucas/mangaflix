//favoritar
let favorite = document.querySelector('.bi-heart');
let favoriteFill = document.querySelector('.bi-heart-fill');

favorite.addEventListener('click', () =>{
    favorite.style.display = 'none';
    favoriteFill.style.display = 'block';
});
favoriteFill.addEventListener('click', () =>{
    favorite.style.display = 'block';
    favoriteFill.style.display = 'none';
});

//abrir caracteristicas filmes
let hoverMoves = document.querySelector('.div-slides img');
let hoverMoveInformations = document.querySelector('.div-click-movie');

hoverMoves.addEventListener('mouseover', () =>{
    hoverMoveInformations.style.display = 'flex';
});
hoverMoveInformations.addEventListener('mouseover', () =>{
    hoverMoveInformations.style.display = 'flex';
    hoverMoves.style.scale = '1.3';
});
hoverMoves.addEventListener('mouseout', () =>{
    hoverMoveInformations.style.display = 'none';
});
hoverMoveInformations.addEventListener('mouseout', () =>{
    hoverMoves.style.scale = '1';
    hoverMoveInformations.style.display = 'none';
});

/*menu*/
let menu =  document.querySelector('header');
let notification = document.querySelector('.bi-bell');
let notificationFill = document.querySelector('.bi-bell-fill');
let arrowDown = document.querySelector('.bi-caret-down-fill');
let arrowUp = document.querySelector('.bi-caret-up-fill');
let imageLog = document.querySelector('.div-header-perfil img')

const menuColor = setInterval(() =>{
    if(window.scrollY > 10){
        menu.style.background = '#000';
    }else{
        menu.style.background = 'transparent';
    }
}, 50);

notification.addEventListener('click', () =>{
    notification.style.display = 'none';
    notificationFill.style.display = 'block';
});

notificationFill.addEventListener('click', () =>{
    notification.style.display = 'block';
    notificationFill.style.display = 'none';
});

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

//ratio
let star = document.querySelector('.bi-star-fill');
let starFill = document.querySelector('#special-star');

const starRate = setInterval(() =>{
star.addEventListener('click', () =>{
    star.style.display = 'none';
    starFill.style.display = 'inline';
});
},50);

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

        perfil.style.display = 'none';
    });
},50);

//perfil
let perfilOpen = document.querySelector('.div-header-perfil img');
let perfil = document.querySelector('.div-perfs-log');  

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
}, 50);