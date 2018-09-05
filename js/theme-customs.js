(function ($) {
    "use strict";

    $(document).ready(function () {
        construction.ready();
    });

    $(window).load(function () {
        construction.load();
    });

    var construction = {

        ready: function () {
            this.search_box();
            this.header_menu();
            this.header_menu_mobile();
            this.sc_video_box();
            this.back_to_top();
            this.sticky_sidebar();
            this.slider();
            this.testimonials();
            this.our_team();
            this.client_logo();
            this.sc_services();
            this.sc_projects();
            this.filter_gallery();
            this.filter_project();
            this.feature_preloading();
        },

        load: function () {

            this.slider_project();
            this.slider_service();

            // Gallery
            if( $('.wrapper-gallery, .wrapper-project').length > 0 ) {
                $('.wrapper-gallery, .wrapper-project').isotope({filter: '*'});
            }

        },

        feature_preloading: function () {
            var $preload = $('#preloading');

            if ($preload.length > 0) {
                $preload.fadeOut( 450, function () {
                    $preload.remove();
                });
            }

        },

        slider_service: function () {
            var $service_single = $('.service-single');

            $service_single.each(function () {
                $(' #carousel').flexslider({
                    animation: "slide",
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    itemWidth: 230,
                    itemMargin: 15,
                    asNavFor: '#slider'
                });

                $('#slider').flexslider({
                    animation: "slide",
                    autoplay: true,
                    pauseOnHover: false,
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    sync: "#carousel"
                });
            })
        },

        slider_project: function () {
            var $project_single = $('article.single-slides');

            $project_single.each(function () {
                $(' #carousel').flexslider({
                    animation: "slide",
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    itemWidth: 259,
                    itemMargin: 0,
                    asNavFor: '#slider'
                });

                $('#slider').flexslider({
                    animation: "slide",
                    autoplay: true,
                    pauseOnHover: false,
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    itemHeight: 575,
                    sync: "#carousel"
                });
            })
        },

        sc_video_box: function () {
            $('.sc-video-box .video-thumbnail').magnificPopup({
                type: 'iframe',
         });
        },

        sc_projects: function () {
            $('.sc-project.home-style-1 a.popup-link ').magnificPopup({
                type: 'image',
            });

            $(document).on('click', '.filter-controls .filter', function (e) {
                e.preventDefault();
                var filter = $(this).data('filter'),
                    filter_wraper = $(this).parents('.project-archive').find('.wrapper-project');
                $('.filter-controls .filter').removeClass('active');
                $(this).addClass('active');
                filter_wraper.isotope({filter: filter});
            });
        },

        sc_services: function () {
            var $services = $('.sc-service.style-3');

            $services.each(function () {

                $('.slide').owlCarousel({
                    lazyLoad         : true,
                    dots             : false,
                    nav              : true,
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                            nav: false,
                        },
                        768: {
                            items: 2,
                            dots: true,
                            nav: false,
                        },
                        1200: {
                            items: 3
                        }
                    }
                });
            })
        },

        our_team: function () {
            var $thim_teams = $('.sc-our-team');

            $thim_teams.each(function () {

                $(".slider").owlCarousel({
                    pagination       : true,
                    lazyLoad         : true,
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                            nav: false
                        },

                        568: {
                            items: 2,
                            dots: true,
                            nav: false
                        },

                        600: {
                            items: 3,
                            dots: true,
                            nav: false
                        },
                        800: {
                            items: 3,
                            dots: true,
                            nav: false
                        },
                        1200: {
                            items: 4
                        }
                    }
                });
            })
        },

        client_logo: function () {
            var $thim_brands = $('.sc-client-logo.style-1,.sc-client-logo.style-2 '),
                autoplay = $thim_brands.data('nav') ? true : false,
                item = $thim_brands.data('itemsvisible');

            $thim_brands.each(function () {

                $(this).find('.owl-carousel').owlCarousel({
                        dots: false,
                        nav: autoplay,
                        responsive: {
                            0   : {
                                items: 1,
                            },
                            600   : {
                                items: 2,
                            },
                            768 : {
                                items: 4,
                            },
                            1200: {
                                items: item,
                            }
                        },
                    }
                )
            })
        },

        testimonials: function () {

            $('.sc-testimonials.style-1').each(function () {
                var elem = $(this).find('.slider'),
                    dots = elem.data('dots') ? true : false;

                $('.sc-testimonials.style-1 .slider').owlCarousel({
                    loop :true,
                    items : 1,
                    dots: dots,
                    autoplay:true,
                    autoplayTimeout:2000,
                    autoplayHoverPause:true
                })
            }),

            $('.sc-testimonials.style-2').each(function () {
                var elem = $(this).find('.testimonial-slider'),
                    itemsvisible = elem.data('itemsvisible');

                var testimonial_slider = elem.thimContentSlider({
                    items            : elem,
                    itemsVisible     : itemsvisible,
                    mouseWheel       : false,
                    autoPlay         : true,
                    itemMaxWidth     : 100,
                    itemMinWidth     : 70,
                    activeItemRatio  : 1.35,
                    activeItemPadding: 0,
                    itemPadding      : -30
                });
            }),

            $('.sc-testimonials.style-3').each(function () {
                var elem = $(this).find('.testimonial-slider'),
                    itemsvisible = elem.data('itemsvisible');

                var testimonial_slider = elem.thimContentSlider({
                    items            : elem,
                    itemsVisible     : itemsvisible,
                    mouseWheel       : false,
                    autoPlay         : true,
                    itemMaxWidth     : 105,
                    itemMinWidth     : 90,
                    activeItemRatio  : 1.35,
                    activeItemPadding: 0,
                    itemPadding      : -15
                });
            })
        },

        slider: function () {
            $('.single-slides .image-slides').owlCarousel({
                loop :true,
                items : 1,
                nav: true,
                dots: true,
                autoplay:true,
                autoplayTimeout:2000,
                autoplayHoverPause:true
            }),
            /**/
            $('.list-team.slider').owlCarousel({
                loop :true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items: 1,
                    },
                    600:{
                        items:2,
                    },
                    1000:{
                        items:4,
                    }
                }
            })
        },

        search_box: function () {

            var removeClass = true;

            $('#search-button').on('click touch', function (e) {

                e.preventDefault();
                $('.search-wrapper').toggleClass('search-open');

                var $search = $(this).parent();
                setTimeout(function () {
                    $search.find('#search-field').focus();
                }, 200);

                removeClass = false;
            });

            $(".search-wrapper").on('click', function () {
                removeClass = false;
            });

            $("body").on('click', function () {

                if ( removeClass ) {
                    $(".search-wrapper").removeClass('search-open');
                }
                removeClass = true;
            });

            $(window).scroll(function () {
                $('.search-wrapper').removeClass('search-open');
            });
        },

        header_menu_mobile: function () {
            $(document).on('click', '.menu-mobile-effect', function (e) {
                e.stopPropagation();
                $('body').toggleClass('mobile-menu-open');
            });


            $(document).on('click', 'body.mobile-menu-open .overlay-close-menu', function () {
                $('body').removeClass('mobile-menu-open');
            });

            $('.mobile-menu-container .main-menu> li.has-children > span, .mobile-menu-container .main-menu> li.has-children > a').after('<span class="icon-toggle"><i class="fa fa-angle-down"></i></span>');

            $('.mobile-menu-container .main-menu >li.has-children .icon-toggle').on('click', function () {
                if ($(this).next('ul.sub-menu').is(':hidden')) {
                    $(this).next('ul.sub-menu').slideDown(200, 'linear');
                    $(this).html('<i class="fa fa-angle-up"></i>');
                } else {
                    $(this).next('ul.sub-menu').slideUp(200, 'linear');
                    $(this).html('<i class="fa fa-angle-down"></i>');
                }
            });
        },

        header_menu: function () {
            var $header = $('#masthead');

            if (!$header.length) {
                return;
            }

            var off_Top = 0,
                menuH = $header.outerHeight(),
                $topbar = $('#thim-header-topbar'),
                latestScroll = 0,
                startSticky = $header.offset().top,
                main_Offset = 0;

            if ($('#wrapper-container').length) {
                main_Offset = $('#wrapper-container').offset().top;
            }

            if ($topbar.length) {
                off_Top = $topbar.outerHeight();

            }

            //mobile
            if ($(window).width() <= 480) {
                off_Top = 0;
                main_Offset = 0;
            }

            $header.css({
                // 'height': $header.outerHeight()
            });

            if ($header.hasClass('sticky-header')) {
                $(window).scroll(function () {
                    var current = $(this).scrollTop();

                    if (current > latestScroll) {
                        //scroll down

                        if (current > startSticky + menuH) {
                            $header.removeClass('affix-top').addClass('affix').removeClass('menu-show').addClass('menu-hidden');
                            $header.css({
                                top: 0
                            });
                        } else {
                            $header.addClass('no-transition');
                        }

                    } else {
                        // scroll up
                        if (current <= startSticky) {
                            $header.removeClass('affix').addClass('affix-top').addClass('no-transition');
                            $header.css({
                                top: 0
                            });
                        } else {
                            $header.removeClass('no-transition');
                            $header.css({
                                top: main_Offset
                            });
                        }

                        $header.removeClass('menu-hidden').addClass('menu-show');
                    }

                    latestScroll = current;
                });
            }

            $('#masthead .main-menu > .has-children, .main-menu > li ul li').on({
                'mouseenter': function () {
                    $(this).children('.sub-menu').stop(true, false).slideDown(250);
                },
                'mouseleave': function () {
                    $(this).children('.sub-menu').stop(true, false).slideUp(250);
                }
            });

        },

        back_to_top: function () {
            var $element = $('#back-to-top');

            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $element.addClass('scrolldown').removeClass('scrollup');
                } else {
                    $element.addClass('scrollup').removeClass('scrolldown');
                }
            });

            $element.on('click', function () {
                $('html,body').animate({scrollTop: '0px'}, 800);
                return false;
            });
        },

        sticky_sidebar: function () {
            var offsetTop = 20;

            if ($("#wpadminbar").length) {
                offsetTop += $("#wpadminbar").outerHeight();
            }
            if ($("#masthead.affix").length) {
                offsetTop += $("#masthead.affix").outerHeight();

            }

            if ($('.sticky-sidebar').length > 0) {

                $("aside.sticky-sidebar").theiaStickySidebar({
                    "containerSelector": "",
                    "additionalMarginTop": offsetTop,
                    "additionalMarginBottom": "0",
                    "updateSidebarHeight": false,
                    "minWidth": "768",
                    "sidebarBehavior": "modern"
                });
            }

        },

        parallax: function () {
            var windown_width = $(window).outerWidth();

            if (windown_width > 1024) {
                $(window).stellar({
                    horizontalOffset: 0,
                    verticalOffset: 0
                });
            }
        },

        filter_gallery: function () {
            $(document).on('click', '.filter-controls .filter', function (e) {
                e.preventDefault();
                var filter = $(this).data('filter'),
                    filter_wraper = $(this).parents('.sc-gallery').find('.wrapper-gallery');
                $('.filter-controls .filter').removeClass('active');
                $(this).addClass('active');
                filter_wraper.isotope({filter: filter});
            });

            $('.wrapper-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    opener: function(element) {
                        return element.find('img');
                    }
                }
            });
        },

        filter_project: function () {

            $(document).on('click', '.filter-controls .filter', function (e) {
                e.preventDefault();
                var filter = $(this).data('filter'),
                    filter_wraper = $(this).parents('.project-archive').find('.wrapper-project');
                $('.filter-controls .filter').removeClass('active');
                $(this).addClass('active');
                filter_wraper.isotope({filter: filter});
            });
        }

    };

})(jQuery);