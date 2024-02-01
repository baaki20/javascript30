const images = document.querySelectorAll('.slide-in');

// the debounce function reduces the number of time the imageSlider()
// is called when a scroll is detected from the window
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}


function imageSlider() {
    images.forEach(image => {
        // halfway through the image
        const halfWay = (window.scrollY + window.innerHeight) - (image.height / 2);

        // bottom of image
        const bottom = (image.offsetTop + image.height);

        const isHalfWay = halfWay > image.offsetTop;
        const isNotPassedBottom = window.scrollY < bottom;

        if (isHalfWay && isNotPassedBottom) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(imageSlider));  