const buttonElement = document.querySelector('.js-button');
containsClass('.js-button')

function containsClass(name) {
    if (buttonElement.classList.contains(name)) {
        console.log(`yes button test containe class ${name}`);
    } else {
        console.log('nop :(');
    };
};

// 10f.
// 10g.

function changeClass(className) {
    const buttonElementJs = document.querySelector(className);

    const buttonMusic = document.querySelector('.js-button-music-no-press');
    const buttonGaming = document.querySelector('.js-button-gaming-no-press');
    const buttonTech = document.querySelector('.js-button-tech-no-press');

    if (className === '.js-button-gaming-no-press') {
        if (buttonMusic.classList.contains('js-button-press')) {
            buttonMusic.classList.remove('js-button-press');
        } else if (buttonTech.classList.contains('js-button-press')) {
            buttonTech.classList.remove('js-button-press');
        };

        if (buttonElementJs.classList.contains('js-button-press')) {
            buttonElementJs.classList.remove('js-button-press');
        } else {
            buttonElementJs.classList.add('js-button-press');
        };

    } else if (className === '.js-button-music-no-press') {
        if (buttonGaming.classList.contains('js-button-press')) {
            buttonGaming.classList.remove('js-button-press');
        } else if (buttonTech.classList.contains('js-button-press')) {
            buttonTech.classList.remove('js-button-press');
        };

        if (buttonElementJs.classList.contains('js-button-press')) {
            buttonElementJs.classList.remove('js-button-press');
        } else {
            buttonElementJs.classList.add('js-button-press');
        };

    } else if (className === '.js-button-tech-no-press') {
        if (buttonMusic.classList.contains('js-button-press')) {
            buttonMusic.classList.remove('js-button-press');
        } else if (buttonTech.classList.contains('js-button-press')) {
            buttonTech.classList.remove('js-button-press');
        };

        if (buttonElementJs.classList.contains('js-button-press')) {
            buttonElementJs.classList.remove('js-button-press');
        } else {
            buttonElementJs.classList.add('js-button-press');
        };

    };

};