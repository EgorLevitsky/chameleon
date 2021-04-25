jQuery(function(){
  $('.works__slider').slick({
    prevArrow: '<button class="slider-btn slider-left" type="button"><svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.878 -3.60357e-07L16 4L8 12L16 20L11.878 24L1.04907e-06 12L11.878 -3.60357e-07Z"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-right" type="button"><svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.122 24L0 20L8 12L0 4L4.122 0L16 12L4.122 24Z"/></svg></button>',
    infinite: false,
    slidesToShow: 3,
    appendArrows: $('.works__inner'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  });

  $('.reviews__slider').slick({
    prevArrow: '<button class="slider-btn slider-left" type="button"><img src="img/arrow-left.svg"></button>',
    nextArrow: '<button class="slider-btn slider-right" type="button"><img src="img/arrow-right.svg"></button>',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        }
      },
    ]
  });

  //  Modals
  function showModal(e) {
    e.preventDefault();
    let $this = $(this),
        modalId = $this.data('modal');
    $(modalId).addClass('active');
    setTimeout(function() {
      $('.modal').css({
        opacity: "1"
      })
      $('.modal__dialog').css({
        opacity: "1"
      })
    },300);
  }

  function closeModal() {
    $('.modal').css({
        opacity: "0"
      })
      $('.modal__dialog').css({
        opacity: "0"
      })
    setTimeout(function() {
      $('.modal').removeClass('active');
    },300);
  }

  $('[data-modal]').on('click', showModal);
  $('.modal__close').on('click', closeModal);

  
  // Reviews slider + big img
  let sliderImg =  $('.works__slider-link > img'),
      bigImg = $('.works__img-photo > img');

  sliderImg.on('click', function(e) {
    e.preventDefault();
    let currentImg = $(this).clone();
    $('.works__img-photo > img').remove();
    currentImg.appendTo('.works__img-photo');

  });
});
