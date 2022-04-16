$(document).ready(function () {

    $("#mainCarousel").owlCarousel({
        items: 1,
        dots: true
    });

    $("#galleryCarousel1, #galleryCarousel2").owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: false,
        responsive: {
            // breakpoint from 0 up
            0: {
                stagePadding: 25,
                margin: 0,
                center: true

            },
            // breakpoint from 768 up
            992: {
                stagePadding: 300,
                margin: 30,
            }
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('header').addClass('light-bg');
        }
        else {
            $('header').removeClass('light-bg');
        }
    })

    $('.tabHead a ').on('click', function (e) {
        e.preventDefault();
        let target = $(this).attr('href')
        $(target).fadeIn().siblings().hide();
        $(this).addClass('active').siblings().removeClass('active')

        if ($('a[href="#luxurious"]').hasClass('active')) {
            $('a[href="#luxurious"]').closest('.tabHead').css('border-bottom-color', '#5BB454')
        }
        else {
            $('a[href="#luxurious"]').closest('.tabHead').css('border-bottom-color', '#C4498A')
        }
    })

    $('.mainNav a[href="#luxurious"], .mainNav a[href="#premium"]').on('click', function () {
        let target = $(this).attr('href')
        $(`.tabHead a[href="${target}"]`).trigger('click');
    })

    $('.mainNav li:not(.enquireBtn) a').on('click', function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        let scrollDis = $(target).offset().top - 180;
        $('html,body').animate({ scrollTop: scrollDis }, 500);

        $(this).parent('li').addClass('active').siblings().removeClass('active')
    })

    // modal
    $('[data-toggle="modal"]').on('click', function () {
        $('.modal').hide();
        let target = $(this).attr('data-target');
        $(`#${target}`).fadeIn();
        $('body').addClass('o-hidden');
    })
    $('.close-modal, .modalOverlay').on('click', function () {
        $(this).closest('.modal').fadeOut();
        $('body').removeClass('o-hidden');
    })

    $('.floorPlanTabContent img[data-toggle="modal"]').on('click', function () {
        var url = $(this).attr('src');
        $('#unitplanModal .unitPlanLarge').attr('src', url)
    })

    if ($(window).width() < 992) {
        $('.navToggle, .mainNav li a').on('click', function () {
            $('.navToggle').toggleClass('collapsed');
            $('.mainNav').fadeToggle();
            $('body').toggleClass('o-hidden');
        })

        /////
        $(window).scroll(function () {
            let scrollLast = $('#location').offset().top;
            if ($(this).scrollTop() > 800 && $(this).scrollTop() < scrollLast) {
                $('.sticky-enquire').fadeIn()
            }
            else {
                $('.sticky-enquire').fadeOut()
            }
        })
    }


})