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
let searchButton = document.querySelector('.bi-search');
let searchDiv = document.querySelector('.div-search');

const searchOpen = setInterval(() =>{
    searchButton.addEventListener('click' () =>{
        searchDiv.style.width = '500px';
    })
},50);