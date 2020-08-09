$(function() {

    var header = $("#header"),                  /* мы загружаем страницу, и присаиваем headery ide */
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();   /* переменная равна текущему сколу страницы */

    /* fixed header */

    checkScroll(scrollOffset);                  /* передаем значение функции */

    $(window).on("scroll", function() {         /* будем обновлять текущее scrollffset на то которорое мы проскролили */
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);              /* вызываем функцию и передаем туда значение */
    });


    function checkScroll(scrollOffset) {         /* выдаем или не выдаем класс */

        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        }   else {
            header.removeClass("fixed");
        }
    }


    /* smoth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset    
        }, 500);
        
    }); 

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    /* Акардион */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');
        $this.toggleClass("active");

    });


    /* slider */

    $("[data-slider]").slick({

    infinite: true,    
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1

    });

});