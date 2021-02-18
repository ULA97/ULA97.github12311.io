const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      closeMenu = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    console.log('No')
});


closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
    console.log('done')
});



const counters = document.querySelectorAll('.skill__ratings-counter'),
      lines = document.querySelectorAll('.skill__ratings-line span');

counters.forEach( (item, i) => {
    lines [i].style.width = item.innerHTML;
});





$(document).ready(function(){
    function validateForms(form) {
        $(form).validate({
          rules: {
            name: {
              required: true,
              minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            policy: {
                required: true,
            },
          },
          messages: {
            name: {
              required: "Пожалуйста, введите своё имя",
              minlength: jQuery.validator.format("Введите {0} символов")
            },
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            },
            policy: {
                required: "Обязательно необходимо согласие",
                policy: "Обязательно необходимо согласие"
              }
        }
    });
      };
      validateForms('#consultation-form');


      $('form').submit(function(e) {
        e.preventDefault();
        if (! $(this).valid()) {
            return;
            }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn('slow');
            console.log('Получилось')
            $('form').trigger('reset');
        });
        return false;
    });


    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modali__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    
    jQuery(function($){
      $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#consultation, #thanks, #order"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
          div.hide(); // скрываем его
          $(".overlay").fadeOut('slow');
        }
      });
    });




    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modali__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      });
    });
    


    $('.carousel__inner').slick({
      speed: 800,
      adaptiveHeight: false,
      arrows: false,
      variableWidth: true, 
      autoplay: true,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/slick/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/slick/right.svg"></button>',
      responsive: [
        {
          breakpoint: 1024,
            settings: {
              dots: false,
              mobilefirst: true
            }
        }
    ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item_back');





    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }

    });

    $("a[href^='#']").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
});

new WOW().init();

}); 