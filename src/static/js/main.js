// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// import Swiper JS
import Swiper, { Navigation, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// ...
// Navbar
// ...
var navbar$ = document.getElementById('navbar');
var navbarOffsetTop = navbar$.offsetTop;

window.onscroll = function() {
	if (window.pageYOffset > navbarOffsetTop) {
		navbar$.classList.add('sticky');
	}
	else {
		navbar$.classList.remove('sticky');
	}
}

// ...
// VACANCY SLIDER
// ...
var vacancySlider$ = document.getElementById('vacancy-slider');
var slider = new Swiper(vacancySlider$, {
	modules: [Navigation, Scrollbar],
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
	scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
	spaceBetween: 1,
	slidesPerView: 4,
});