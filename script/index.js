//abrir caracteristicas filmes
let hoverMoves = document.querySelector('.div-slides img');
let hoverMoveInformations = document.querySelector('.div-click-movie');

let hoverMovesTwo = document.querySelector('.div-slides2 img');
let hoverMoveInformationsTwo = document.querySelector('.div-click-movie2');

let hoverMovesThree = document.querySelector('.div-slides3 img');
let hoverMoveInformationsThree = document.querySelector('.div-click-movie3');

let hoverMovesFour = document.querySelector('.div-slides4 img');
let hoverMoveInformationsFour = document.querySelector('.div-click-movie4');

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

hoverMovesTwo.addEventListener('mouseover', () =>{
    hoverMoveInformationsTwo.style.display = 'flex';
});
hoverMoveInformationsTwo.addEventListener('mouseover', () =>{
    hoverMoveInformationsTwo.style.display = 'flex';
    hoverMovesTwo.style.scale = '1.3';
});

hoverMovesTwo.addEventListener('mouseout', () =>{
    hoverMoveInformationsTwo.style.display = 'none';
});
hoverMoveInformationsTwo.addEventListener('mouseout', () =>{
    hoverMovesTwo.style.scale = '1';
    hoverMoveInformationsTwo.style.display = 'none';
});
hoverMovesThree.addEventListener('mouseover', () =>{
    hoverMoveInformationsThree.style.display = 'flex';
});
hoverMoveInformationsThree.addEventListener('mouseover', () =>{
    hoverMoveInformationsThree.style.display = 'flex';
    hoverMovesThree.style.scale = '1.3';
});

hoverMovesThree.addEventListener('mouseout', () =>{
    hoverMoveInformationsThree.style.display = 'none';
});
hoverMoveInformationsThree.addEventListener('mouseout', () =>{
    hoverMovesThree.style.scale = '1';
    hoverMoveInformationsThree.style.display = 'none';
});

hoverMovesFour.addEventListener('mouseover', () =>{
    hoverMoveInformationsFour.style.display = 'flex';
});
hoverMoveInformationsFour.addEventListener('mouseover', () =>{
    hoverMoveInformationsFour.style.display = 'flex';
    hoverMovesFour.style.scale = '1.3';
});

hoverMovesFour.addEventListener('mouseout', () =>{
    hoverMoveInformationsFour.style.display = 'none';
});
hoverMoveInformationsFour.addEventListener('mouseout', () =>{
    hoverMovesFour.style.scale = '1';
    hoverMoveInformationsFour.style.display = 'none';
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

let arrowClosePerfil = document.querySelector('.bi-chevron-double-left');

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
    });
    
    imagesChooseOne.addEventListener('click', () =>{
        imagePerfil.src = imagesChoosePerfilSrc;
        imagePerfilSearch.src = imagesChoosePerfilSrc;
    });
    imagesChooseTwo.addEventListener('click', () =>{
        imagePerfil.src = imagesChooseTwoSrc;
        imagePerfilSearch.src = imagesChooseTwoSrc;
    });
    imagesChooseThree.addEventListener('click', () =>{
        imagePerfil.src = imagesChooseThreeSrc;
        imagePerfilSearch.src = imagesChooseThreeSrc;
    });
    imagesChooseFour.addEventListener('click', () =>{
        imagePerfil.src = imagesChooseFourSrc;
        imagePerfilSearch.src = imagesChooseFourSrc;
    });
    imagesChooseFive.addEventListener('click', () =>{
        imagePerfil.src = imagesChooseFiveSrc;
        imagePerfilSearch.src = imagesChooseFiveSrc;
    });
    imagesChooseSix.addEventListener('click', () =>{
        imagePerfil.src = imagesChooseSixSrc;
        imagePerfilSearch.src = imagesChooseSixSrc;
    });
    arrowClosePerfil.addEventListener('click', () =>{
        choosePefilImage.style.display = 'none';
    })
}, 50);

//top 10
let imageTop10 = document.querySelector('.div-img-top-10 img');
let paraghTop10 = document.querySelector('.div-img-top-10 p');

let imageTop10Two = document.querySelector('.div2-img-top-10 img');
let paraghTop10Two = document.querySelector('.div2-img-top-10 p');

let imageTop10Three = document.querySelector('.div3-img-top-10 img');
let paraghTop10Three = document.querySelector('.div3-img-top-10 p');

let imageTop10Four = document.querySelector('.div4-img-top-10 img');
let paraghTop10Four = document.querySelector('.div4-img-top-10 p');

let imageTop10Five = document.querySelector('.div5-img-top-10 img');
let paraghTop10Five = document.querySelector('.div5-img-top-10 p');

imageTop10.addEventListener('mouseover', () =>{
    paraghTop10.style.display = 'block';
});
imageTop10.addEventListener('mouseout', () =>{
    paraghTop10.style.display = 'none';
});

imageTop10Two.addEventListener('mouseover', () =>{
    paraghTop10Two.style.display = 'block';
});
imageTop10Two.addEventListener('mouseout', () =>{
    paraghTop10Two.style.display = 'none';
});

imageTop10Three.addEventListener('mouseover', () =>{
    paraghTop10Three.style.display = 'block';
});
imageTop10Three.addEventListener('mouseout', () =>{
    paraghTop10Three.style.display = 'none';
});

imageTop10Four.addEventListener('mouseover', () =>{
    paraghTop10Four.style.display = 'block';
})
imageTop10Four.addEventListener('mouseout', () =>{
    paraghTop10Four.style.display = 'none';
})

imageTop10Five.addEventListener('mouseover', () =>{
    paraghTop10Five.style.display = 'block';
})
imageTop10Five.addEventListener('mouseout', () =>{
    paraghTop10Five.style.display = 'none';
})