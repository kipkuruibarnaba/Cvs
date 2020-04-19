/*========================================
                 Preloader
  ========================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(750).fadeOut('slow');
});

/*========================================
                 Team 
  ========================================*/
$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 up
            0: {
                items: 1
            },
            //breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});

/*========================================
            Progress Bars
  ========================================*/
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        })
        /*alert("you reached to progress elements area!");          this.destroy(); */
    }, {
        offset: 'bottom-in-view'
    });
});

/*========================================
        Responsive Tabs
  ========================================*/
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/*========================================
            Portfolio
  ========================================*/
$(window).on('load', function () {
    //Initialize Isotope

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {
        // alert("you clicked filter button"); 
        //Get filter Value

        var filterValue = $(this).attr('data-filter');
        //alert("you Clicked" + filterValue);
        // filter portfolio Items 
        $("#isotope-container").isotope({
            filter: filterValue

        });
        //Get filter Value
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });

});

/*========================================
         Magnifier
  ========================================*/
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});
/*========================================
         Testimonials
  ========================================*/

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*========================================
         stats
  ========================================*/

$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});

/*========================================
         Clients
  ========================================*/

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 up
            0: {
                items: 2
            },
            //breakpoint from 480 up
            480: {
                items: 3
            },
            //breakpoint from 768 up
            768: {
                items: 6
            }
        }
    });
});

/*========================================
            Progress Bars
  ========================================*/

/*show and hide white navigation*/

$(function () {

    //show/hide nav on page load
    showHideNav();


    $(window).scroll(function () {

        //show/hide nav on window's scroll  
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {

            $("nav").addClass("white-nav-top");

            //show logo 1
            $(".navbar-brand img").attr("src", "img/Logos/logo1.PNG");
            //Show white nav
            //alert ("your scroll positio is greater than 50 pixzels , your scroll position = " + $(window).scrollTop());


            //show back to top button
            $("#back-to-top").fadeIn();

        } else {
            //Hide white nav
            // alert ("your scroll positio is less than 50 pixzels , your scroll position = " + $(window).scrollTop());
            $("nav").removeClass("white-nav-top");

            //show logo 2

            $(".navbar-brand img").attr("src", "img/Logos/logo2.PNG");

            //Hide back to top button
            $("#back-to-top").fadeOut();
        }

    }
});

// smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();
        //get section id like #about, #services, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});

/*========================================
            Mobile menu
  ========================================*/
$(function () {

    //Show mobile navigation
    $("#mobile-nav-open-btn").click(function () {

        // alert("You just clicked open button");
        //show mobile nav
        $("#mobile-nav").css("height", "100%");
    });

    //Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });
});

/*========================================
            Animation
  ========================================*/
//animate on scroll

$(function () {
     new WOW().init();   
});

//home animation on page load
$(window).on('load', function () {

        $("home-heading-1").addClass("animated      fadeInDown");
  
        $("home-heading-2").addClass("animated fadeInLeft ");    
    
});




















