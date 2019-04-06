document.addEventListener("DOMContentLoaded", function() {
    objectUp = document.getElementById('arrowUp');
    objectDown = document.getElementById('arrowDown');
    objectLeft = document.getElementById('arrowLeft');
    objectRight = document.getElementById('arrowRight');

    document.addEventListener('keyup', animiateArrows);


    squareStraight = document.getElementById('squareSt');
    squareUp = document.getElementById('squareUp');
    squareDown = document.getElementById('squareDown');
    squareLeft = document.getElementById('squareLeft');
    squareRight = document.getElementById('squareRight');
    mainObject = document.getElementById('mainObjec');

    mainObject.style.left = Math.round(window.innerWidth / 2) + 'px';
    mainObject.style.top = Math.round(window.innerHeight / 2) + 'px';

    document.addEventListener('keyup', animateObjects);  
});