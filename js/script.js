$(function () {


   //-- Плавный скрол по странице ------------------------------------------------------------------------------------------------------------------------------------------------------
   $("a.scrollto").click(function () {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
         scrollTop: destination
      }, 800);
      return false;
   });
   //-- /Плавный скрол по странице ------------------------------------------------------------------------------------------------------------------------------------------------------


   //-- Плавный скрол по странице ------------------------------------------------------------------------------------------------------------------------------------------------------
   var btn = $('.scroll-to-top');
   $(window).scroll(function () {
      if ($(window).scrollTop() > 630) {
         btn.addClass('show');
      } else {
         btn.removeClass('show');
      }
   });
   btn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '300');
   });
   //-- /Плавный скрол по странице ------------------------------------------------------------------------------------------------------------------------------------------------------



   //-- Slider-Swiper ------------------------------------------------------------------------------------------------------------------------------------------------------
   new Swiper('.image-slider', {
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev'
      },

      pagination: {
         el: '.swiper-pagination',
         clickable: true,
         dynamicBullets: false,
      },

      keyboard: {
         enebled: true,
         onlyInVieport: true,
         pageUpDown: true,
      },


      autoHeight: true,

      slidesPerView: 4.5,

      // slidesPerView: 'auto',

      watchOverflow: true,

      spaceBetween: 50,

      centeredSlides: true,

      loop: true,

      // loopedSlides: ,

      preloadedImages: false,

      simulateTouch: true,

      touchRatio: 1,

      touchAngle: 45,

      grabCursor: true,

      lazy: {
         loadOnTransitionStart: false,
         loadPrevNext: false,
      },

      watchSlidesProgress: true,
      watchSlidesVisibility: true,


      // autoplay: {

      //    delay: 3000,
      //    stopOnLastSlide: false,
      //    disableOnInteraction: true,

      // },

      // speed: 1000,


      // адаптив =========================
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 5,

         },

         400: {
            slidesPerView: 1.2,
            spaceBetween: 5,
         },

         480: {
            slidesPerView: 1.8,
            spaceBetween: 5,

         },

         680: {
            slidesPerView: 2,
            spaceBetween: 8,
         },

         768: {
            slidesPerView: 2.8,
            spaceBetween: 12,
         },

         900: {
            slidesPerView: 3,
            spaceBetween: 15,
         },

         970: {
            slidesPerView: 3.2,
            spaceBetween: 15,
         },

         1024: {
            slidesPerView: 3.5,
            spaceBetween: 15,
         },

         1200: {
            slidesPerView: 4,
            spaceBetween: 20,
         },

         1440: {
            slidesPerView: 4.5,
            spaceBetween: 20,
         },

         1600: {
            slidesPerView: 5,
            spaceBetween: 20,
         },

         1920: {
            slidesPerView: 5.5,
            spaceBetween: 20,
         }
      },
      // /адаптив =========================







   });
   //-- Slider-Swiper ------------------------------------------------------------------------------------------------------------------------------------------------------








//--------------------------------------------------------------------------------------------------------------------------------------------------------

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};
//--------------------------------------------------------------------------------------------------------------------------------------------------------





// Меню бургер ----------------------------------------------------------------------------------------------------------------------------------------------------

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuBodyBurger = document.querySelector('.menu__body_burger');

if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
      menuBodyBurger.classList.toggle('_active');
   });
}


const menuLinks = document.querySelectorAll('.menu__link_left, .menu__link_burger');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });
   function onMenuLinkClick(e) {

      if (iconMenu.classList.contains('_active')) {
         document.body.classList.remove('_lock');
         iconMenu.classList.remove('_active');
         menuBody.classList.remove('_active');
         menuBodyBurger.classList.toggle('_active');
      }

   }
}

// /Меню бургер ----------------------------------------------------------------------------------------------------------------------------------------------------





// SPOLLERS --------------------------------------------------------------------------------------------------------------------------------------

"use strict"

// SPOLLERS
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {


   // Получение слойлеров с медиа запросами
   const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
      return item.dataset.spollers.split(",")[0];
   });

   // Инициализация слойлеров с медиа запросами
   if (spollersMedia.length > 0) {
      const breakpointsArray = [];
      spollersMedia.forEach(item => {
         const params = item.dataset.spollers;
         const breakpoint = {};
         const paramsArray = params.split(",");
         breakpoint.value = paramsArray[0];
         breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
         breakpoint.item = item;
         breakpointsArray.push(breakpoint);
      });

      // Получаем уникальные брейкпоинты
      let mediaQueries = breakpointsArray.map(function (item) {
         return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
      });
      mediaQueries = mediaQueries.filter(function (item, index, self) {
         return self.indexOf(item) === index;
      });

      // Работаем с каждым брейкпоинтом
      mediaQueries.forEach(breakpoint => {
         const paramsArray = breakpoint.split(",");
         const mediaBreakpoint = paramsArray[1];
         const mediaType = paramsArray[2];
         const matchMedia = window.matchMedia(paramsArray[0]);

         // Объекты с нужными условиями
         const spollersArray = breakpointsArray.filter(function (item) {
            if (item.value === mediaBreakpoint && item.type === mediaType) {
               return true;
            }
         });
         // Событие
         matchMedia.addListener(function () {
            initSpollers(spollersArray, matchMedia);
         });
         initSpollers(spollersArray, matchMedia);
      });
   }
   // Инициализация
   function initSpollers(spollersArray, matchMedia = false) {
      spollersArray.forEach(spollersBlock => {
         spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
         if (matchMedia.matches || !matchMedia) {
            spollersBlock.classList.add('_init');
            initSpollerBody(spollersBlock);
            spollersBlock.addEventListener("click", setSpollerAction);
         } else {
            spollersBlock.classList.remove('_init');
            initSpollerBody(spollersBlock, false);
            spollersBlock.removeEventListener("click", setSpollerAction);
         }
      });
   }
   // Работа с контентом
   function initSpollerBody(spollersBlock, hideSpollerBody = true) {
      const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
      if (spollerTitles.length > 0) {
         spollerTitles.forEach(spollerTitle => {
            if (hideSpollerBody) {
               spollerTitle.removeAttribute('tabindex');
               if (!spollerTitle.classList.contains('_active')) {
                  spollerTitle.nextElementSibling.hidden = true;
               }
            } else {
               spollerTitle.setAttribute('tabindex', '-1');
               spollerTitle.nextElementSibling.hidden = false;
            }
         });
      }
   }
   function setSpollerAction(e) {
      const el = e.target;
      if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
         const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
         const spollersBlock = spollerTitle.closest('[data-spollers]');
         const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
         if (!spollersBlock.querySelectorAll('._slide').length) {
            if (oneSpoller && !spollerTitle.classList.contains('_active')) {
               hideSpollersBody(spollersBlock);
            }
            spollerTitle.classList.toggle('_active');
            _slideToggle(spollerTitle.nextElementSibling, 500);
         }
         e.preventDefault();
      }
   }
   function hideSpollersBody(spollersBlock) {
      const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
      if (spollerActiveTitle) {
         spollerActiveTitle.classList.remove('_active');
         _slideUp(spollerActiveTitle.nextElementSibling, 500);
      }
   }
}
//========================================================================================================================================================
//SlideToggle
let _slideUp = (target, duration = 500) => {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = target.offsetHeight + 'px';
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(() => {
         target.hidden = true;
         target.style.removeProperty('height');
         target.style.removeProperty('padding-top');
         target.style.removeProperty('padding-bottom');
         target.style.removeProperty('margin-top');
         target.style.removeProperty('margin-bottom');
         target.style.removeProperty('overflow');
         target.style.removeProperty('transition-duration');
         target.style.removeProperty('transition-property');
         target.classList.remove('_slide');
      }, duration);
   }
}
let _slideDown = (target, duration = 500) => {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      if (target.hidden) {
         target.hidden = false;
      }
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + 'ms';
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout(() => {
         target.style.removeProperty('height');
         target.style.removeProperty('overflow');
         target.style.removeProperty('transition-duration');
         target.style.removeProperty('transition-property');
         target.classList.remove('_slide');
      }, duration);
   }
}
let _slideToggle = (target, duration = 500) => {
   if (target.hidden) {
      return _slideDown(target, duration);
   } else {
      return _slideUp(target, duration);
   }
}

//========================================================================================================================================================
/*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.
Например:
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/


});
// SPOLLERS --------------------------------------------------------------------------------------------------------------------------------------
