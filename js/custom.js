$(document).ready(function () {

    $("#mainCarousel").owlCarousel({
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        rewind: true
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


    $('.popup-gallery').each(function () { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.owl-item:not(.cloned) a',
            type: 'image',
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function () {
                    // just a hack that adds mfp-anim class to markup 
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }
        });
    });

    $(window).scroll(function (e) {
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

        // if ($('a[href="#luxurious"]').hasClass('active')) {
        //     $('a[href="#luxurious"]').closest('.tabHead').css('border-bottom-color', '#5BB454')
        // }
        // else {
        //     $('a[href="#luxurious"]').closest('.tabHead').css('border-bottom-color', '#C4498A')
        // }
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
        var heading = $(this).attr('alt')
        var url = $(this).attr('src');
        $('#unitplanModal .unitPlanLarge').attr('src', url)
        $('#unitplanModal h4').text(heading)
    })

    if ($(window).width() < 992) {
        $('.navToggle, .mainNav li a').on('click', function () {
            $('.navToggle').toggleClass('collapsed');
            $('.mainNav').fadeToggle();
            $('body').toggleClass('o-hidden');
        })

        /////
        $(window).scroll(function () {
            let scrollStart = $('.amenitiesTabs').offset().top
            if ($(this).scrollTop() > scrollStart) {
                $('.sticky-enquire').fadeIn()
            }
            else {
                $('.sticky-enquire').fadeOut()
            }

        })
    }

    // console.log($('#luxurious').offset().top)
    // $(window).scroll(function () {

    //     var scrollPos = $(document).scrollTop();
    //     $('.mainNav li:not(.enquireBtn) a').each(function () {
    //         var currLink = $(this);
    //         var refElement = $(currLink.attr("href"));
    //         if (refElement.offset().top <= scrollPos && refElement.offset().top + refElement.height() > scrollPos) {
    //             $('.mainNav ul li').removeClass("active");
    //             currLink.parent('li').addClass("active");
    //         }
    //         else {
    //             currLink.parent('li').removeClass("active");
    //         }

    //     });

    // })



})