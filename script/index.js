//favoritar
let favorite = document.querySelector('.bi-heart');
let favoriteFill = document.querySelector('.bi-heart-fill');

const favoritarConst = setInterval(() =>{
favorite.addEventListener('click', () =>{
    favorite.style.display = 'none';
    favoriteFill.style.display = 'block';
});
favoriteFill.addEventListener('click', () =>{
    favorite.style.display = 'block';
    favoriteFill.style.display = 'none';
});
}, 50);

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

let imagePerfil = document.querySelector('.img-perfil-choose');
let imagePerfilSearch = document.querySelector('.img-perfil-search');
let choosePefilImage = document.querySelector('.choose-images');

let imagesChooseOne = document.querySelector('.img-choose-images1');
let imagesChoosePerfilSrc = imagesChooseOne.src;

let imagesChooseTwo = document.querySelector('.img-choose-images2');
let imagesChooseTwoSrc = imagesChooseTwo.src;

let imagesChooseThree = document.querySelector('.img-choose-images3');
let imagesChooseThreeSrc = imagesChooseThree.src;

let imagesChooseFour = document.querySelector('.img-choose-images4');
let imagesChooseFourSrc = imagesChooseFour.src;

let imagesChooseFive = document.querySelector('.img-choose-images5');
let imagesChooseFiveSrc = imagesChooseFive.src;

let imagesChooseSix = document.querySelector('.img-choose-images6');
let imagesChooseSixSrc = imagesChooseSix.src;


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
        choosePefilImage.style.display = 'none';
    });

    imagePerfil.addEventListener('click', () =>{
        choosePefilImage.style.display = 'flex';
    })
    
    imagesChooseOne.addEventListener('click', () =>{
        choosePefilImage.style.display = 'none';
        imagePerfil.src = imagesChoosePerfilSrc;
        imagePerfilSearch.src = imagesChoosePerfilSrc;
    })
    imagesChooseTwo.addEventListener('click', () =>{
        choosePefilImage.style.display = 'none';
        imagePerfil.src = imagesChooseTwoSrc;
        imagePerfilSearch.src = imagesChooseTwoSrc;
    })
    imagesChooseThree.addEventListener('click', () =>{
        choosePefilImage.style.display = 'none';
        imagePerfil.src = imagesChooseThreeSrc;
        imagePerfilSearch.src = imagesChooseThreeSrc;
    })
    imagesChooseFour.addEventListener('click', () =>{
        choosePefilImage.style.display = 'none';
        imagePerfil.src = imagesChooseFourSrc;
        imagePerfilSearch.src = imagesChooseFourSrc;
    })
    imagesChooseFive.addEventListener('click', () =>{
        choosePefilImage.style.display = 'none';
        imagePerfil.src = imagesChooseFiveSrc;
        imagePerfilSearch.src = imagesChooseFiveSrc;
    })
    imagesChooseSix.addEventListener('click', () =>{
        choosePefilImage.style.display = 'none';
        imagePerfil.src = imagesChooseSixSrc;
        imagePerfilSearch.src = imagesChooseSixSrc;
    })
}, 50);