document.addEventListener("DOMContentLoaded", function() {


            var arrowUp = 38;
            var arrowDown = 40;
            var arrowLeft = 37;
            var arrowRight = 39;

            var objectUp = document.getElementById('arrowUp');
            var objectDown = document.getElementById('arrowDown');
            var objectLeft = document.getElementById('arrowLeft');
            var objectRight = document.getElementById('arrowRight');

            var squareStraight = document.getElementById('squareSt');
            var squareUp = document.getElementById('squareUp');
            var squareDown = document.getElementById('squareDown');
            var squareLeft = document.getElementById('squareLeft');
            var squareRight = document.getElementById('squareRight');
            var mainObject = document.getElementById('mainObjec');



                function animateObject(event) {
                    var key = event.keyCode;
                    if (key == arrowUp) {
                        objectUp.style.opacity = 0.8;
                        objectUp.style.marginTop = -2 + 'px';
                        squareDown.style.display = "inline";
                        squareStraight.style.display = "none";

                    } else if (key == arrowDown) {
                        objectDown.style.opacity = 0.8;
                        objectDown.style.marginTop = 2 + 'px';
                        squareUp.style.display = "inline";
                        squareStraight.style.display = "none";
                    } else if (key == arrowLeft) {
                        objectLeft.style.opacity = 0.8;
                        squareRight.style.display = "inline";
                        squareStraight.style.display = "none";
                        mainObject.style.left =  5 + 'px';
                        objectLeft.style.marginLeft = -2 + 'px'; 
                    } else if (key == arrowRight) {
                        objectRight.style.opacity = 0.8;
                        objectRight.style.paddingRight = 2 + 'px';
                        squareLeft.style.display = "inline";
                        squareStraight.style.display = "none";

                        // Не пойму почему не работает
                        objectLeft.style.paddingRight = 2 + 'px'; 
                    }
                }
                document.onkeydown = animateObject;
                document.onkeyup = function() {
                    objectUp.style.opacity = 1;
                    objectUp.style.marginTop = 0 + 'px';
                    objectDown.style.opacity = 1;
                    objectDown.style.marginTop = 0 + 'px';
                    objectLeft.style.opacity = 1;
                    objectLeft.style.paddingLeft = 0 + 'px';
                    objectRight.style.opacity = 1;
                    objectRight.style.paddingLeft = 0 + 'px';
                    squareStraight.style.display = "inline";
                    squareUp.style.display = "none";
                    squareDown.style.display = "none";
                    squareRight.style.display = "none";
                    squareLeft.style.display = "none";
                }

            });