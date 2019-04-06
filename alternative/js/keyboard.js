var objectUp, objectDown, objectLeft, objectRight;

function animateArrow(arrowObj, tmpRule, tmpValue) {
    arrowObj.style.opacity = 0.5;
    arrowObj.style[tmpRule] = tmpValue;
    setTimeout(function() {
        arrowObj.style.opacity = 1;
        arrowObj.style[tmpRule] = 0;
    }, 200);
}

function animiateArrows(event) {
    switch(event.keyCode) {
        case arrowUp:
            animateArrow(objectUp, 'marginTop', '2px');
            break;
        case arrowDown:
            animateArrow(objectDown, 'marginTop', '2px');
            break;
        case arrowLeft:
            animateArrow(objectLeft, 'marginTop', '2px');
            break;
        case arrowRight:
            animateArrow(objectRight, 'marginTop', '2px');
            break;
    }
}