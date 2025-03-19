/*!
 * Gallery v1.0.3
 * Materialize theme
 * http://materializecss.com/themes.html
 * Personal Use License
 * by Alan Chang
 */
!function (t, e) {
    var n = {
        init: function (n) {
            var i = { inDuration: 300, outDuration: 200, responsiveThreshold: 992, contentPadding: 40, onShow: null, defaultColor: "#444", primaryColor: "", secondaryColor: "", fillScreen: !1, dynamicRouting: !1 }; n = t.extend(i, n); var r = window.location.hash.substring(1); return this.each(function (i) {
                function a() {
                    if (O) {
                        O = !1, t(".fixed-action-btn").css("display", "block"), N && (window.location.hash = "!", window.onpopstate = null); var n = !z; window.clearTimeout(I), I = null, W.stop(), z = !0, k = undefined; var i = t("#placeholder-overlay").first(); i.off("click.galleryExpand").off("mouseenter.galleryExpand").off("mouseleave.galleryExpand"), s.scrollTop(0), s.attr("style", A.attr("style")), Y.removeClass("expanded-gallery-cover expanded-desktop expanded-mobile"), Y.css("left", A.find(".gallery-cover").css("left")).removeClass("static hover"), lt(), t("body").css("overflow", ""), s.css("overflowY", ""), i.css({ transition: "none", opacity: .9 }), j.show(), setTimeout(function () {
                            if (t(window).off("resize", H), L.find(".gallery-body").css("display", "none"), X && X.find($).removeClass("active"), t("nav").removeClass("fadeOut"), e({ targets: t("#placeholder-navbar")[0], opacity: 0, duration: q, easing: "easeInQuad", complete: function () { t("#placeholder-navbar").remove() } }), P = !1, e({ targets: i[0], opacity: 0, duration: q, easing: "easeInQuad", complete: function () { i.remove() } }), !n) {
                                L.removeClass("expanded-gallery-item");
                                F.removeClass("expanded-gallery-wrapper");
                                Y.removeClass("expanded-gallery-cover expanded-desktop expanded-mobile");
                                j.removeClass("expanded-gallery-header");
                                W.removeClass("expanded-gallery-body expanded-desktop expanded-mobile");
                                X.removeClass("expanded-gallery-action expanded-desktop expanded-mobile");

                                L.css({ width: l, height: d, transform: "translate3d(0,0,0)", transition: "transform " + q / 1e3 + "s " + et, "-webkit-transition": "-webkit-transform " + q / 1e3 + "s " + et }); var r = m.top - Z - tt; F.css({ transform: "translate3d(0, " + r + "px, 0)", transition: "transform " + q / 1e3 + "s", "-webkit-transition": "-webkit-transform " + q / 1e3 + "s" }); var a = {}; V && K ? (a.width = p, a.height = u, a.transform = "translate3d(" + m.left + "px, " + tt + "px, 0)", a.transition = "transform " + q / 1e3 + "s, width " + q / 1e3 + "s, height " + q / 1e3 + "s", a["-webkit-transition"] = "-webkit-transform " + q / 1e3 + "s, width " + q / 1e3 + "s, height " + q / 1e3 + "s", st.css({ background: "" })) : (a.transform = "translate3d(" + (m.left - R - tt) + "px, 0, 0)", a.transition = "transform " + q / 1e3 + "s " + et, a["-webkit-transition"] = "-webkit-transform " + q / 1e3 + "s " + et), Y.css(a), j.css({ transform: "translate3d(" + c.left + "px," + g + "px,0)", transition: "transform " + q / 1e3 + "s", "-webkit-transition": "-webkit-transform " + q / 1e3 + "s" })
                            } I = setTimeout(function () { s.removeAttr("style"), L.css({ width: "", height: "", overflow: "", "z-index": "", transform: "", transition: "", "-webkit-transition": "" }), Y.removeAttr("style").attr("style", S), F.removeAttr("style"), j.removeAttr("style"), j.children().removeAttr("style"), W.find(".title-wrapper").css({ marginTop: "", marginLeft: "", paddingLeft: "", height: "" }), L.removeClass("active"), D = !0, t(".gallery").data("masonry") && t(".gallery").masonry("layout") }, q)
                        }, 0)
                    }
                } var o, s, l, d, c, h, f, g, p, u, m, v, y, w, b, k, x, C, E, T, B, R, H, I, A, S, D = !0, O = !1, P = !1, z = !0, L = t(this), Q = L.attr("id") || i.toString(), Y = L.find(".gallery-cover"), j = L.find(".gallery-header"), F = L.find(".gallery-curve-wrapper"), W = L.find(".gallery-body"), X = L.find(".gallery-action"), _ = parseInt(t(this).attr("data-in-duration")) || n.inDuration, q = parseInt(t(this).attr("data-out-duration")) || n.outDuration, G = parseInt(t(this).attr("data-responsive-threshold")) || n.responsiveThreshold, J = parseInt(t(this).attr("data-content-padding")) || n.contentPadding, T = t(this).attr("data-primary-color") || n.primaryColor, B = t(this).attr("data-secondary-color") || n.secondaryColor, K = !!Y.length && (t(this).attr("data-fill-screen") || n.fillScreen), N = t(this).attr("data-dynamic-routing") || n.dynamicRouting, U = t(this).hasClass("gallery-horizontal"), V = !1, Z = 64, $ = ".btn, .btn-large, .btn-floating", tt = J, et = "cubic-bezier(0.420, 0.000, 0.580, 1.000)", nt = t(document).width(), it = window.innerHeight, rt = !1, at = window.innerWidth - t(document).width(), ot = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); s = L.children(".placeholder").first(), s.length || (L.wrapInner(t('<div class="placeholder"></div>')), s = L.children(".placeholder").first()), j.length || (j = t('<div class="gallery-header invisible"></div>'), Y.length ? Y.after(j) : F.append(j)); var st = Y.find(".gradient").first(); K && (st.length || (st = t('<div class="gradient"></div>'), Y.append(st)), L.attr("data-fillscreen", !0)); var lt = function () { Y = L.find(".gallery-cover"), j = L.find(".gallery-header"), F = L.find(".gallery-curve-wrapper"), W = L.find(".gallery-body"), X = L.find(".gallery-action"), s = L.find(".placeholder") }, dt = function () { origContainerRect = L[0].getBoundingClientRect(), l = origContainerRect.width, d = L.height(), c = j[0].getBoundingClientRect(), h = c.width, f = c.height || 1, p = Y.width(), u = Y.height(), m = Y.length ? Y[0].getBoundingClientRect() : { top: c.top, left: 0 }, v = t(window).scrollTop() }; if (L.off("click.galleryExpand").on("click.galleryExpand", function (e) {
                    if (D) {
                        var i = t(e.target); if (!i.attr("data-stop-propagation") && !i.closest('[data-stop-propagation="true"]').length) {
                            D = !1, t(".fixed-action-btn").css("display", "none"), window.clearTimeout(I), I = null, dt(), N && (window.location.hash = Q, window.onpopstate = function () { O && a() }); var r, v, q, lt, ct, ht = function () { nt = t(document).width(), it = window.innerHeight, o = nt <= G, V = p > nt / 2 || K, rt = document.body.scrollHeight > document.body.clientHeight; var e = document.body.currentStyle || window.getComputedStyle(document.body, ""); if (rt = rt && ("visible" == e.overflow || "visible" == e.overflowY || "auto" == e.overflow || "auto" == e.overflowY), Z = o ? 56 : 64, b = -L[0].getBoundingClientRect().top, k = k === undefined ? -s[0].getBoundingClientRect().left : k + -s[0].getBoundingClientRect().left, tt = o ? 20 : J, x = Math.round(u / 2 + tt + Z), r = u / 2 - tt, v = .7 * nt, q = it - r - Z, R = Math.max((nt - v) / 2, tt), o && (v = nt, R = 0), V) if (K) { var n = Y.children("img").first(), i = imgHeight = Infinity; if (n.length) { var a = n[0].getBoundingClientRect(); i = a.width, imgHeight = a.height } y = Math.min(nt, i), w = Math.min(it - Z, imgHeight), x = o ? Math.round((it - Z) / 2) : Math.round(3 * tt + Z), r = w - x + Z, q = it - x } else { var c = l / d; y = nt / 2, w = y / c, x = Math.round(w / 2) + tt + Z, r = w / 2 + tt, q = it - r - Z } lt = v / h, ct = q / f }; if (ht(), A = s.clone(!0), t("body").css("overflowX", "hidden"), t("body").on("scroll.disable-scroll mousewheel.disable-scroll touchmove.disable-scroll", function (t) { return t.preventDefault(), t.stopPropagation(), !1 }), L.css({ height: d, width: l }),
                                L.addClass("expanded-gallery-item"),
                                F.addClass("expanded-gallery-wrapper"),

                                Y.length) {
                                    S = Y.attr("style"); var ft = "translate3d(";


                                Y.addClass("expanded-gallery-cover");
                                if (o) {
                                    Y.addClass("expanded-mobile");
                                } else {
                                    Y.addClass("expanded-desktop");
                                }

                                if (K) { ft += m.left + "px, " + tt + "px, 0)" } else { Y.css({ left: R + tt, top: tt }), ft += m.left - R - tt + "px, 0, 0)" } Y.css({ height: u, width: p, transform: ft })
                            } var gt = m.top - Z - tt; F.css({ display: "block", transform: "translate3d(0, " + gt + "px, 0)" }); g = U ? tt - f : tt;

                            j.addClass("expanded-gallery-header");

                            j.css({ height: f, width: h, transform: "translate3d(" + c.left + "px," + g + "px,0)" }), s.css({ height: it, width: nt, transform: "translate3d(" + Math.round(k) + "px, " + Math.round(b) + "px, 0)" }), L.addClass("active"), "absolute" !== L.css("position") && L.css({ position: "relative" }), P = !0, z = !1; var pt = t("#placeholder-overlay"); pt.length || (pt = t('<div id="placeholder-overlay"></div>'), s.prepend(pt)), pt.off("click.galleryExpand").on("click.galleryExpand", function (t) { t.preventDefault(), a() }), K && pt.off("mouseenter.galleryExpand").off("mouseleave.galleryExpand").on("mouseenter.galleryExpand", function () { Y.addClass("hover") }).on("mouseleave.galleryExpand", function () { Y.removeClass("hover") }), setTimeout(function () { pt.addClass("visible") }, 0); var ut = t('<nav id="placeholder-navbar"></nav>'), mt = t('<div class="nav-wrapper"></div>'), vt = t('<div class="container"></div>'), yt = t('<button class="back-btn"><i class="material-icons">arrow_back</i><span>Back</span></button>'), wt = ""; if (t("nav").length && (wt = t("nav").css("background-color"), t("nav").addClass("fadeOut")), ut.css({ "background-color": wt }), vt.append(yt), mt.append(vt), ut.append(mt), s.prepend(ut), yt.click(function () { a() }), "undefined" != typeof ColorThief && Y.length) { C = new ColorThief; var bt = new Image; bt.onload = function () { C.getColor(bt) }, bt.crossOrigin = "Anonymous", bt.src = L.find("img").attr("src"); try { E = C.getPalette(L.find("img")[0], 2), T = T || "rgb(" + E[0][0] + "," + E[0][1] + "," + E[0][2] + ")", B = B || "rgb(" + E[1][0] + "," + E[1][1] + "," + E[1][2] + ")", ut.css({ backgroundColor: B }) } catch (e) { console.log("Cross Origin error. Falling back to defaultColor. Try using a locally hosted image", e); var kt = t("body").children("canvas:last-child"); if (kt.length) { var xt = imgHeight = 0, bt = Y.children("img").first(); if (bt.length) { var Ct = bt[0].getBoundingClientRect(); xt = Math.round(Ct.width), imgHeight = Math.round(Ct.height) } kt[0].getContext("2d").canvas.width === xt && kt[0].getContext("2d").canvas.height === imgHeight && kt.remove() } } } T = T || n.defaultColor, pt.css({ backgroundColor: T }), K && st.length && st.css({ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, " + T + " 100%)" }); var Et = {}; if (Et.transform = "", Et.transition = "transform " + _ / 1e3 + "s", Et["-webkit-transition"] = "-webkit-transform " + _ / 1e3 + "s", V) if (K) { Et.width = y, Et.height = w, Et.transition = "transform " + _ / 1e3 + "s, width " + _ / 1e3 + "s, height " + _ / 1e3 + "s", Et["-webkit-transition"] = "-webkit-transform " + _ / 1e3 + "s, width " + _ / 1e3 + "s, height " + _ / 1e3 + "s"; y < nt && (Et.transform = "scale(" + nt / y + ")") } else Et.transform = "scale(" + y / p + ")"; Y.css(Et), F.css({ height: it, transition: "transform " + _ / 1e3 + "s " + et, "-webkit-transition": "-webkit-transform " + _ / 1e3 + "s " + et, transform: "" }), j.children().css("opacity", 0); (function () { var t = R / lt, e = -r / ct; V && !K && (e = (r - u) / ct), j.css({ transition: "transform " + _ / 1e3 + "s " + et, "-webkit-transition": "-webkit-transform " + _ / 1e3 + "s " + et, transform: "scale(" + lt + "," + ct + ") translate3d(" + t + "px," + e + "px,0)", transformOrigin: "0 0" }) })();

                            if (W.length) {
                                W.addClass("expanded-gallery-body");
                                if (o) { 
                                    W.addClass("expanded-mobile");
                                } else {
                                    W.addClass("expanded-desktop");
                                }

                                W.css({ marginTop: x, marginBottom: x - Z, minHeight: it - x });

                                if (!K && Y.length) {
                                    if (o) {
                                        W.find(".title-wrapper").css({ marginTop: x / 2 });
                                    } else {
                                        W.find(".title-wrapper").css({ marginLeft: p, paddingLeft: tt, height: r });
                                    }
                                }
                            }

                            if (X.length) {
                                X.addClass("expanded-gallery-action");
                                if (o) {
                                    X.addClass("expanded-mobile");
                                } else {
                                    X.addClass("expanded-desktop");
                                }

                                X.css({ top: x });
                                X.find($).each(function () { t(this).css({ backgroundColor: B }) });
                            }

                            H = M.throttle(function () { ht() }, 150), t(window).resize(H), I = setTimeout(function () { X.length && X.find($).each(function () { t(this).addClass("active") }); var e = function () { A = s.clone(!0), s.css({ transform: "", position: "fixed", width: "100%", height: "100%", top: 0, left: 0, overflow: "auto" }), rt && (t("body").css("overflow", "hidden"), s.css("overflowY", "scroll"), ot || pt.css("margin-right", at)), t("body").off("scroll.disable-scroll mousewheel.disable-scroll touchmove.disable-scroll"), F.css({ height: "100%" }), K ? Y.css({ width: "", height: "", transform: "", transition: "opacity .3s" }) : Y.css({ left: tt }), Y.addClass("static"), j.hide() }; W.length ? W.fadeIn(n.inDuration, function () { e() }) : e(), z = !0, O = !0, "function" == typeof n.onShow && n.onShow.call(this, L) }, _);
                        }
                    }
                }), t(document).keyup(function (t) { 27 === t.keyCode && P && a() }), N && r === Q) { var ct = Y.children("img").first(); ct.length ? ct.on("load", function () { L.trigger("click.galleryExpand") }).attr("src", ct.attr("src")) : L.trigger("click.galleryExpand") }
            })
        }, open: function () { t(this).trigger("click.galleryExpand") }, close: function () { var e = t("#placeholder-overlay"); e.length && e.trigger("click.galleryExpand") }
    }; t.fn.galleryExpand = function (e) { return n[e] ? n[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.galleryExpand") : n.init.apply(this, arguments) }
}(jQuery, M.anime);