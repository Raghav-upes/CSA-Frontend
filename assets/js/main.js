
(function() {
  "use strict";

/**
 * 
 * TypeWriter Effect
 * 
 * **/
 const textSpan=document.querySelector(".message");
 const textAr=[" Future"," Powerfull"," Guardians"," Confiedent"];
 const typingDelay=100;
 const erasingDelay=100;
 const nextTextelay=1500;
 var Text_index=0;
 var char_index=0;
 
 function type() {
     if(char_index<textAr[Text_index].length)
     {
         textSpan.textContent+=textAr[Text_index].charAt(char_index);
         char_index++;
         setTimeout(type,typingDelay);
     }
     else{
         setTimeout(erase,nextTextelay);
     }
 }
 function erase(){
     if(char_index>0)
     {
         
         textSpan.textContent=textAr[Text_index].substring(0,char_index-1);
         char_index--;
         setTimeout(erase,erasingDelay);
         
     }
     else{
         Text_index++;
         if(Text_index>=textAr.length)
         Text_index=0;
         setTimeout(type,typingDelay+1100);
     }
 }
 document.addEventListener("DOMContentLoaded",function(){
    setTimeout(type,nextTextelay+250);
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

  new Swiper('.alumni-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
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
      duration: 2000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

