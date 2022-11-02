
(function () {
  "use strict";

  /**
   * 
   * TypeWriter Effect
   * 
   * **/
  const textSpan = document.querySelector(".message");
  const textAr = [" Future", " Powerful", " Guardians", " Confident"];
  const typingDelay = 100;
  const erasingDelay = 100;
  const nextTextelay = 1500;
  var Text_index = 0;
  var char_index = 0;

  function type() {
    if (char_index < textAr[Text_index].length) {
      textSpan.textContent += textAr[Text_index].charAt(char_index);
      char_index++;
      setTimeout(type, typingDelay);
    }
    else {
      setTimeout(erase, nextTextelay);
    }
  }
  function erase() {
    if (char_index > 0) {
      textSpan.textContent = textAr[Text_index].substring(0, char_index - 1);
      char_index--;
      setTimeout(erase, erasingDelay);

    }
    else {
      Text_index++;
      if (Text_index >= textAr.length)
        Text_index = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, nextTextelay + 250);
  });

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }
  /**
   * 
   * Slider for Alumni Section 
   * 
   */


  new Swiper('.alumni-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    })
  });


})()


function IsClicked(x) {
  x.classList.toggle('is-clicked');
}

/**
   * 
   * Slider for Events Section 
   * 
   */

 new Swiper('.events-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type:'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

/**
   * Events isotope and filter
   */
 window.addEventListener('load', () => {
  let eventContainer = select('.event-container');
  if (eventContainer) {
    let eventIsotope = new Isotope(eventContainer, {
      itemSelector: '.event-year'
    });

    let eventFilters = select('#events-flters li', true);

    on('click', '#events-flters li', function(e) {
      e.preventDefault();
      eventFilters.forEach(function(el) {
        el.classList.remove('filter-active');
      });
      this.classList.add('filter-active');

      eventIsotope.arrange({
        filter: this.getAttribute('data-filter')
      });
      eventIsotope.on('arrangeComplete', function() {
        AOS.refresh()
      });
    }, true);
  }

});