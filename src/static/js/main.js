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
var navbarEl$ = document.getElementById('navbar');
var navbarOffsetTop = navbarEl$.offsetTop;

window.onscroll = function() {
	if (window.pageYOffset > navbarOffsetTop) {
		navbarEl$.classList.add('sticky');
	}
	else {
		navbarEl$.classList.remove('sticky');
	}
}

// ...
// VACANCY SLIDER
// ...
var vacancySliderEl$ = document.getElementById('vacancy-slider');
var vacancySlider = new Swiper(vacancySliderEl$, {
	modules: [Navigation, Scrollbar],
	navigation: {
        nextEl: ".vacancy-swiper-button-next",
        prevEl: ".vacancy-swiper-button-prev",
    },
	scrollbar: {
        el: ".vacancy-swiper-scrollbar",
        hide: false,
    },
	spaceBetween: 1,
	slidesPerView: 4,
});

// ...
// TESTIMONY SLIDER
// ...
var testimonySliderEl$ = document.getElementById('testimony-slider');
var testimonySlider = new Swiper(testimonySliderEl$, {
	modules: [Navigation, Scrollbar],
	navigation: {
        nextEl: ".testimony-swiper-button-next",
        prevEl: ".testimony-swiper-button-prev",
    },
	spaceBetween: 20,
	slidesPerView: 2,
});