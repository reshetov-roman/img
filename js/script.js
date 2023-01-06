const swiperSlider1 = new Swiper(".avatar-mySwiper1", {
    loop: false,
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 20,
    resistanceRatio : 0,
    navigation: {
      nextEl: ".swiper-button-next-sl0",
      prevEl: ".swiper-button-prev-sl1",
    },
    breakpoints: {
      320: {
        slidesPerView: 2.2,
        spaceBetween: 20,
        resistanceRatio: 0.85
    },
      480: {
          slidesPerView: 2.2,
          spaceBetween: 20,
          resistanceRatio: 0.85
      },
      600: {
        spaceBetween: 20,
        resistanceRatio: 0.85
    },
      768: {
          slidesPerView: 3,
          spaceBetween: 20,
          resistanceRatio: 0.85
      },
      992: {
          slidesPerView: 4,
          spaceBetween: 20,
          resistanceRatio: 0.85
      },
      1600: {
          slidesPerView: 4,
          spaceBetween: 20,
          resistanceRatio : 0
      }
  },
  keyboard: {
      enabled: true,
   }
  });

  const swiperSlider2 = new Swiper(".avatar-mySwiper2", {
    loop: false,
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 20,
    resistanceRatio : 0,
    navigation: {
      nextEl: ".swiper-button-next-ls0",
      prevEl: ".swiper-button-prev-ls1",
    },
    breakpoints: {
      320: {
        slidesPerView: 2.2,
        spaceBetween: 20,
        resistanceRatio: 0.85
    },
      480: {
          slidesPerView: 2.2,
          spaceBetween: 20,
          resistanceRatio: 0.85
      },
      600: {
        spaceBetween: 20,
        resistanceRatio: 0.85
    },
      768: {
          slidesPerView: 3,
          spaceBetween: 20,
          resistanceRatio: 0.85
      },
      992: {
          slidesPerView: 4,
          spaceBetween: 20,
          resistanceRatio: 0.85
      },
      1600: {
          slidesPerView: 4,
          spaceBetween: 20,
          resistanceRatio : 0
      }
  },
  keyboard: {
      enabled: true,
   }
  });


    $(".avatar-wrapper-top__arrow[href^='#']").on("click", function(e){
      e.preventDefault();
      var anchor = $(this).attr('href');
      $('html, body').stop().animate({
          scrollTop: $(anchor).offset().top - 170
      }, 800);
  });


  const jellyfishTransalate = document.querySelectorAll('.jellyfish-transition');

  if(jellyfishTransalate) {
    window.addEventListener('mousemove', e => {
    
      let mouseX = e.clientX;
      let mouseY = e.clientY;
  
      jellyfishTransalate.forEach(elm => {
  
        let speed = elm.dataset.speed;
  
        elm.style.transform = `translate(${mouseX / 10 * speed}%,${mouseY / 5 * speed}%)`;
        elm.style.transition = "all .4s"
      });
  });
  }


  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset,
          elmArrow = document.querySelector('.avatar-wrapper-top__arrow');
    if(scrollY > 100) {
      elmArrow.style.opacity = 0;
      elmArrow.style.top = '28%';
      elmArrow.style.zIndex = -1;
    } else {
      elmArrow.style.opacity = 1;
      elmArrow.style.top = '31%';
      elmArrow.style.zIndex = 6;
    }
  });


function onYouTubeIframeAPIReady() {
  const swiper = document.getElementById('video-swiper'),
        slides = swiper.querySelectorAll('.swiper-slide-video'),
        players = [];

  
  for (let i = 0; i < slides.length; i++) {
    let element = slides[i].querySelectorAll('.yt-player')[0];
    
      const id = element.getAttribute('data-id'),
            widthFrame = '100%',
            heightFrame = '100%';
      const player = new YT.Player(element, {
        width: widthFrame,
        height: heightFrame,
        videoId: id,
        playerVars: {
          autoplay: false,
          rel: 0,
          frameborder: 0,
          modestbranding: true,
          controls: 1,
          playsinline: 1
        },
        // events: {
        //   'onReady': onPlayerReady,
        //   'onStateChange': onPlayerStateChange
        // }
      });
      players.push(player);
    
    
    
    const customSliderVideo = new Swiper('.swiper-container-video', {
      observer: true,
      // effect: 'slide',
      allowTouchMove: false,
      spaceBetween: 30,
      slidesPerView: 1,
      centeredSlides: true,
      loop: false,
      speed: 700,
      initialSlide: 2,
      navigation: {
        nextEl: '.swiper-button-next-f1',
        prevEl: '.swiper-button-prev-f0',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
      320: {
        // slidesPerView: 1,
        spaceBetween: -20,
        // resistanceRatio: 0.85
    },
    670: {
      // slidesPerView: 1,
      spaceBetween: -35,
      // resistanceRatio: 0.85
    },
    992: {
      // slidesPerView: 1,
      spaceBetween: -100,
      // resistanceRatio: 0.85
    },
    1600: {
      // slidesPerView: 1,
      spaceBetween: 30,
      // resistanceRatio: 0.85
    }
    }
    });
  
  
    customSliderVideo.on('slideChange',  () => {


      // let allIndex = document.querySelectorAll('.avatar-video-slider .swiper-slide-active');

      // allIndex.forEach((elm, index) => {
      //   if(elm.querySelector('iframe')) {
      //     console.log('435');
      //     players[customSliderVideo.realIndex].playVideo();
      //     players[customSliderVideo.previousIndex -0].pauseVideo();
      //   }
      // });
      
      // if(!allIndex.querySelector('img')) {
      //   console.log('No IMG');
      //   console.log(customSliderVideo.activeIndex);
      // } else if (allIndex.querySelector('iframe')) {
      //   console.log('YES IFRAME');
      // }

      // if(allIndex.getElementsByTagName('iframe')) {
      //   console.log('no');
      //     console.log(customSliderVideo.realIndex);
      //     players[customSliderVideo.realIndex].playVideo();
      //     players[customSliderVideo.previousIndex -0].pauseVideo();
      // }


        // e.slides.forEach((elm, index) => {
        //   console.log(elm, index);
        // });


      // let utubeLink =  document.querySelectorAll('iframe');

      // let av = document.querySelectorAll('.avatar-video-slider .swiper-slide');

      // av.forEach(itm => {
      //   if(!itm.querySelector('img')) {
      //     players[customSliderVideo.realIndex].playVideo();
      //     players[customSliderVideo.previousIndex -0].pauseVideo();
      //   }
      // })




      // console.log(utubeLink[customSliderVideo.realIndex]);


    //  setTimeout(() => {
    //     let utubeLink =  document.querySelectorAll('iframe');
    //     console.log(utubeLink[customSliderVideo.realIndex]);
    //   }, 1000);
    //     let allIndex = document.querySelector('.wrap .swiper-slide-active');
    //     e.slides.forEach((elm, index) => {
    //       console.log(elm, index);
    //     });
    


  
    });



    }

   
  
}


const swiperFideDesktop1 = new Swiper('.swiper-container-fide1', {
  loop: false,
  effect: 'fade',
  speed: 0,
  fadeEffect: {
    crossFade: true
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  navigation: {
      nextEl: '.swiper-button-next-fd1',
      prevEl: '.swiper-button-prev-fd2'
  },
});


const swiperFide1Mobile = new Swiper('.swiper-container-fide1-mobile', {
  loop: false,
  slidesPerView: 1.2,
  speed: 500,
  spaceBetween: 0,
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  breakpoints: {
    320: {
      spaceBetween: 20,
      resistanceRatio: 0.85
  },
}
});

const swiperFide2Mobile = new Swiper('.swiper-container-fide2-mobile', {
  loop: false,
  slidesPerView: 1.2,
  speed: 500,
  spaceBetween: 0,
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  breakpoints: {
    320: {
      spaceBetween: 20,
      resistanceRatio: 0.85
  },
}
});

const swiperFideDesktop2 = new Swiper('.swiper-container-fide2', {
  loop: false,
  effect: 'fade',
  speed: 0,
  fadeEffect: {
    crossFade: true
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  navigation: {
      nextEl: '.swiper-button-next-fd3',
      prevEl: '.swiper-button-prev-fd4'
  },
});








