var animatedFlag = false,
    squareStraight, squareUp, squareDown, squareLeft, squareRight, mainObject;
    
function animateObject(squareObj, changeRule, changeKoeff) {
    if(animatedFlag) {
        return;
    }
    animatedFlag = true;
    squareStraight.style.display = 'none';
    squareUp.style.display = 'none';
    squareDown.style.display = 'none';
    squareLeft.style.display = 'none';
    squareRight.style.display = 'none';
    squareObj.style.display = "block";
    mainObject.style[changeRule] = (parseInt(mainObject.style[changeRule]) + changeKoeff * 100) + 'px';
    setTimeout(function() {
        animatedFlag = false;
        squareStraight.style.display = 'block';
        squareObj.style.display = "none";
    }, 580)
}

function animateObjects(event) {
    switch(event.keyCode) {
        case arrowUp:
            animateObject(squareUp, 'top', -1);
            break;
        case arrowDown:
            animateObject(squareDown, 'top', 1);
            break;
        case arrowLeft:
            animateObject(squareLeft, 'left', -1);
            break;
        case arrowRight:
            animateObject(squareRight, 'left', 1);
            break;
    }
}