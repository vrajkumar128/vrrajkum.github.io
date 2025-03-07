!(function (a) {
    a(function () {
        M.AutoInit(),
            a(".scrollspy").not("#contact").scrollSpy({ activeClass: "active" }),

            a(".contact.navLink").click(function () {
                return a("html, body").animate({ scrollTop: a(document).height() - a(window).height() }, 200), !1;
            }),
            a(".fixed-action-btn").click(function () {
                return a("html, body").animate({ scrollTop: 0 }, 250), !1;
            }),
            (a.fn.isInViewport = function () {
                var o = a(this).offset().top,
                    s = o + a(this).outerHeight(),
                    t = a(window).scrollTop(),
                    i = t + a(window).height();
                return s > t && o < i;
            });
        var o = a(".colored:first-child");

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
        }),

            a(".skills-slick").slick({ dots: !0, autoplay: !0, autoplaySpeed: 5000, prevArrow: '<i class="fas fa-chevron-left"></i>', nextArrow: '<i class="fas fa-chevron-right"></i>' }),
            a(".certificate img").magnify({ src: "https://i.postimg.cc/d0ngtc3j/lqi5ogcj-1.png" });
        var s = a(".gallery");
        s.masonry({ itemSelector: ".gallery-filter", columnWidth: ".gallery-filter", transitionDuration: 0 }),
            s.imagesLoaded(function () {
                s.masonry("layout");
            }),
            a("a.filter").click(function (a) {
                a.preventDefault();
            });
        var t = function (a) {
            a.find(".carousel").carousel({ dist: 0, padding: 10 });
        };
        a(".gallery-expand").galleryExpand({ onShow: t }), a(".blog .gallery-expand").galleryExpand({ onShow: t, fillScreen: !0, inDuration: 500 });
    });
})(jQuery);