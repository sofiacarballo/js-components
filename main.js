const verticalSlider = document.querySelector('.vertical-slider');
const verticalContainer = document.querySelector('.vertical-container');
const verticalBefore = document.querySelector('.img-vertical-container-before');

const horizontalSlider = document.querySelector('.horizontal-slider');
const horizontalContainer = document.querySelector('.horizontal-container');
const horizontalBefore = document.querySelector('.img-horizontal-container-before');

const moveSlider = (event) => {
    let xPosition = event.layerX;
    let size = verticalContainer.offsetWidth;

    verticalBefore.style.width = xPosition + 'px';
    verticalSlider.style.left = xPosition + 'px';

    if (xPosition < 10) {
        verticalBefore.style.width = 0;
        verticalSlider.style.left = 0;
    }

    if (xPosition + 30 > size) {
        verticalBefore.style.width = size + 'px';
        verticalSlider.style.left = size + 'px';
    }
}

const moveHorizontalSlider = (event) => {
    let yPosition = event.layerY;
    let size = horizontalContainer.offsetWidth;

    horizontalBefore.style.height = yPosition + 'px';
    horizontalSlider.style.top = yPosition + 'px';

    if (yPosition < 10) {
        horizontalBefore.style.height = 0;
        horizontalSlider.style.top = 0;
    }

    if (yPosition + 30 > size) {
        horizontalBefore.style.height = size + 'px';
        horizontalSlider.style.top = size + 'px';
    }
}

verticalContainer.addEventListener('mousemove', moveSlider);
horizontalContainer.addEventListener('mousemove', moveHorizontalSlider);