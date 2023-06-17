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
var vacancySlider = new Swiper('.vacancy-slider', {
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
	slidesPerView: 1,
	breakpoints: {
		480: {
			spaceBetween: 1,
			slidesPerView: 2,
		},
		767: {
			spaceBetween: 1,
			slidesPerView: 2,
		},
		980: {
			spaceBetween: 1,
			slidesPerView: 3,
		},
		1200: {
			spaceBetween: 1,
			slidesPerView: 4,
		}
	},
});

const tabEl = document.querySelector('a[data-bs-toggle="tab"]')
tabEl.addEventListener('shown.bs.tab', event => {
	event.target // newly activated tab
	event.relatedTarget // previous active tab
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
	spaceBetween: 0,
	slidesPerView: 1,
	breakpoints: {
		480: {
			spaceBetween: 0,
			slidesPerView: 1,
		},
		767: {
			spaceBetween: 10,
			slidesPerView: 2,
		},
		980: {
			spaceBetween: 15,
			slidesPerView: 2,
		},
		1200: {
			spaceBetween: 20,
			slidesPerView: 2,
		}
	},
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

// ...
// SUBSCRIPTION
// ...
var subscriptionEl$ = document.getElementById('subscribe');
var footerEl$ = document.getElementById('footer');
var main$ = document.getElementById('main');

window.addEventListener('scroll', (event) => {
	var subscriptionOffsetTop = subscriptionEl$.offsetTop;
	var subscriptionHeight = subscriptionEl$.offsetHeight;
	var footerOffsetTop = footerEl$.offsetTop;
	var pageYOffset = window.pageYOffset;

	if ((pageYOffset + 400) >= subscriptionOffsetTop && (footerOffsetTop - subscriptionHeight - 200) > pageYOffset) {
		main$.classList.add('highlight-subscription');
	}
	else {
		main$.classList.remove('highlight-subscription');
	}
});