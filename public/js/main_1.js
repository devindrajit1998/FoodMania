!function(a){"use strict";var e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}};a((function(){var n,t,o;!function(){a("body");const e=a(".modal-menu-left"),n=e.children(".modal-menu__body");if(e.length){const n=function(){e.addClass("modal-menu--open")},t=function(){e.removeClass("modal-menu--open")};a(".modal-menu-left-btn").on("click",(function(){n()})),a(".modal-menu__backdrop, .modal-menu__close").on("click",(function(){t()}))}e.on("click",(function(e){const t=a(this).closest("[data-modal-menu-item]");let o=t.data("panel");o||(o=t.children("[data-modal-menu-panel]").children(".modal-menu__panel"),o.length&&(n.append(o),t.data("panel",o),o.width())),o&&o.length&&e.preventDefault()})),a(".modal-menu__body #mainnav-secondary .menu li").each((function(e){0==a(".modal-menu__body #mainnav-secondary .menu li:has(ul)").find(">span").length&&a(".modal-menu__body #mainnav-secondary .menu li:has(ul)").append('<span class="carenow-icon-chevron-right"></span>'),a(this).find(".sub-menu").css({display:"none"})})),a(".modal-menu__body  #mainnav-secondary .menu li:has(ul) > span").on("click",(function(e){e.preventDefault(),a(this).closest("li").children(".sub-menu").slideToggle(),a(this).closest("li").toggleClass("opened")}))}(),n="desktop",a(window).on("load resize",(function(){var e="desktop",t=a("#wpadminbar").height();if(matchMedia("only screen and (max-width: 991px)").matches&&(e="mobile"),e!==n)if(n=e,"mobile"===e){a("#mainnav").hide();var o=a("#mainnav_canvas").find("li:has(ul)");o.children("ul").hide(),0==o.find(">span").length&&o.children("a").after('<span class="btn-submenu"></span>'),a(".btn-menu").removeClass("active"),a(".canvas-nav-wrap .inner-canvas-nav").css({"padding-top":t}),a(".canvas-nav-wrap .canvas-menu-close").css({top:t+30})}else a("#mainnav").show(),a(".canvas-nav-wrap .inner-canvas-nav").css({"padding-top":t}),a(".canvas-nav-wrap .canvas-menu-close").css({top:t+30}),a("#header").find(".canvas-nav-wrap").removeClass("active")})),a(".btn-menu").on("click",(function(){a(this).closest("#header-mobile").find(".canvas-nav-wrap").toggleClass("active")})),a(".canvas-nav-wrap .overlay-canvas-nav").on("click",(function(e){a(this).closest("#header-mobile").find(".canvas-nav-wrap").toggleClass("active")})),a(document).on("click","#mainnav_canvas li .btn-submenu",(function(e){a(this).toggleClass("active").next("ul").slideToggle(300),e.stopImmediatePropagation()})),function(){if(a("body").hasClass("header_sticky")){var e=a("#header").data("header_style"),n=a(".themesflat-top").height();switch(a("body").hasClass("admin-bar")&&a("#wpadminbar").height(),e){case"header-02":console.log(e);var t=a(".header.header-style-02 .inner-header").height();(i=a("<div />",{height:t}).insertAfter(".inner-header")).hide(),a(window).on("load scroll",(function(){a(window).scrollTop()>=n?(console.log("header header-style-02"),a("#header").addClass("header-sticky"),i.show()):(a(".header-sticky").removeAttr("style"),a("#header").removeClass("header-sticky"),i.hide())}));break;case"header-03":console.log(e);var o=a(".header.style-3 .tf-wrap-navextra").height();(i=a("<div />",{height:o}).insertAfter(".tf-wrap-navextra")).hide();var s=a(".header.style-3 .inner-header").height();console.log(s),a(window).on("load scroll",(function(){a(window).scrollTop()>=s+n-40?(console.log("start"),a("#header").addClass("header-sticky"),i.show()):(a(".header-sticky").removeAttr("style"),a("#header").removeClass("header-sticky"),i.hide())}));break;default:var i;t=a(".header .inner-header").height(),(i=a("<div />",{height:t}).insertAfter(".inner-header")).hide(),a(window).on("load scroll",(function(){a(window).scrollTop()>=n?(a("#header").addClass("header-sticky"),i.show()):(a("#header").removeClass("header-sticky"),i.hide())}))}}}(),a(document).on("click",(function(e){"s"!=e.target.id&&(a(".top-search").removeClass("show"),a(".show-search").removeClass("active"))})),a(".show-search").on("click",(function(a){a.stopPropagation()})),a(".search-form").on("click",(function(a){a.stopPropagation()})),a(".show-search").on("click",(function(e){a(this).hasClass("active")?a(this).removeClass("active"):a(this).addClass("active"),e.preventDefault(),a(".top-search").hasClass("show")?a(".top-search").removeClass("show"):a(".top-search").addClass("show")})),a().parallax&&null==e.any()&&a(".parallax").parallax("50%",-.5),a(".page-title").hasClass("video")&&jQuery((function(){jQuery("#ptbgVideo").YTPlayer()})),function(){var e=a(".wrap-blog-article");a("body").hasClass("page-template")&&(e=a(".wrap-blog-article"));a(".navigation.loadmore.blog a").on("click",(function(n){n.preventDefault(),a("<span/>",{class:"infscr-loading",text:"Loading..."}).appendTo(e),a.ajax({type:"GET",url:a(this).attr("href"),dataType:"html",success:function(n){var t=a(n).find(".item"),o=a(n).find(".navigation.loadmore.blog a").attr("href");t.css({opacity:0}),e.hasClass("blog-masonry")?e.append(t).imagesLoaded((function(){t.css({opacity:1}),e.masonry("appended",t)})):(t.css({opacity:1}),e.append(t)),null!=o?(a(".navigation.loadmore.blog a").attr("href",o),e.find(".infscr-loading").remove()):(e.find(".infscr-loading").addClass("no-ajax").text("All posts loaded.").delay(2e3).queue((function(){a(this).remove()})),a(".navigation.loadmore.blog").remove()),customizable_carousel(),iziModal()}})}))}(),a(window).scroll((function(){a(this).scrollTop()>500?a(".go-top").addClass("show"):a(".go-top").removeClass("show")})),a(".go-top, .go-top2 i").on("click",(function(e){e.preventDefault(),a("html, body").animate({scrollTop:0},0)})),(t=a("div.customizable-carousel")).length>0&&t.each((function(){var e=a(this),n=e.data("items")?e.data("items"):1,t=!e.attr("data-loop")||e.data("loop"),o=!!e.data("nav-dots")&&e.data("nav-dots"),s=!!e.data("nav-arrows")&&e.data("nav-arrows"),i=!!e.attr("data-autoplay")&&e.data("autoplay"),r=e.attr("data-autospeed")?e.data("autospeed"):3500,d=e.attr("data-smartspeed")?e.data("smartspeed"):950,l=!!e.data("autoheight")&&e.data("autoheight"),c=e.attr("data-space")?e.data("space"):15;a(this).owlCarousel({loop:t,items:n,responsive:{0:{items:e.data("xs-items")?e.data("xs-items"):1,nav:!1},600:{items:e.data("sm-items")?e.data("sm-items"):2,nav:!1},1e3:{items:e.data("md-items")?e.data("md-items"):3},1240:{items:n}},dots:o,autoplayTimeout:r,smartSpeed:d,autoHeight:l,margin:c,nav:s,navText:['<i class="fal fa-arrow-left"></i>','<i class="fal fa-arrow-left"></i>'],autoplay:i,autoplayHoverPause:!0})})),a(window).on("load resize",(function(){var e=a(".copyright span").outerWidth()+100;a(".bottom .bg_copyright").css("min-width",e)})),a(window).on("load resize",(function(){if(matchMedia("only screen and (min-width: 1441px)").matches){var e=a(".themesflat-top").outerHeight(),n=e+a("#header").outerHeight();a("#header.header-style1 .logo").css({"margin-top":"-"+e+"px","min-height":n+"px"})}else a("#header.header-style1 .logo").css({"margin-top":"unset","min-height":"unset"})})),a("#preloader").fadeOut("slow",(function(){setTimeout((function(){a("#preloader").remove()}),1e3)})),o=a(".products"),a(".navigation.loadmore.shop a").on("click",(function(e){e.preventDefault(),a("<span/>",{class:"infscr-loading",text:"Loading..."}).appendTo(o),a.ajax({type:"GET",url:a(this).attr("href"),dataType:"html",success:function(e){var n=a(e).find(".product"),t=a(e).find(".navigation.loadmore.shop a").attr("href");n.css({opacity:0}),o.hasClass("blog-masonry")?o.append(n).imagesLoaded((function(){n.css({opacity:1}),o.masonry("appended",n)})):(n.css({opacity:1}),o.append(n)),null!=t?(a(".navigation.loadmore.shop a").attr("href",t),o.find(".infscr-loading").remove()):(o.find(".infscr-loading").addClass("no-ajax").text("All products loaded.").delay(2e3).queue((function(){a(this).remove()})),a(".navigation.loadmore.shop").remove()),customizable_carousel(),iziModal()}})}))}))}(jQuery);