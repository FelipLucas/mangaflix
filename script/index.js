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