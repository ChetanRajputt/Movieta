console.log('Connected...');

const slider = document.querySelectorAll('.slider')

// console.log(slider);

let counter = 0;

slider.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
        // slide.style.bottom = `${index * 100}%`;
    }
)

const goPrev = () => {
    if (counter > 0) {
        counter--;
        sideImage();
    }
}

const goNext = () => {
    if (counter < 12) {
        counter++;
        sideImage()
    }
}

const sideImage = () => {
    slider.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
            // slide.style.transform = `translateY(${counter * 100}%)`
        }
    )
}


let tId = setInterval(() => {
    goNext();
}, 2000);



// dark theme
let mode = document.getElementById('mode');
mode.addEventListener('click', () => {

    if (mode.classList.toggle('bi-brightness-low')) {
        mode.classList.remove('bi-moon');
        mode.classList.add('bi-brightness-low');
        document.body.style.background = 'black';
        document.body.style.color = 'white';
    }
    else {
        mode.classList.remove('bi-brightness-low');
        mode.classList.add('bi-moon');
        document.body.style.background = 'white';
        document.body.style.color = 'black';
    }
})
