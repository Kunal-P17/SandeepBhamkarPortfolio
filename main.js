var typed = new Typed(".auto_type",{
    strings : ["Sandeep Bhamkar"],
    typeSpeed : 20,
    looped: false
})


let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel li');
    const totalItems = items.length;
    console.log(totalItems);

    currentIndex += direction;

    if (currentIndex >= totalItems) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    }

    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}