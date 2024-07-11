/*menu*/
var menu = document.querySelector("header");
var notification = document.querySelector(".bi-bell");
var notificationFill = document.querySelector(".bi-bell-fill");
var arrowDown = document.querySelector(".bi-caret-down-fill");
var arrowUp = document.querySelector(".bi-caret-up-fill");
var imageLog = document.querySelector(".div-header-perfil img");

const menuColor = setInterval(() => {
  if (window.scrollY > 10) {
    menu.style.background = "#000000";
  } else {
    menu.style.background = "transparent";
  }

  notification.addEventListener("click", () => {
    notification.style.display = "none";
    notificationFill.style.display = "block";
  });

  notificationFill.addEventListener("click", () => {
    notification.style.display = "block";
    notificationFill.style.display = "none";
  });
}, 50);

const menuPerfil = setInterval(() => {
  arrowDown.addEventListener("click", () => {
    arrowDown.style.display = "none";
    arrowUp.style.display = "block";
  });
  arrowUp.addEventListener("click", () => {
    arrowDown.style.display = "block";
    arrowUp.style.display = "none";
  });

  imageLog.addEventListener("click", () => {
    arrowDown.style.display = "none";
    arrowUp.style.display = "block";
  });
}, 50);

//seacrh
let searchDiv = document.querySelector(".div-search");
let searchButton = document.querySelector(".bi-search");
let searchInput = document.querySelector("#isearch");
let closeSearch = document.querySelector(".bi-x");

const searchOpen = setInterval(() => {
  searchButton.addEventListener("click", () => {
    searchDiv.style.width = "170px";
    searchDiv.style.border = "1px solid #fff";
    searchInput.style.zIndex = "3";
    closeSearch.style.display = "block";
  });

  closeSearch.addEventListener("click", () => {
    searchDiv.style.width = "25px";
    searchDiv.style.border = "none";
    searchInput.style.zIndex = "-4";
    closeSearch.style.display = "none";
  });
}, 50);

//perfil
let perfilOpen = document.querySelector(".div-header-perfil img");
let perfil = document.querySelector(".div-perfs-log");
let closerLog = document.querySelector(".second-x");

let imagePerfil = document.querySelector(".img-perfil-choose");
let imagePerfilSearch = document.querySelector(".img-perfil-search");
let choosePefilImage = document.querySelector(".choose-images");

let imagesChooseOne = document.querySelector(".img-choose-images1");
let imagesChoosePerfilSrc = imagesChooseOne.src;

let imagesChooseTwo = document.querySelector(".img-choose-images2");
let imagesChooseTwoSrc = imagesChooseTwo.src;

let imagesChooseThree = document.querySelector(".img-choose-images3");
let imagesChooseThreeSrc = imagesChooseThree.src;

let imagesChooseFour = document.querySelector(".img-choose-images4");
let imagesChooseFourSrc = imagesChooseFour.src;

let imagesChooseFive = document.querySelector(".img-choose-images5");
let imagesChooseFiveSrc = imagesChooseFive.src;

let imagesChooseSix = document.querySelector(".img-choose-images6");
let imagesChooseSixSrc = imagesChooseSix.src;

let arrowClosePerfil = document.querySelector(".bi-chevron-double-left");

const openPerfil = setInterval(() => {
  perfilOpen.addEventListener("click", () => {
    perfil.style.display = "block";
  });
  arrowDown.addEventListener("click", () => {
    perfil.style.display = "block";
  });

  arrowUp.addEventListener("click", () => {
    perfil.style.display = "none";
  });

  closerLog.addEventListener("click", () => {
    perfil.style.display = "none";
    arrowUp.style.display = "none";
    arrowDown.style.display = "block";
    choosePefilImage.style.display = "none";
  });
  imagePerfil.addEventListener("click", () => {
    choosePefilImage.style.display = "flex";
  });

  imagesChooseOne.addEventListener("click", () => {
    imagePerfil.src = imagesChoosePerfilSrc;
    imagePerfilSearch.src = imagesChoosePerfilSrc;
  });
  imagesChooseTwo.addEventListener("click", () => {
    imagePerfil.src = imagesChooseTwoSrc;
    imagePerfilSearch.src = imagesChooseTwoSrc;
  });
  imagesChooseThree.addEventListener("click", () => {
    imagePerfil.src = imagesChooseThreeSrc;
    imagePerfilSearch.src = imagesChooseThreeSrc;
  });
  imagesChooseFour.addEventListener("click", () => {
    imagePerfil.src = imagesChooseFourSrc;
    imagePerfilSearch.src = imagesChooseFourSrc;
  });
  imagesChooseFive.addEventListener("click", () => {
    imagePerfil.src = imagesChooseFiveSrc;
    imagePerfilSearch.src = imagesChooseFiveSrc;
  });
  imagesChooseSix.addEventListener("click", () => {
    imagePerfil.src = imagesChooseSixSrc;
    imagePerfilSearch.src = imagesChooseSixSrc;
  });
  arrowClosePerfil.addEventListener("click", () => {
    choosePefilImage.style.display = "none";
  });
}, 50);

//adiciona filmes a lista
let bookmark = document.querySelector('.bi-bookmark');
let bookmarkCheck = document.querySelector('.bi-bookmark-check');
let bookmarkFill = document.querySelector('.bi-bookmark-fill');

bookmark.addEventListener('click', () =>{
   bookmark.style.display = 'none';
   bookmarkCheck.style.display = 'block';

   setTimeout(() =>{
   bookmarkFill.style.display = 'block';
   bookmarkCheck.style.display = 'none';
   }, 500);
});

bookmarkFill.addEventListener('click', () =>{
   bookmark.style.display = 'block';
   bookmarkFill.style.display = 'none';
});

//dar like ou deslike
let likeUp = document.querySelector('.liked-up');
let likeUpFill = document.querySelector('.liked-up-fill');

let likeDown = document.querySelector(".liked-down");
let likeDownFill = document.querySelector(".liked-down-fill");

let contagemUp = document.querySelector('.p-liked-up');
let contagemDown = document.querySelector('.p-liked-down');

let likedContageUpAtual = 0;
let likedContageDownAtual = 0;

likeUp.addEventListener('click', () =>{
   likeUp.style.display = 'none';
   likeUpFill.style.display = 'block';
   likeUpFill.classList.add('liked-animation');

   likeDownFill.style.display = 'none';
   likeDown.style.display = 'block';

   likedContageUpAtual++;
   contagemUp.innerHTML = likedContageUpAtual;

   if(likedContageDownAtual > 0){
      likedContageDownAtual--;
      contagemDown.innerHTML = likedContageDownAtual;
   }
});
likeUpFill.addEventListener('click', () =>{
   likeUpFill.style.display = 'none';
   likeUp.style.display = 'block';

   likedContageUpAtual--;
   contagemUp.innerHTML = likedContageUpAtual;
});

likeDown.addEventListener('click', () =>{
   likeDown.style.display = 'none';
   likeDownFill.style.display = 'block';
   likeDownFill.classList.add('liked-animation');

   likeUpFill.style.display = 'none';
   likeUp.style.display = 'block';
   
   likedContageDownAtual++;
   contagemDown.innerHTML = likedContageDownAtual;

   if(likedContageUpAtual > 0){
      likedContageUpAtual--;
      contagemUp.innerHTML = likedContageUpAtual;
   }
});
likeDownFill.addEventListener('click', () =>{
   likeDownFill.style.display = 'none';
   likeDown.style.display = 'block';

   likedContageDownAtual--;
   contagemDown.innerHTML = likedContageDownAtual;
});

//funçções video
let video = document.querySelector('.div-player-video video');

let playVideo = document.querySelector(`.bi-play-fill-video`);
let pauseVideo = document.querySelector(`.bi-pause-fill-video`);

let playVideoTwo = document.querySelector(`.bi-play-fill-video2`);
let pauseVideoTwo = document.querySelector(`.bi-pause-fill-video2`);

let volume = document.querySelector('.video-volume');
let volumeRange = document.querySelector('.video-volume div');


//funções pausar e despausar video
playVideo.addEventListener('click', () =>{
   playVideo.style.display = 'none';
   pauseVideo.style.display = 'block';

   playVideoTwo.style.display = 'none';
   pauseVideoTwo.style.display = 'block';

   document.addEventListener('keydown', pauseVideoKey);

   video.play();
});
pauseVideo.addEventListener('click', () =>{
   pauseVideo.style.display = 'none';
   playVideo.style.display = 'block';

   pauseVideoTwo.style.display = 'none';
   playVideoTwo.style.display = 'block';

   video.pause();
});

playVideoTwo.addEventListener('click', () =>{
   playVideoTwo.style.display = 'none';
   pauseVideoTwo.style.display = 'block';

   playVideo.style.display = 'none';
   pauseVideo.style.display = 'block';

   video.play();
});
pauseVideoTwo.addEventListener('click', () =>{
   pauseVideoTwo.style.display = 'none';
   playVideoTwo.style.display = 'block';

   pauseVideo.style.display = 'none';
   playVideo.style.display = 'block';

   video.pause();
});

function pauseVideoKey(event){
   if(event.code === 'Space'){
      video.pause();

      setTimeout(() =>{
         if(event.code === 'Space'){
            video.play();
         }
      }, 1000);
   }
}

//aumentar o volume e aparecer para abaixar
volume.addEventListener('click', () =>{
   volumeRange.style.display = 'block';

   setTimeout(() =>{
      volume.addEventListener('click', () =>{
         volumeRange.style.display = 'none';
      });
   }, 500);
});

//movies hover
let imageMovieHover = document.querySelector(".div-movie-slide img");
let pMovieHover = document.querySelector(".div-movie-slide p");

let imageMovieHoverTwo = document.querySelector(".div-movie-slide2 img");
let pMovieHoverTwo = document.querySelector(".div-movie-slide2 p");

let imageMovieHoverThree = document.querySelector(".div-movie-slide3 img");
let pMovieHoverThree = document.querySelector(".div-movie-slide3 p");

let imageMovieFour = document.querySelector(".div-movie-slide4 img");
let pMovieHoverFour = document.querySelector(".div-movie-slide4 p");

let imageMovieHoverFive = document.querySelector(".div-movie-slide5 img");
let pMovieHoverFive = document.querySelector(".div-movie-slide5 p");

let imageMovieHoverSix = document.querySelector(".div-movie-slide6 img");
let pMovieHoverSix = document.querySelector(".div-movie-slide6 p");

let imageMovieHoverSeven = document.querySelector(".div-movie-slide7 img");
let pMovieHoverSeven = document.querySelector(".div-movie-slide7 p");

let imageMovieHoverEigth = document.querySelector(".div-movie-slide8 img");
let pMovieHoverEigth = document.querySelector(".div-movie-slide8 p");

imageMovieHover.addEventListener("mouseover", () => {
  pMovieHover.style.display = "block";
});
imageMovieHover.addEventListener("mouseout", () => {
  pMovieHover.style.display = "none";
});

pMovieHover.addEventListener("mouseover", () => {
  pMovieHover.style.display = "block";
  imageMovieHover.style.scale = "1.03";
});
pMovieHover.addEventListener("mouseout", () => {
  pMovieHover.style.display = "none";
});

imageMovieHoverTwo.addEventListener("mouseover", () => {
  pMovieHoverTwo.style.display = "block";
});
imageMovieHoverTwo.addEventListener("mouseout", () => {
  pMovieHoverTwo.style.display = "none";
});

pMovieHoverTwo.addEventListener("mouseover", () => {
  pMovieHoverTwo.style.display = "block";
});
pMovieHoverTwo.addEventListener("mouseout", () => {
  pMovieHoverTwo.style.display = "none";
});

imageMovieHoverThree.addEventListener("mouseover", () => {
  pMovieHoverThree.style.display = "block";
});
imageMovieHoverThree.addEventListener("mouseout", () => {
  pMovieHoverThree.style.display = "none";
});

pMovieHoverThree.addEventListener("mouseover", () => {
  pMovieHoverThree.style.display = "block";
});
pMovieHoverThree.addEventListener("mouseout", () => {
  pMovieHoverThree.style.display = "none";
});

imageMovieFour.addEventListener("mouseover", () => {
  pMovieHoverFour.style.display = "block";
});
imageMovieFour.addEventListener("mouseout", () => {
  pMovieHoverFour.style.display = "none";
});

pMovieHoverFour.addEventListener("mouseover", () => {
  pMovieHoverFour.style.display = "block";
});
pMovieHoverFour.addEventListener("mouseout", () => {
  pMovieHoverFour.style.display = "none";
});

imageMovieHoverFive.addEventListener("mouseover", () => {
  pMovieHoverFive.style.display = "block";
});
imageMovieHoverFive.addEventListener("mouseout", () => {
  pMovieHoverFive.style.display = "none";
});

pMovieHoverFive.addEventListener("mouseover", () => {
  pMovieHoverFive.style.display = "block";
});
pMovieHoverFive.addEventListener("mouseout", () => {
  pMovieHoverFive.style.display = "none";
});

imageMovieHoverSix.addEventListener("mouseover", () => {
  pMovieHoverSix.style.display = "block";
});
imageMovieHoverSix.addEventListener("mouseout", () => {
  pMovieHoverSix.style.display = "none";
});

pMovieHoverSix.addEventListener("mouseover", () => {
  pMovieHoverSix.style.display = "block";
});
pMovieHoverSix.addEventListener("mouseout", () => {
  pMovieHoverSix.style.display = "none";
});

imageMovieHoverSeven.addEventListener("mouseover", () => {
  pMovieHoverSeven.style.display = "block";
});
imageMovieHoverSeven.addEventListener("mouseout", () => {
  pMovieHoverSeven.style.display = "none";
});

pMovieHoverSeven.addEventListener("mouseover", () => {
  pMovieHoverSeven.style.display = "block";
});
pMovieHoverSeven.addEventListener("mouseout", () => {
  pMovieHoverSeven.style.display = "none";
});

imageMovieHoverEigth.addEventListener("mouseover", () => {
  pMovieHoverEigth.style.display = "block";
});
imageMovieHoverEigth.addEventListener("mouseout", () => {
  pMovieHoverEigth.style.display = "none";
});

pMovieHoverEigth.addEventListener("mouseover", () => {
  pMovieHoverEigth.style.display = "block";
});
pMovieHoverEigth.addEventListener("mouseout", () => {
  pMovieHoverEigth.style.display = "none";
});