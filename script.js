const image = document.getElementById('Img');
const button = document.getElementById('k');
let isInverted = false; 

button.addEventListener('click', () => {
    if (isInverted) {
        image.style.filter = 'none'; 
    } else {
        image.style.filter = 'invert(100%)'; 
    }
    isInverted = !isInverted; 
});

