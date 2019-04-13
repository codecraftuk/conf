(function ($) {
    "use strict";

    var venueAddress = "Royal College of Physicians and Surgeons, 232-242 St Vincent Street, Glasgow G2 5RJ", // Venue Address
        eventInfo = ["Royal College of Physicians and Surgeons, Glasgow, Scotland", "Date: Friday 20th September"]; // Event Info

    var fn = {

        // Launch Functions
        Launch: function () {
            
            fn.Stellar();
            fn.Navigation();
            //fn.Carousel();
            //fn.Slider();
            fn.Menu();
            //fn.Wow();
            fn.StickyMenu();
            //fn.RegisterForm();
            //fn.SubscribeForm();
            fn.Apps();
        },



        // Stellar
        Stellar: function() {
            if(!(navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|IEMobile/i))) {
                $.stellar({
                    horizontalScrolling: false,
                    positionProperty: 'transform',
                    hideDistantElements: false
                });
            }
        },



        // One Page Navigation
        Navigation: function () {
            $('#navigation').onePageNav({
                currentClass: 'active',
                scrollSpeed: 1000,
                scrollOffset: 75,
                scrollThreshold: 0.2,
                easing: 'swing'
            });
        },



        // Carousel
        Carousel: function () {
            var owl = $("#carousel");
             
            owl.owlCarousel({
                theme: "carousel",
                navigation: true,
                pagination: false,
                itemsCustom : [
                    [970, 1],
                    [768, 2],
                    [240, 1]
                ],
                slideSpeed: 400,
                autoPlay: 10000,
                mouseDrag: false
            });
        },



        // Slider
        Slider: function () {
            var owl = $("#slider");
             
            owl.owlCarousel({
                theme: "slider",
                navigation : true,
                pagination: false,
                singleItem: true,
                slideSpeed: 400,
                mouseDrag: false
            });
        },



        // Menu
        Menu: function () {
            var menuToggle = $("#menu-toggle");

            menuToggle.click(function () {
                if ($(this).parent().hasClass('expand')) {
                    $(this).parent().removeClass('expand')
                } else {
                    $(this).parent().addClass('expand');
                }
            });

        },



        // Wow
        Wow: function() {
            var wow = new WOW(
                {
                    boxClass: 'wow',
                    offset: 0,
                    mobile: false
                }
            );
            wow.init();
        },



        // Sticky Menu
        StickyMenu: function () {
            var nav = $('#navigation-wrap'), 
                navOffset;

            function reCalc () {
                navOffset = nav.offset().top;
            };

            reCalc();
            $(window).resize(reCalc).scroll(function () {
                var winScroll = $(this).scrollTop();

                if (winScroll > navOffset) {
                    nav.addClass('sticky');
                } else {
                    nav.removeClass('sticky');
                }
            });
        },



        // Registration Form
        RegisterForm: function () {
            $("#register-form").submit(function (e) {
                e.preventDefault();
                var name = $("#name").val(),
                    email = $("#email").val(),
                    telephone = $("#telephone").val(),
                    ticket = $("#ticket").val(),
                    dataString = 'name=' + name + '&email=' + email + '&telephone=' + telephone + '&ticket=' + ticket;
                function isValidEmail(emailAddress) {
                    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                    return pattern.test(emailAddress);
                }

                if (isValidEmail(email) && (name.length > 1)) {
                    $.ajax({
                        type: "POST",
                        url: "php/process.php",
                        data: dataString,
                        success: function () {
                            $('#register-form .button').addClass('success');
                        }
                    });
                } else {
                    if (!isValidEmail(email)) {
                        $('input#email').addClass('not-valid');
                    } else {
                        $('input#email').removeClass('not-valid');
                    }
                    if (name.length === 0) {
                        $('input#name').addClass('not-valid');
                    } else {
                        $('input#name').removeClass('not-valid');
                    }
                }
                return false;
            });
        },



        // Subscribe Form
        SubscribeForm: function () {
            $("#subscribe-form").submit(function (e) {
                e.preventDefault();
                var smail = $("#smail").val(),
                    sname = $("#sname").val(),
                    dataString = '&smail=' + smail + '&sname=' + sname;
                function isValidEmail(emailAddress) {
                    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                    return pattern.test(emailAddress);
                }

                if (isValidEmail(smail)) {
                    $.ajax({
                        type: "POST",
                        url: "php/process.php",
                        data: dataString,
                        success: function () {
                            $('#subscribe-form .button').addClass('success');
                        }
                    });
                } else {
                    $('input#subscriber').addClass('not-valid');
                }
                return false;
            });
        },




        // Apps
        Apps: function () {
            // Fancy Select
            $('select').fancySelect();
            
            // Accordion
            $('.accordion').accordion();
            
            // Placeholders
            //$('input, textarea').placeholder();
            
            // Speakers
            $(function () {
                var speaker = $(".speaker");
                speaker.hover( function () {
                    $(this).toggleClass("active");
                });
            });
        }

    };

    $(document).ready(function () {
        fn.Launch();
    });

})(jQuery);