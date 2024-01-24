let mainColor = document.querySelector('main'),
    hexCode = document.querySelector('.hex-code'),
    changeColorButton = document.querySelector('.change-color');

    function randomColor() {
        let letters = "0123456789ABCDEF"; 

        let colorStarWith = '#';

        for (let i = 0; i < 6; i++) {
            colorStarWith += letters[(Math.floor(Math.random() * 16))]; 
        };

        return colorStarWith
    };

    changeColorButton.addEventListener('click', function() {
         mainColor.style.backgroundColor = randomColor();
         hexCode.textContent = randomColor();
    });