// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// import Swiper JS
import Swiper, { Navigation, Scrollbar, Autoplay, Thumbs } from 'swiper';
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

// ...
// GALLERY SLIDER
// ...
var gallerySliderEl$ = document.getElementById('gallery');
var gallerySliderChildsEl$ = document.getElementById('gallery-childs');

var galleryChildsSlider = new Swiper(gallerySliderChildsEl$, {
	modules: [Autoplay],
	slidesPerView: 4,
	spaceBetween: 10,
	loop: true,
	freeMode: true,
	watchSlidesProgress: true,
	autoplay: {
		delay: 2000,
	},
});

var gallerySlider = new Swiper(gallerySliderEl$, {
	modules: [Autoplay, Thumbs],
	spaceBetween: 0,
	loop: true,
	autoplay: {
		delay: 2000,
	},
	thumbs: {
        swiper: galleryChildsSlider,
    },
});