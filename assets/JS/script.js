//script code for main slider
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3, // Changed from 1 to 3 for mobile
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loopedSlides: 6,

  on: {
    init: function () {
      this.update();
    },
    resize: function () {
      this.update();
    }
  },

  breakpoints: {
  320: {
    slidesPerView: 1.2,
    spaceBetween: 12,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  }
}

});


function revealOnScroll() {
  const target = document.querySelector('.cell-1');
  const rect = target.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    target.classList.add('in-view');
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // in case already in view


function revealCategoryImage() {
  const target = document.querySelector('.girl-photo .imgEff'); // right-side image container
  const rect = target.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    target.classList.add('in-view');
  }
}

window.addEventListener('scroll', revealCategoryImage);
window.addEventListener('load', revealCategoryImage); // in case it's already in view
//script code for category-1
const categorySwiper = new Swiper('.swiper-category', {
    slidesPerView: 1, // default for mobile
    spaceBetween: 16,
    loop: true,
    
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next-category',
      prevEl: '.swiper-button-prev-category'
    },
    pagination: {
      el: '.swiper-pagination-category',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2, // for tablets and up
      }
    }
});
//script code for category-2
const categorySwiper2 = new Swiper(".swiper-category2", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next-category2",
        prevEl: ".swiper-button-prev-category2"
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 4
        }
    }
});
