$(() => {

    const btnUp = $('.btn__up')

    $('.autoplay').slick({
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplaySpeed: 2000,
        pauseOnFocus: false,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    });

    $('.burger').on('click', function () {
        $('.burger-menu').slideToggle(500)
        $(this).toggleClass('burger-close')
    })

    $(document).on('scroll', function () {
        $(this).scrollTop() > 50 ? btnUp.show(300) : btnUp.hide(300)
    })

    btnUp.on('click', () => $('html').animate({ scrollTop: 0 }, 500 ))

})