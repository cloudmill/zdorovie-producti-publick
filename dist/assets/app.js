(()=>{"use strict";var e,t={485:(e,t,a)=>{a(490);var o=a(638);o((function(){o(".select__select");o(".select__select").each((function(){var e=o(this),t=e.closest(".select-wrapper"),a=getComputedStyle(t[0]),n=o(this).data("select-placeholder");"static"===a.position&&t.css("position","relative"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:n,dropdownAutoWidth:!0}),e.on("select2:open",(function(e){t.css("z-index","100000");var a="scroll.select2";o(e.target).parents().off(a),o(window).off(a);var n=t.find(".select2-dropdown");n.hide();var i=setTimeout((function(){n.slideDown({duration:500}),clearTimeout(i)}),0)})),e.on("select2:select",(function(t){e.parents("[js-form-filter]").length&&e.parents("[js-form-filter]").submit()})),e.on("select2:closing",(function(a){a.preventDefault();var o=t.find(".select2-dropdown"),i=setTimeout((function(){t.css("z-index","");var a=t.find(".select2");a.addClass("closing"),a.removeClass("select2-container--open"),o.slideUp(500,(function(){var a=setTimeout((function(){e.select2("destroy"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:n,dropdownAutoWidth:!0}),e.removeClass("closing"),t.css("z-index",""),clearTimeout(a)}),300)})),clearTimeout(i)}),0)}))}))}));var n=a(904),i=a(407);document.addEventListener("DOMContentLoaded",(function(){if(window.screen.width>768)new n.Z(".main-news__swiper",{modules:[i.W_,i.tl,i.pt],speed:1e3,spaceBetween:20,slidesPerView:3,allowTouchMove:!1,navigation:{nextEl:".main-news__button_right",prevEl:".main-news__button_left"}});else new n.Z(".main-news__swiper",{modules:[i.W_,i.tl,i.pt],speed:1e3,spaceBetween:12,slidesPerView:"auto",allowTouchMove:!0})}));var r=a(638);document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementsByClassName("header");window.addEventListener("scroll",(function(){window.pageYOffset>15&&!e[0].classList.contains("header_scrolled")?e[0].classList.add("header_scrolled"):window.pageYOffset<=10&&e[0].classList.remove("header_scrolled")}))}));var s=function(){var e=document.getElementsByClassName("header");window.pageYOffset>15&&!e[0].classList.contains("header_scrolled")?e[0].classList.add("header_scrolled"):window.pageYOffset<=10&&e[0].classList.remove("header_scrolled"),document.querySelector(".top-section_main")&&r(".header-logo").addClass("disabled")},l=a(638);function c(){var e=document.querySelector(".overlay");document.querySelector(".body").classList.add("overlay-hidden"),e.classList.add("active")}function d(){var e=document.querySelector(".overlay");document.querySelector(".body").classList.add("overlay-hidden"),e.classList.add("active-header")}function u(){var e=document.querySelector(".overlay"),t=document.querySelector(".body"),a=document.querySelectorAll("[data-overlay-on]"),o=l("[data-popup-fade]");a.forEach((function(e){e.classList.remove("active")})),e.classList.remove("active"),t.classList.remove("overlay-hidden"),l(o).each((function(){l(this).fadeOut("slow",(function(){}))}))}function p(){var e=document.querySelector(".overlay"),t=document.querySelector(".body"),a=document.querySelectorAll("[data-overlay-on]"),o=l("[data-popup-fade]");a.forEach((function(e){e.classList.remove("active")})),e.classList.remove("active-header"),t.classList.remove("overlay-hidden"),l(o).each((function(){l(this).fadeOut("slow",(function(){}))}))}var f=a(638);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-popup]"),t=document.querySelectorAll("[data-popup-close]");e.forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset.popup,a=document.querySelector('[data-popup-wrapper="'.concat(t,'"]'));a.classList.contains("active")||(a.classList.add("active"),c())}))})),t.forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset.popupClose;document.querySelector('[data-popup-wrapper="'.concat(t,'"]')).classList.remove("active"),u(),p()}))}))}));var v=function(){var e=document.querySelector(".popup-video");if(e){var t=e.querySelector("iframe");if(t){var a=e.querySelector(".popup-video__video-frame").dataset.frameSrc;t.setAttribute("src",a)}}};document.addEventListener("DOMContentLoaded",(function(){if(window.screen.width>1024)new n.Z(".swiper-freezing",{modules:[i.W_,i.tl,i.pt],speed:1e3,spaceBetween:0,slidesPerView:1,allowTouchMove:!1,pagination:{el:".about-support__slider-pagination",type:"bullets",clickable:!0},loop:!0,navigation:{nextEl:".about-support__slider-right",prevEl:".about-support__slider-left"},autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},on:{init:function(){setTimeout((function(){var e=document.querySelector(".swiper-freezing");if(e){var t=e.querySelectorAll(".swiper-slide"),a=document.querySelector(".about-support__slider-btns");t.length<2&&a.classList.add("d-none")}}),0)}}});else new n.Z(".swiper-freezing",{modules:[i.W_,i.tl,i.pt],speed:1e3,spaceBetween:0,slidesPerView:1,allowTouchMove:!0,pagination:{el:".about-support__slider-pagination_mobile",type:"bullets",clickable:!0},loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0}});if(window.screen.width>1024)new n.Z(".swiper-workers",{modules:[i.W_,i.tl,i.pt],speed:1e3,spaceBetween:0,slidesPerView:1,allowTouchMove:!1,pagination:{el:".about-support__slider-pagination",type:"bullets",clickable:!0},loop:!0,navigation:{nextEl:".about-workers__slider-right",prevEl:".about-workers__slider-left"},autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},on:{init:function(){var e=document.querySelector(".work-hero__slider-btns");document.querySelector(".swiper-workers").querySelectorAll(".swiper-slide").length<2&&e.classList.add("d-none")}}});else new n.Z(".swiper-workers",{modules:[i.tl,i.pt],speed:1e3,spaceBetween:0,slidesPerView:1,allowTouchMove:!0,pagination:{el:".swiper-workers__pugination_mobile",type:"bullets",clickable:!0},loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0}});var e=!1;window.screen.width<1024&&(e=!0);var t=new n.Z(".history-thumb-swiper",{modules:[i.W_,i.tl],speed:1e3,spaceBetween:4,slidesPerView:"auto",allowTouchMove:!1,loop:!1,on:{init:function(){document.querySelectorAll(".about-history__years-item").forEach((function(e,a){e.addEventListener("click",(function(){t.slideTo(a)}))}))}}}),a=new n.Z(".history-text-swiper",{modules:[i.W_,i.tl],speed:1e3,spaceBetween:100,slidesPerView:1,allowTouchMove:!1,loop:!1,navigation:{nextEl:".about-history__buttons-right",prevEl:".about-history__buttons-left"},on:{slideChange:function(){var e=a.realIndex;if(t.activeIndex=e,t.updateSlidesClasses(),window.screen.width<1024){var o=a.activeIndex,n=document.querySelector(".history-text-swiper"),i=n.querySelectorAll(".swiper-slide")[o].querySelector(".about-history__text-item").offsetHeight;n.style.height="".concat(i,"px")}var r=document.querySelector(".about-history__buttons-left"),s=document.querySelector(".about-history__buttons-right"),l=a.activeIndex,c=document.querySelector(".history-text-swiper").querySelectorAll(".swiper-slide");0===l?r.classList.add("disabled"):r.classList.remove("disabled"),l===c.length-1?s.classList.add("disabled"):s.classList.remove("disabled")},init:function(){if(document.querySelectorAll(".about-history__years-item").forEach((function(e,t){e.addEventListener("click",(function(){a.slideTo(t)}))})),window.screen.width<1024){var e=document.querySelector(".history-text-swiper"),t=e.querySelectorAll(".swiper-slide")[0].querySelector(".about-history__text-item").offsetHeight;e.style.height="".concat(t,"px")}}}}),o=new n.Z(".history-img-swiper ",{modules:[i.W_,i.tl],speed:1e3,spaceBetween:0,slidesPerView:1,allowTouchMove:e,loop:!1,navigation:{nextEl:".about-history__buttons-right",prevEl:".about-history__buttons-left"},on:{init:function(){document.querySelectorAll(".about-history__years-item").forEach((function(e,t){e.addEventListener("click",(function(){o.slideTo(t)}))}))},slideChange:function(){if(window.screen.width<1024){var e=o.realIndex;t.activeIndex=e,a.activeIndex=e,a.slideTo(e),t.updateSlidesClasses(),a.updateSlidesClasses();var n=document.querySelector(".history-text-swiper"),i=n.querySelectorAll(".swiper-slide")[e].querySelector(".about-history__text-item").offsetHeight;n.style.height="".concat(i,"px")}}}});if(window.screen.width>1024)new n.Z(".partners-mails-swiper ",{modules:[i.W_],spaceBetween:28,slidesPerView:"auto",allowTouchMove:!1,loop:!0,navigation:{nextEl:".partners-mails__slider-right",prevEl:".partners-mails__slider-left"}});else new n.Z(".partners-mails-swiper ",{modules:[i.W_],spaceBetween:12,slidesPerView:"auto",allowTouchMove:!0,loop:!1});if(window.screen.width>1024){var r=new n.Z(".gallery-thumbs",{spaceBetween:10,slidesPerView:"auto",watchSlidesVisibility:!0,direction:"vertical",loop:!0});new n.Z(".swiper-gallery",{modules:[i.W_,i.tl,i.o3],speed:1e3,spaceBetween:0,slidesPerView:1,allowTouchMove:!1,loop:!0,navigation:{prevEl:".recipes-detail__gallery-left-btn",nextEl:".recipes-detail__gallery-right-btn"},thumbs:{swiper:r},on:{init:function(){var e=document.querySelector(".recipes-detail__gallery-btns");console.log(window);var t=document.querySelector(".swiper-gallery");setTimeout((function(){t.querySelectorAll(".swiper-slide").length<2&&e.classList.add("d-none")}),0)}}})}else{var s=new n.Z(".gallery-thumbs",{spaceBetween:12,slidesPerView:"auto",watchSlidesVisibility:!0,centeredSlides:!0,loop:!0,direction:"horizontal"});new n.Z(".swiper-gallery",{modules:[i.W_,i.tl,i.o3],speed:1e3,spaceBetween:0,slidesPerView:1,allowTouchMove:!0,loop:!0,thumbs:{swiper:s}})}if(window.screen.width>1024){var l=new n.Z(".gallery-thumbs-catalog",{spaceBetween:10,slidesPerView:"auto",watchSlidesVisibility:!0,direction:"vertical",loop:!0});new n.Z(".swiper-gallery-catalog",{modules:[i.W_,i.tl,i.o3],speed:1e3,spaceBetween:0,slidesPerView:1,allowTouchMove:!1,loop:!0,navigation:{prevEl:".recipes-detail__gallery-left-btn",nextEl:".recipes-detail__gallery-right-btn"},thumbs:{swiper:l},on:{init:function(){var e=document.querySelector(".recipes-detail__gallery-btns"),t=document.querySelector(".swiper-gallery-catalog");setTimeout((function(){t.querySelectorAll(".swiper-slide").length<2&&e.classList.add("d-none")}),0)}}})}else{var c=new n.Z(".gallery-thumbs-catalog",{spaceBetween:12,slidesPerView:"auto",watchSlidesVisibility:!0,centeredSlides:!0,loop:!0});new n.Z(".swiper-gallery-catalog",{modules:[i.W_,i.tl,i.o3],speed:1e3,spaceBetween:0,slidesPerView:1,allowTouchMove:!0,loop:!0,thumbs:{swiper:c}})}if(window.screen.width,window.screen.width>768)new n.Z(".recipes-detail__cards-swiper",{modules:[i.W_,i.tl,i.pt],speed:1e3,spaceBetween:20,slidesPerView:3,allowTouchMove:!1,loop:!0,navigation:{nextEl:".recipes-detail__cards-right",prevEl:".recipes-detail__cards-left"}});else new n.Z(".recipes-detail__cards-swiper",{modules:[i.W_,i.tl,i.pt],speed:1e3,spaceBetween:12,slidesPerView:"auto",allowTouchMove:!0,loop:!0})}));var m=a(948),w=a.n(m),h=a(638);document.addEventListener("DOMContentLoaded",(function(){var e=h("[data-header-menu]"),t=h(".header-production"),a=h("header"),o=h("[data-header-btn]");if(h(o).each((function(){h(this).on("click",(function(){var e,t=h(this).data("header-btn"),n=h('[data-header-component="'.concat(t,'"]'));n.hasClass("active")?(p(),h(this).removeClass("active"),n.removeClass("active"),s()):(e=h("[data-header-component]"),h(e).each((function(){h(this).removeClass("active")})),h(o).each((function(){h(this).removeClass("active")})),d(),h(this).addClass("active"),n.addClass("active"),a.addClass("header_scrolled"))}))})),window.screen.width<=1024){var n=h("[data-header-close]"),i=h("[data-mob-production]"),r=h("[data-production-close]");n.on("click",(function(){p(),h(e).removeClass("active")})),i.on("click",(function(){d(),t.addClass("active")})),r.on("click",(function(){t.removeClass("active")}))}var l=document.querySelectorAll("[data-input-search]"),c=document.querySelector('[data-input-search="header"]');document.querySelector('[data-header-btn="search"]').addEventListener("click",(function(){c.focus()})),l.forEach((function(e){e.addEventListener("input",(function(){e.focus&&(e.onkeydown=function(e){27==e.keyCode&&e.target.blur()}),""==!e.value?h(".input-wrapper-svg").addClass("active"):h(".input-wrapper-svg").removeClass("active")}))}))}));a(563);var y=a(419),g=a.n(y),b=a(638);document.addEventListener("DOMContentLoaded",(function(){b("form").parsley(),g()({mask:"+7 (999) 999-99-99",showMaskOnHover:!1}).mask("[data-mask-phone]"),window.Parsley.addValidator("phoneRequired",{validateString:function(e){return null!=e&&11===e.replace(/\D/g,"").length},messages:{ru:"Пожалуйста, введите полный номер телефона."}}),b("[data-mask-phone]").attr("data-parsley-phone-required",""),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Заполните поле",pattern:"Только кириллица",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Минимум %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Пароли не совпадают"}),Parsley.setLocale("ru");var e=b(".section-mailing__form");b('[data-popup-close="subscribe-complete"]');b(e).on("submit",(function(t){t.preventDefault(),console.log("send"),c(),b(".popup-subscribe").fadeIn("slow",(function(){})),setTimeout((function(){b(e).trigger("reset"),u()}),300)}));var t=b('[data-form="vacancies"]'),a=b(".popup-vacancies__send-btn");b(t).on("submit",(function(e){e.preventDefault(),b('[data-form-wrapper="vacancies"]').fadeOut("slow",(function(){u(),document.querySelector("[data-files-wrapper]").classList.remove("active"),document.querySelector("[data-form-file]").value=""})),b('[data-form-send="vacancies"]').fadeIn("slow",(function(){})),setTimeout((function(){b(t).trigger("reset")}),400)})),b(a).on("click",(function(){b('[data-form-send="vacancies"]').fadeOut("slow",(function(){})),b('[data-form-wrapper="vacancies"]').fadeIn("slow",(function(){}))}));var o=b('[data-form="mail-corp"]'),n=b(".popup-mail__send-btn");b(o).on("submit",(function(e){e.preventDefault(),b('[data-form-wrapper="mail-corp"]').fadeOut("slow",(function(){u()})),b('[data-form-send="mail-corp"]').fadeIn("slow",(function(){})),setTimeout((function(){b(o).trigger("reset")}),400)})),b(n).on("click",(function(){b('[data-form-send="mail-corp"]').fadeOut("slow",(function(){})),b('[data-form-wrapper="mail-corp"]').fadeIn("slow",(function(){}))}));var i=b('[data-form="partners"]'),r=b('[data-popup-wrapper="partners"]');b(i).on("submit",(function(e){e.preventDefault(),b(r).addClass("active"),c(),setTimeout((function(){b(i).trigger("reset"),u()}),400)}));var s=b('[data-form="catalog-detail"]'),l=b('[data-popup-wrapper="catalog-detail"]');b(s).on("submit",(function(e){e.preventDefault(),b(l).addClass("active"),c(),setTimeout((function(){b(s).trigger("reset"),u()}),400)}));var d=document.querySelectorAll("[data-input-parent]");function u(){d.forEach((function(e){e.classList.remove("filled")}))}}));var _=a(524);_.KR.bind("[data-fancybox]",{}),_.KR.bind('[data-fancybox="gallery"]',{Panzoom:{maxScale:4}});var S=a(809),q=a.n(S),E=function(){var e=document.querySelector(".banner");if(e){q().loadAnimation({container:e,renderer:"svg",autoplay:!0,loop:!1,path:"./assets/videos/zdor-preloader.json"}),setTimeout((function(){window.scrollTo(0,0)}),4500),setTimeout((function(){!function(){window.screen.width>1025?new n.Z(".main-swiper",{modules:[i.W_,i.tl,i.pt,i.VS],speed:1e3,spaceBetween:0,slidesPerView:1,allowTouchMove:!1,pagination:{el:".main-slider__pagination",type:"bullets",clickable:!0},loop:!0,navigation:{nextEl:".main-slider__button-right",prevEl:".main-slider__button-left"},autoplay:{delay:6e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},parallax:{enabled:!0}}):new n.Z(".main-swiper",{modules:[i.W_,i.tl,i.pt,i.VS],speed:1e3,spaceBetween:0,slidesPerView:1,allowTouchMove:!0,pagination:{el:".main-slider__pagination",type:"bullets",clickable:!0},loop:!0,navigation:{nextEl:".main-slider__button-right",prevEl:".main-slider__button-left"},autoplay:{delay:6e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},parallax:{enabled:!0}});new n.Z(".main-swiper-mobile",{modules:[i.W_,i.tl,i.pt,i.VS,i.lI],speed:1e3,spaceBetween:10,slidesPerView:"auto",allowTouchMove:!0,centeredSlides:!0,freeMode:!1,pagination:{el:".main-slider__pagination",type:"bullets",clickable:!0},loop:!0,effect:"coverflow",autoplay:{delay:6e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},parallax:{enabled:!0},coverflowEffect:{stretch:23,slideShadows:!1},effectCoverflow:{stretch:100},on:{}}),document.querySelectorAll("[data-bg-parallax]").forEach((function(e){var t=window.screen.width;t<1660&&t>1280?e.dataset.swiperParallax=1280:t>1024&&t<1440&&(e.dataset.swiperParallax=1140)}))}(),e.classList.add("complete")}),5500),setTimeout((function(){e.classList.add("d-none")}),7500)}},L=a(667),k=a(357),C=a(601),O=a.n(C);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=e[a];return o}L.p8.registerPlugin(k.i);O()();var T;(function(e){if(Array.isArray(e))return x(e)}(T=document.querySelectorAll(".animation-title[data-splitting][data-effect1]"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(T)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?x(e,t):void 0}}(T)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){var t=e.querySelectorAll(".char");L.p8.fromTo(t,{"will-change":"opacity, transform",opacity:0,scale:.6,rotationZ:function(){return L.p8.utils.random(-20,20)}},{ease:"power4",opacity:1,scale:1,rotation:0,stagger:.4,scrollTrigger:{trigger:e,start:"center+=20% bottom",end:"+=50%",scrub:!0}})}));var M,A=a(566),P=a.n(A),V=a(638),I=a(638);window.addEventListener("load",(function(){P().init({duration:1500}),window.addEventListener("scroll",(function e(){var t=setTimeout((function(){clearTimeout(t),P().refresh(),window.addEventListener("scroll",e)}),1e3);window.removeEventListener("scroll",e)}))})),function(){var e=document.querySelector(".overlay"),t=document.querySelector(".body");e.addEventListener("click",(function(){var a,o;a=document.querySelectorAll("[data-overlay-on]"),o=l("[data-popup-fade]"),a.forEach((function(e){e.classList.remove("active")})),e.classList.remove("active-header"),t.classList.remove("overlay-hidden"),l(o).each((function(){l(this).fadeOut("slow",(function(){}))})),s(),function(){var a=document.querySelectorAll("[data-overlay-on]"),o=l("[data-popup-fade]"),n=document.querySelector(".zp-video");a.forEach((function(e){e.classList.remove("active")})),e.classList.remove("active"),t.classList.remove("overlay-hidden"),v(),l(o).each((function(){l(this).fadeOut("slow",(function(){}))})),n&&n.pause()}()}))}(),(M=document.querySelectorAll(".accordion-container"))&&M.forEach((function(e){new(w())(e)})),document.addEventListener("DOMContentLoaded",(function(){var e,t,a,o,n,i,r;E(),(e=I("[data-city-link]"))&&I(e).each((function(){I(this).on("click",(function(e){if(e.preventDefault(),!I(this).hasClass("active")){var t=I(this).data("city-link");I("[data-city-link]").removeClass("active"),I(this).addClass("active"),I("[data-city-cards]").fadeOut("slow",(function(){I(this).removeClass("active")})),setTimeout((function(){I('[data-city-cards="'.concat(t,'"]')).fadeIn("slow",(function(){I(this).addClass("active")})),I('[data-city-cards="'.concat(t,'"]')).addClass("active")}),300)}}))})),(t=document.querySelectorAll("[data-frame-src]"))&&t.forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset.frameSrc,a=e.querySelector(".videos-content__item-plug"),o=e.querySelector(".videos-content__item-btn"),n=document.createElement("iframe");n.setAttribute("src",t),n.setAttribute("allowfullscreen",!0),n.setAttribute("allow",""),n.classList.add("youtube-player"),e.append(n),a.remove(),o.classList.add("hidden")}))})),a=V("[data-input-parent]"),V("[data-input-city]"),a.length>0&&a.each((function(){var e=V(this),t=e.find("[data-input]"),a=e.find(".input-wrapper-svg");t.length&&(t.on("input",(function(){""!==t.val().trim()?e.addClass("filled"):e.removeClass("filled")})),a.length&&a.on("click",(function(){t.val(""),t.trigger("onfocus"),e.removeClass("filled"),V(".input-wrapper-svg").removeClass("active")})))})),o=f("[data-button-fade]"),n=f("[data-fade-close]"),document.querySelector(".zp-video"),f(o).each((function(e){f(this).on("click",(function(){var e=f(this).data("button-fade");f('[data-popup-fade="'.concat(e,'"]')).fadeIn("slow",(function(){})),c()}))})),f(n).each((function(e){f(this).on("click",(function(){var e=f(this).data("fade-close");f('[data-popup-fade="'.concat(e,'"]')).fadeOut("slow",(function(){})),u(),"main-video"===e&&v(),"recipec-video"===e&&v()}))})),s(),document.querySelector(".contacts-card__map")&&ymaps.ready((function(){var e;i=new ymaps.Map("contacts-map",{center:[44.908619,40.586582],zoom:10},{searchControlProvider:"yandex#search"}),e=new ymaps.Placemark(i.getCenter(),{},{iconLayout:"default#image",iconImageHref:"./assets/images/contacts-map-placemark.png",iconImageSize:[40,40],iconImageOffset:[-10,-25]}),i.geoObjects.add(e)})),(r=document.querySelectorAll("[data-label-checkbox]"))&&r.forEach((function(e){e.addEventListener("click",(function(){var t=e.querySelector("input");t.checked?t.checked=!1:t.checked=!0}))}))}))}},a={};function o(e){var n=a[e];if(void 0!==n)return n.exports;var i=a[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,o.amdO={},e=[],o.O=(t,a,n,i)=>{if(!a){var r=1/0;for(d=0;d<e.length;d++){for(var[a,n,i]=e[d],s=!0,l=0;l<a.length;l++)(!1&i||r>=i)&&Object.keys(o.O).every((e=>o.O[e](a[l])))?a.splice(l--,1):(s=!1,i<r&&(r=i));if(s){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,n,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};o.O.j=t=>0===e[t];var t=(t,a)=>{var n,i,[r,s,l]=a,c=0;if(r.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var d=l(o)}for(t&&t(a);c<r.length;c++)i=r[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=o.O(void 0,[590],(()=>o(485)));n=o.O(n)})();