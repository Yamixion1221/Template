(function ($) {
	"use strict"

	// preloader
	const preloader = document.querySelector('#preloader');
	if (preloader) {
		window.addEventListener('load', () => {
			preloader.remove();
		});
	}



	// Fixed header
	$(window).on('scroll', function () {

		// fixedHeader on scroll
		function fixedHeader() {
			var headerTopBar = $('.top-bar').outerHeight();
			var headerOneTopSpace = $('.header-one .logo-area').outerHeight();

			var headerOneELement = $('.header-one .site-navigation');
			var headerTwoELement = $('.header-two .site-navigation');

			if ($(window).scrollTop() > headerTopBar + headerOneTopSpace) {
				$(headerOneELement).addClass('navbar-fixed');
				// $('.header-one').css('margin-bottom', headerOneELement.outerHeight());
			} else {
				$(headerOneELement).removeClass('navbar-fixed');
				// $('.header-one').css('margin-bottom', 0);
			}
			if ($(window).scrollTop() > headerTopBar) {
				$(headerTwoELement).addClass('navbar-fixed');
				// $('.header-two').css('margin-bottom', headerTwoELement.outerHeight());
			} else {
				$(headerTwoELement).removeClass('navbar-fixed');
				// $('.header-two').css('margin-bottom', 0);
			}
		}
		fixedHeader();


		// scroll to top btn show/hide
		function scrollTopBtn() {
			var scrollToTop = $('#back-to-top'),
				scroll = $(window).scrollTop();
			if (scroll >= 350) {
				scrollToTop.fadeIn();
			} else {
				scrollToTop.fadeOut();
			}
		}
		scrollTopBtn();
	});
	// back to top
	function backToTop() {
		$('#back-to-top').on('click', function () {
			$('#back-to-top').tooltip('hide');
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	}
	backToTop();


	$(document).ready(function () {

		// navSearch show/hide
		function navSearch() {
			$('.nav-search').on('click', function () {
				$('.search-block').fadeIn(350);
			});
			$('.search-close').on('click', function () {
				$('.search-block').fadeOut(350);
			});
		}
		navSearch();

		// navbarDropdown
		function navbarDropdown() {
			if ($(window).width() < 992) {
				$('.site-navigation .dropdown-toggle').on('click', function () {
					$(this).siblings('.dropdown-menu').animate({
						height: 'toggle'
					}, 300);
				});

				var navbarHeight = $('.site-navigation').outerHeight();
				$('.site-navigation .navbar-collapse').css('max-height', 'calc(100vh - ' + navbarHeight + 'px)');
			}
		}
		navbarDropdown();


		// modal 
		// >>>>>> Show modal1
		$('.js-show-modal1').on('click', function (e) {
			e.preventDefault();
			$('.js-modal1').addClass('show-modal1');
		});

		$('.js-hide-modal1').on('click', function () {
			$('.js-modal1').removeClass('show-modal1');
		});

		$('.js-addwish-b2').on('click', function (e) {
			e.preventDefault();
		});

		$('.js-addwish-b2').each(function () {
			var nameProduct = $(this).parent().parent().find('.js-name-b2').html();
			$(this).on('click', function () {
				swal(nameProduct, "is added to wishlist !", "success");

				$(this).addClass('js-addedwish-b2');
				$(this).off('click');
			});
		});

		$('.js-addwish-detail').each(function () {
			var nameProduct = $(this).parent().parent().parent().find('.js-name-detail').html();

			$(this).on('click', function () {
				swal(nameProduct, "is added to wishlist !", "success");

				$(this).addClass('js-addedwish-detail');
				$(this).off('click');
			});
		});



		// >>>>>>>>>>>> Show / hide modal search >>>>>>>>>>>>>
		$('.js-show-modal-search').on('click', function () {
			$('.modal-search-header').addClass('show-modal-search');
			$(this).css('opacity', '0');
		});

		$('.js-hide-modal-search').on('click', function () {
			$('.modal-search-header').removeClass('show-modal-search');
			$('.js-show-modal-search').css('opacity', '1');
		});

		$('.container-search-header').on('click', function (e) {
			e.stopPropagation();
		});


		// banner-carousel
		function bannerCarouselOne() {
			$('.banner-carousel-1').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				fade: true,
				pauseOnHover: false,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
		}
		bannerCarouselOne();


		// banner Carousel Two
		function bannerCarouselTwo() {
			$('.banner-carousel-2').slick({
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				pauseOnHover: false,
				speed: 6000,
				arrows: false,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',

			});
		}
		bannerCarouselTwo();


		// pageSlider
		function pageSlider() {
			$('.page-slider').slick({
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
		}
		pageSlider();


		// anime carousel
		function animeCarousel() {
			$('.anime-slide').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 4,
				slidesToScroll: 2,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
				responsive: [{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		}
		animeCarousel();



	});

	// magnificPopup
	$(function () {
		$('.iframe-link').magnificPopup({
			type: 'iframe'
		});
	});


	// parallax
	$('.parallax-window').parallax();
	$('.parallax-window2').parallax();

	// acmeticker active code
	jQuery(document).ready(function ($) {
		$('.my-news-ticker').AcmeTicker({
			type: 'marquee',
			/*horizontal/horizontal/Marquee/type*/
			direction: 'left',
			/*up/down/left/right*/
			speed: 0.09,
			/*true/false/number*/
			/*For vertical/horizontal 600*/
			/*For marquee 0.05*/
			marquee: 0.05,
			/*For typewriter 50*/
			controls: {
				toggle: $('.acme-news-ticker-pause'),
				/*Can be used for horizontal/horizontal/typewriter*/
				/*not work for marquee*/
			}
		});
	})







})(jQuery);