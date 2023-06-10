setTimeout( () =>{
    loadingContainer.remove()
    countdownContainer.style.display = 'flex'
  }, 1000)
  
  setInterval(updateCountdown, 1000)
  
  
  /** SWIPER */
  var swiper = new Swiper("#hero", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });
  
  var swiper = new Swiper("#offer", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
      nextEL: ".swiper-button-next",
      prevEL: ".swiper-button-prev",
    },
    breakpoints: {
      680: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      860: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      960: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
  
  var swiper = new Swiper("#inspiration-img", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });