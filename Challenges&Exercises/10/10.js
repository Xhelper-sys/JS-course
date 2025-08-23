const buttonElement = document.querySelector('.js-button');
containsClass('.js-button')

function containsClass(name) {
    if (buttonElement.classList.contains(name)) {
        console.log(`yes button test containe class ${name}`);
    } else {
        console.log('nop :(');
    };
};
