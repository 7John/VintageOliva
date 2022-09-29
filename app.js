let l = console.log;

// navSwipe
let navSwipe = () => {
	document.addEventListener("touchstart", startHandler, false);
	document.addEventListener("touchmove", moveHandler, false);

	let x1 = null;
	let x2 = null;

	function startHandler(e) {
		const firstTouch = e.touches[0];
		x1 = firstTouch.clientX;
		y1= firstTouch.clientY;	
		console.log(x1, y1)
	}

	function moveHandler(e) {
		if (!x1 || !y1) {
			return false;
		}

		let _nav = document.querySelector('.nav');

		let x2 = e.touches[0].clientX;
		let y2 = e.touches[0].clientY;
		let xDiff = x2 - x1;
		let yDiff = y2 - y1;

		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			if (xDiff > 0) {
				_nav.classList.remove('nav-show');
			} else {
				_nav.classList.add('nav-show');
			}
		} 
	};
	x1 = null;
	y2 = null;
}

navSwipe();

// Swap grid elements on resolution 960px 
let _grid = document.querySelector(".grid");
let _grid5 = document.querySelector(".grid").children[4];
let _grid6 = document.querySelector(".grid").children[5];

let _item2__text = document.querySelector('.item2__text');
let _item3__text = document.querySelector('.item3__text');
let _item2 = document.querySelector('.item2');
let _item3 = document.querySelector('.item3');

let gridChange = () => {
	if (window.innerWidth <= 960) {

		// change paragraph height if they are not equal
		if (_item2__text.clientHeight > _item3__text.clientHeight) {
			_item3.classList.add("equal");
			_item2.classList.remove("equal");
		}
		if (_item3__text.clientHeight > _item2__text.clientHeight) {
			_item2.classList.add("equal");
			_item3.classList.remove("equal");
		}
	}
}
gridChange();


//...................	NAV
window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
		let _nav = document.querySelector('.nav');

		if (window.innerWidth >= 481) {
			if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
				_nav.classList.add('nav--min');
			} else if(document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
				_nav.classList.remove('nav--min');
			}
		}
	}
// NAV..................

// ...............FOOTER
var infoNY = () => {
	let _infoNY = document.querySelector('.info__mail');
	let elem = document.createElement("span");
	let elem01 = document.createElement("p");
	let text = "New York,  10035";
	let text01 = elem.innerHTML = "NY";

	elem01.innerHTML = "info@domain.com";
	elem01.classList.add('info__mail');

	if (window.innerWidth <= 960) {
		let n = `${text.slice(0,10)}${text01}${text.slice(10)}`;
		_infoNY.innerHTML = n;
		_infoNY.style.marginBottom = "3px";
		_infoNY.insertAdjacentElement("afterend", elem01);
	} else if(window.innerWidth != 960) {
		return;
	}
}

infoNY();
// FOOTER...............

// .........................SLIDER
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
  },
});

var sliderNoArrows = () => {
	let _next = document.querySelector('.swiper-button-next');
	let _prev = document.querySelector('.swiper-button-prev');

	if (window.innerWidth <= 480) {
		_next.style.display = "none";
		_prev.style.display = "none";
	}
}
sliderNoArrows();
// SLIDER.........................
