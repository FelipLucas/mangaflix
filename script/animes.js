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
let divVideo = document.querySelector('.div-player-video');
let video = document.querySelector('.div-player-video video');
let spacePlay = false;
let controlsVideo = document.querySelector('.section-video-controls');

let playVideo = document.querySelector(`.bi-play-fill-video`);
let pauseVideo = document.querySelector(`.bi-pause-fill-video`);

let playVideoTwo = document.querySelector(`.bi-play-fill-video2`);
let pauseVideoTwo = document.querySelector(`.bi-pause-fill-video2`);

let volume = document.querySelector('.video-volume');
let volumeRange = document.querySelector('.video-volume div');
let volumeDrag;
volumeDrag = false;

let nextVideos = document.querySelector('.next-episodes-videos');
let moreVideosButton = document.querySelector('.next-episode-button');

let downloadHover = document.querySelector('.div-download-video');
let downloadButton = document.querySelector('.download-button');
let captionJapanese = document.querySelector('.p-original.click');
let captionJapaneseSvg = document.querySelector('.bi-check3');
let captionPortuguese = document.querySelector('.p-original.focus');
let captionPortugueseSvg = document.querySelector('.bi-check4');

let timerVideo = document.querySelector('.div-video-timer p');
let barProgess = document.querySelector('.div-video-timer');
let progess = document.querySelector('.video-timer');
let videoLoader = document.querySelector('.loader');
let hour, min, seg, currentHour, currentMin, currentSeg;

let classificacaoVideo = document.querySelector('.div-classficação-de-idade');

let fullScreenButton = document.querySelector('.full-screen-button');

let skipButton = document.querySelector('.skip-timer-button');
let skipButtonClick = document.querySelector('.div-next-button-click');
let skipPreviousButton = document.querySelector('.skip-previous-timer-button');
let skipPreviousButtonClick = document.querySelector('.div-previous-button-click');
let segundosSkip = 10;
let segundosPrevious = 10;
let pctSeek;
let pctSeekBar;

let pauseOverlay = document.querySelector('.div-des-pause');
let overlayPause = document.querySelector('.overlay-principal-class');

let intro = document.querySelector('.div-intro');

//funções pausar e despausar video
playVideo.addEventListener('click', () =>{
   playVideo.style.display = 'none';

   playVideoTwo.style.display = 'none';
   pauseVideoTwo.style.display = 'block';

   controlsVideo.style.display = 'block';

   setInterval(uptadeTImer, 100);

   volume.addEventListener('click', mutedVol);
   document.addEventListener('keydown', pauseVideoKey);
   video.addEventListener('waiting', loader);
   video.addEventListener('playing', loader);
   
   setTimeout(() =>{
      controlsVideo.style.display = 'none';  

      video.addEventListener('click', () =>{
         controlsVideo.style.display = 'none';  

         playVideo.style.display = 'block';
         pauseVideo.style.display = 'none';

         video.pause();

         setInterval(() =>{
            video.addEventListener('click', () =>{
               controlsVideo.style.display = 'block';  

               playVideo.style.display = 'none';
               pauseVideo.style.display = 'block';

               setInterval(() =>{
                  playVideo.style.display = 'none';
               }, 2000)

               video.play();
            });
         }, 10);
      });
   },7000);

   video.play();
});
pauseVideo.addEventListener('click', () =>{
   pauseVideo.style.display = 'none';
   playVideo.style.display = 'block';

   pauseVideoTwo.style.display = 'none';
   playVideoTwo.style.display = 'block';

   clearInterval(uptadeTImer, 100);

   video.pause();
});

playVideoTwo.addEventListener('click', () =>{
   playVideoTwo.style.display = 'none';
   pauseVideoTwo.style.display = 'block';

   playVideo.style.display = 'none';
   pauseVideo.style.display = 'block';

   setInterval(uptadeTImer, 100);

   setTimeout(() =>{
      playVideo.style.display = 'none';
      pauseVideo.style.display = 'none';

      setTimeout(() =>{
         controlsVideo.style.display = 'none';  

         video.addEventListener('click', () =>{
            playVideo.style.display = 'block';
            pauseVideo.style.display = 'none';

            video.pause();

            setInterval(() =>{
               video.addEventListener('click', () =>{
                  controlsVideo.style.display = 'block';  
   
                  playVideo.style.display = 'none';
                  pauseVideo.style.display = 'block';
   
                  setInterval(() =>{
                     playVideo.style.display = 'none';
                  }, 2000)
   
                  video.play();
               });
            }, 10);
         });
      },2000);
   }, 7000)

   video.play();
});
pauseVideoTwo.addEventListener('click', () =>{
   pauseVideoTwo.style.display = 'none';
   playVideoTwo.style.display = 'block';

   pauseVideo.style.display = 'none';
   playVideo.style.display = 'block';

   clearInterval(uptadeTImer, 100);

   video.pause();
});

//pause with key
function pauseVideoKey(event){
   if(event.code === 'Space' && spacePlay === false){
      video.pause();
      spacePlay = true;

      playVideoTwo.style.display = 'block';
      pauseVideoTwo.style.display = 'none';

      playVideo.style.display = 'block';
      pauseVideo.style.display = 'none';


   } else if(event.code === 'Space' && spacePlay === true){
      video.play();
      spacePlay = false;

      playVideoTwo.style.display = 'none';
      pauseVideoTwo.style.display = 'block';

      playVideo.style.display = 'none';
      pauseVideo.style.display = 'block';

      setTimeout(() =>{
         playVideo.style.display = 'none';
         pauseVideo.style.display = 'none';
   
         setTimeout(() =>{
            controlsVideo.style.display = 'none';  
   
            video.addEventListener('click', () =>{
               playVideo.style.display = 'block';
               pauseVideo.style.display = 'none';
   
               video.pause();
   
               setInterval(() =>{
                  video.addEventListener('click', () =>{
                     controlsVideo.style.display = 'block';  
      
                     playVideo.style.display = 'none';
                     pauseVideo.style.display = 'block';
      
                     setInterval(() =>{
                        playVideo.style.display = 'none';
                     }, 2000)
      
                     video.play();
                  });
               }, 10);
            });
         },2000);
      }, 7000)
   }
};
//aumentar o volume e aparecer para abaixar
volume.addEventListener('mousedown', startDrag);
volume.addEventListener('mouseup', startDrag);
volume.addEventListener('mousemove', showVolume);
function startDrag(event){
   if(event.type === 'mousedown'){
      volumeDrag = true;
   } else{
      volumeDrag = false;
   }
}

function showVolume(event){
   if(volumeDrag){
      var w = volume.clientWidth - 2;
      var x = event.clientX - volume.offsetLeft;
      var pctVol = x/w;

      volumeRange.style.width = x + 'px';
      video.volume = pctVol;

      if(pctVol <= 0){
         volume.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="35" height="35" viewBox="0 0 24 24" role="img" data-icon="VolumeOffStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z" fill="currentColor"></path></svg>';
      } else if(pctVol > 0 && pctVol <= .5){
         volume.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="35" height="35" viewBox="0 0 24 24" role="img" data-icon="VolumeLowStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM16.0001 12C16.0001 10.4087 15.368 8.88262 14.2428 7.7574L12.8285 9.17161C13.5787 9.92176 14.0001 10.9392 14.0001 12C14.0001 13.0609 13.5787 14.0783 12.8285 14.8285L14.2428 16.2427C15.368 15.1175 16.0001 13.5913 16.0001 12Z" fill="currentColor"></path></svg>';
      } else{
         volume.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="35" height="35" viewBox="0 0 24 24" role="img" data-icon="VolumeMediumStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM17.0709 4.92897C18.9462 6.80433 19.9998 9.34787 19.9998 12C19.9998 14.6522 18.9462 17.1957 17.0709 19.0711L15.6567 17.6569C17.157 16.1566 17.9998 14.1218 17.9998 12C17.9998 9.87831 17.157 7.84347 15.6567 6.34318L17.0709 4.92897ZM14.2428 7.7574C15.368 8.88262 16.0001 10.4087 16.0001 12C16.0001 13.5913 15.368 15.1175 14.2428 16.2427L12.8285 14.8285C13.5787 14.0783 14.0001 13.0609 14.0001 12C14.0001 10.9392 13.5787 9.92176 12.8285 9.17161L14.2428 7.7574Z" fill="currentColor"></path></svg>';
      }

      volume.removeEventListener('click', mutedVol);
   }
}

volume.addEventListener('mouseover', () =>{
   volumeRange.style.display = 'block';

   setInterval(() =>{
      video.addEventListener('click', () =>{
         volumeRange.style.display = 'none';
      });
   }, 50);

});

volume.addEventListener('mouseout', () =>{
   volumeRange.style.display = 'none';
   volume.addEventListener('click', mutedVol);
});

function mutedVol(){
   if(!video.muted){
      video.muted = true;
      volume.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="35" height="35" viewBox="0 0 24 24" role="img" data-icon="VolumeOffStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z" fill="currentColor"></path></svg>'
   } else{
      video.muted = false;
      volume.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="35" height="35" viewBox="0 0 24 24" role="img" data-icon="VolumeHighStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 8.28693 22.525 4.72597 19.8995 2.10046L18.4853 3.51468C20.7357 5.76511 22 8.81736 22 12C22 15.1826 20.7357 18.2348 18.4853 20.4852L19.8995 21.8995C22.525 19.2739 24 15.713 24 12ZM11 3.99995C11 3.59549 10.7564 3.23085 10.3827 3.07607C10.009 2.92129 9.57889 3.00685 9.29289 3.29285L4.58579 7.99995H1C0.447715 7.99995 0 8.44767 0 8.99995V15C0 15.5522 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0786 10.3827 20.9238C10.7564 20.7691 11 20.4044 11 20V3.99995ZM5.70711 9.70706L9 6.41417V17.5857L5.70711 14.2928L5.41421 14H5H2V9.99995H5H5.41421L5.70711 9.70706ZM16.0001 12C16.0001 10.4087 15.368 8.88254 14.2428 7.75732L12.8285 9.17154C13.5787 9.92168 14.0001 10.9391 14.0001 12C14.0001 13.0608 13.5787 14.0782 12.8285 14.8284L14.2428 16.2426C15.368 15.1174 16.0001 13.5913 16.0001 12ZM17.0709 4.92889C18.9462 6.80426 19.9998 9.3478 19.9998 12C19.9998 14.6521 18.9462 17.1957 17.0709 19.071L15.6567 17.6568C17.157 16.1565 17.9998 14.1217 17.9998 12C17.9998 9.87823 17.157 7.8434 15.6567 6.34311L17.0709 4.92889Z" fill="currentColor"></path></svg>'
   }
}

//hover proximo episodio
moreVideosButton.addEventListener('mouseover', () =>{
   nextVideos.style.display = 'flex';
   downloadHover.style.display = 'none';
});
video.addEventListener('mouseover', () =>{
   nextVideos.style.display = 'none';
});

//hover download and captions
downloadButton.addEventListener('mouseover', () =>{
   downloadHover.style.display = 'flex';
   nextVideos.style.display = 'none';
});
video.addEventListener('mouseover', () =>{
   downloadHover.style.display = 'none';
});

captionJapanese.addEventListener('click', () =>{
   captionJapanese.classList.add('focus');
   captionPortuguese.classList.remove('focus');

   captionJapaneseSvg.style.display = 'block';
   captionPortugueseSvg.style.display = 'none';

   controlsVideo.style.display = 'none';
   playVideo.style.display = 'block';
   pauseVideo.style.display = 'none';

   video.src = '../videos/Tokyo Ghoul - Season 1/Tokyo Ghoul Eps.01.mp4';
});

captionPortuguese.addEventListener('click', () =>{
   captionJapanese.classList.remove('focus');
   captionPortuguese.classList.add('focus');

   captionJapaneseSvg.style.display = 'none';
   captionPortugueseSvg.style.display = 'block';

   controlsVideo.style.display = 'none';
   playVideo.style.display = 'block';
   pauseVideo.style.display = 'none';

   video.src = 'https://rr8---sn-8p8v-bg0es.googlevideo.com/videoplayback?expire=1721124601&ei=edaVZvX6N7eN3rsPz7qfwAM&ip=179.193.11.19&id=9c76d2711981528f&itag=22&source=blogger&xpc=Egho7Zf3LnoBAQ%3D%3D&mh=iP&mm=31&mn=sn-8p8v-bg0es&ms=au&mv=m&mvi=8&pl=24&susc=bl&eaua=pPBo9J5J0jc&mime=video/mp4&vprv=1&dur=1569.134&lmt=1698372873389649&mt=1721095265&txp=1311224&sparams=expire,ei,ip,id,itag,source,xpc,susc,eaua,mime,vprv,dur,lmt&sig=AJfQdSswRAIgY9r3Y0u_6Pk3YrhclHHWnss_SShnhNDNwIJqLYKW-g4CIGLM1wyNYNj0EvMTXfBFbHRzGW_ewMxx1T5JRn7Si1Y8&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AHlkHjAwRgIhAMDp2y9APrEtsfb9OVWFg9gK2lVXSLl5_Fa7Jw2sOay1AiEAzzSfURqNkhqivbvk161HVOJl74_EehFkJz45ioE_ssc%3D&cpn=AlP760x_Fhsik5ZQ&c=WEB_EMBEDDED_PLAYER&cver=1.20240710.01.00';
});

//tela cheia
fullScreenButton.addEventListener('click', () =>{
   if(!document.webkitFullScreenElement){
      divVideo.webkitRequestFullScreen();
   } else{
      document.webkitExitFullScreen();
   }
});

let iframe = document.querySelector('.iframe-watch');
function loadIframe(){
   iframe.play();
}

//skip video
skipButton.addEventListener('click', () =>{
   video.currentTime += segundosSkip;

   skipButtonClick.style.display = 'block';

   setTimeout(() =>{
      skipButtonClick.style.display = 'none';
   }, 1000);
});

skipPreviousButton.addEventListener('click', () =>{
   video.currentTime -= segundosPrevious;

   skipPreviousButtonClick.style.display = 'block';

   setTimeout(() =>{
      skipPreviousButtonClick.style.display = 'none';
   }, 1000);
});

//timer video
function convertTimer(hours, minutes, seconds){
   if(hours < 10 && hours > 0){
      hours = '0' + String(hours) + ':';
   } else{
      hours = '';
   }

   if(minutes < 10){
      minutes = '0' + String(minutes);
   } else if(minutes > 59){
      minutes = minutes - (Math.floor(minutes / 60) * 60);
   }

   if(seconds < 10){
      seconds = '0' + String(seconds);
   } return String(hours) + String(minutes) + ':' + String(seconds);
}

function uptadeTImer(){
   hour = Math.floor(video.duration / 3600);
   min = Math.floor(video.duration / 60);
   seg = Math.floor((video.duration / 60) % 1) * 60;

   //current timer
   currentHour = Math.floor(video.currentTime / 3600);
   currentMin = Math.floor(video.currentTime / 60);
   currentSeg = Math.floor(((video.currentTime / 60) % 1) * 60);

   timerVideo.innerHTML = convertTimer(currentHour, currentMin, currentSeg);
   
   bufferedEnd = video.buffered.end(video.buffered.length - 1);
   videoLoader.style.width = String((bufferedEnd / video.duration) * 100) + '%';
   pctSeek = (video.currentTime / video.duration) * 100;
   progess.style.width = String(pctSeek) + '%';

   if(progess.clientWidth > 0 && progess.clientWidth < 5){
      classificacaoVideo.style.display = 'flex';

      setTimeout(() =>{
         classificacaoVideo.style.display = 'none';
      }, 5000);
   }
}

//container pause
function informationsPause(){
   if(pauseVideoTwo.length = 0){
      setTimeout(() =>{
         pauseOverlay.style.display = 'flex';
         overlayPause.style.display = 'block';
      }, 5000);
   } else{
      pauseOverlay.style.display = 'none';
      overlayPause.style.display = 'none';
   }
} setInterval(informationsPause, 50);
//loader
function loader(event){
   switch(event.type){
      case 'waiting':
      videoLoader.style.display = 'block';
      break;

      case 'playing':
      videoLoader.style.display = 'none';
      break;

      default:
         videoLoader.style.display = 'none';
   }
}

//intro anime site
/*function introSite(){
   window.onload = () =>{
      intro.style.display = 'block';

      setTimeout(() =>{
         intro.style.display = 'none';
      }, 3000);
   }
} setInterval(introSite, 10);*/

barProgess.addEventListener('click', seeker)
function seeker(event){
   pctSeekBar = (event.clientX / barProgess.clientWidth) * 100;
   video.currentTime = (video.duration * pctSeekBar) / 100;
}

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