!(function (a) {
    a(function () {
        // Initialize Materialize components
        M.AutoInit();

        // Initialize scrollspy
        a(".scrollspy").not("#contact").scrollSpy({ activeClass: "active" });

        // Click handlers
        a(".contact.navLink").click(function () {
            return a("html, body").animate({ scrollTop: a(document).height() - a(window).height() }, 200), !1;
        });

        a(".fixed-action-btn").click(function () {
            return a("html, body").animate({ scrollTop: 0 }, 250), !1;
        });

        // Viewport helper
        a.fn.isInViewport = function () {
            var o = a(this).offset().top,
                s = o + a(this).outerHeight(),
                t = a(window).scrollTop(),
                i = t + a(window).height();
            return s > t && o < i;
        };

        var o = a(".colored:first-child");

        // Scroll spy handler
        function handleScrollSpy() {
            var scrollPosition = a(window).scrollTop() + a(window).height();
            var docHeight = a(document).height();
            var bottomThreshold = 0.5;

            if (docHeight - scrollPosition <= bottomThreshold) {
                if (!a(".contact.navLink").hasClass("active")) {
                    a(".about.navLink, .portfolio.navLink, .skills.navLink").removeClass("active");
                    a(".contact.navLink").addClass("active");
                }
            }
            else if (a(".contact.navLink").hasClass("active")) {
                a(".contact.navLink").removeClass("active");
            }
        }

        a(window).on("scroll", handleScrollSpy);

        // Handle scroll and resize effects
        a(window).on("load resize scroll", function () {
            a(".about").hasClass("active")
                ? (a("nav").removeClass("whiteBackground boxShadow short"),
                    a(".navLink").removeClass("blackColor"),
                    a(".brand-logo").removeClass("animated fadeInUp"),
                    a(".fixed-action-btn").hasClass("fullyVisible") &&
                    (a(".fixed-action-btn").removeClass("maxOpacity"),
                        setTimeout(function () {
                            a(".fixed-action-btn").removeClass("fullyVisible");
                        }, 150)))
                : (a("nav").addClass("whiteBackground boxShadow short"),
                    a(".navLink").addClass("blackColor"),
                    a(".brand-logo").addClass("animated fadeInUp"),
                    a(".fixed-action-btn").hasClass("maxOpacity") || a(".fixed-action-btn").addClass("fullyVisible maxOpacity")),

                a(window).scrollTop() + a(window).height() <= a(document).height() / 2 &&
                ((a(".skills").hasClass("active")) && a(".skills").removeClass("active"),
                    a(".about").hasClass("active") && a(window).scrollTop() >= 235 && a(".about").removeClass("active"),
                    a(window).scrollTop() < 235 && !a(".about").hasClass("active") && a(".about").addClass("active"),
                    a(".about").hasClass("active") && a(".portfolio").hasClass("active") && a(".portfolio").removeClass("active"),
                    a(".about").hasClass("active") || a(".portfolio").hasClass("active") || a(".contact.navLink").hasClass("active") || a(".portfolio").addClass("active")),

                a(window).scrollTop() + a(window).height() >= a(document).height() / 2 &&
                (!a(".about").hasClass("active") && !a(".portfolio").hasClass("active") && !a(".contact.navLink").hasClass("active") && a(window).scrollTop() + a(window).height() >= a(document).height() / 2 && a(".skills").addClass("active"),
                    a(".portfolio").hasClass("active") && a(".skills").hasClass("active") && a(".portfolio").removeClass("active")),

                (a(".portfolio").hasClass("active") || a(window).scrollTop() >= a("#portfolio .separator").offset().top) && a("#portfolio .separator").addClass("animated expand"),
                (a(".skills").hasClass("active") || a(window).scrollTop() >= a("#skills .separator").offset().top) && a("#skills .separator").addClass("animated expand"),
                o.isInViewport() &&
                !o.hasClass("animated fadeIn") &&
                a(".colored").each(function (o, s) {
                    setTimeout(function () {
                        a(s).addClass("animated fadeIn");
                    }, 100 * o);
                });
        });

        // SLIDER INITIALIZATION
        function initializeSliders() {
            // Handle certificate sliders based on window width
            if (window.innerWidth > 768) {
                // Show all items and nav slider first
                a('.slider-for').children().show();
                a('.slider-nav').show();

                // Check if sliders are already initialized in mobile mode (without asNavFor)
                if (a('.slider-for').hasClass('slick-initialized') && !a('.slider-for').slick('slickGetOption', 'asNavFor')) {
                    // Destroy the mobile version first
                    a('.slider-for').slick('unslick');
                }

                // Initialize with desktop settings if not already properly initialized
                if (!a('.slider-for').hasClass('slick-initialized')) {
                    // Initialize main slider
                    a('.slider-for').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        fade: false,
                        autoplay: true,
                        autoplaySpeed: 5000,
                        asNavFor: '.slider-nav'
                    });

                    // Initialize navigation slider if not already initialized
                    if (!a('.slider-nav').hasClass('slick-initialized')) {
                        a('.slider-nav').slick({
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            asNavFor: '.slider-for',
                            dots: true,
                            centerMode: true,
                            focusOnSelect: true,
                            prevArrow: '<i class="fas fa-chevron-left"></i>',
                            nextArrow: '<i class="fas fa-chevron-right"></i>'
                        });
                    }
                }
            } else {
                // On mobile, handle sliders differently

                // Check if slider-for is initialized with desktop settings (with asNavFor)
                if (a('.slider-for').hasClass('slick-initialized') && a('.slider-for').slick('slickGetOption', 'asNavFor') === '.slider-nav') {
                    // Destroy both sliders if they're in desktop mode
                    a('.slider-for').slick('unslick');
                    if (a('.slider-nav').hasClass('slick-initialized')) {
                        a('.slider-nav').slick('unslick');
                    }
                }

                // Hide the nav slider
                a('.slider-nav').hide();

                // Show all slider-for items (undo any prior hiding)
                a('.slider-for').children().show();

                // Initialize slider-for with mobile-appropriate settings if not already initialized
                if (!a('.slider-for').hasClass('slick-initialized')) {
                    a('.slider-for').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 5000,
                        prevArrow: '<i class="fas fa-chevron-left"></i>',
                        nextArrow: '<i class="fas fa-chevron-right"></i>'
                    });
                }
            }
        }

        // Run on page load
        initializeSliders();

        // Re-run on window resize
        a(window).on('resize', function () {
            initializeSliders();
        });

        // Other initializations
        a(".certificate img").magnify({ src: "https://i.postimg.cc/d0ngtc3j/lqi5ogcj-1.png" });

        var s = a(".gallery");
        s.masonry({ itemSelector: ".gallery-filter", columnWidth: ".gallery-filter", transitionDuration: 0 });

        s.imagesLoaded(function () {
            s.masonry("layout");
        });

        a("a.filter").click(function (a) {
            a.preventDefault();
        });

        var t = function (a) {
            a.find(".carousel").carousel({ dist: 0, padding: 10 });
        };

        a(".gallery-expand").galleryExpand({ onShow: t });
        a(".blog .gallery-expand").galleryExpand({ onShow: t, fillScreen: !0, inDuration: 500 });
    });
})(jQuery);