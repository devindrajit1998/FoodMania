!function(e){"use strict";e((function(){var t,i,a,s;matchMedia("only screen and (min-width: 991px)").matches&&function(){if(e("body").hasClass("header_sticky")){var t=e(".header");if(0!=t.size()){var i=e(".header").offset().top,a=e(".header").height(),s=e("<div />",{height:a}).insertAfter(t);s.hide(),e(window).on("load scroll",(function(){e(window).scrollTop()>i+120?(e(".header").addClass("downscrolled"),s.show()):(e(".header").removeClass("header-small downscrolled"),s.hide()),e(window).scrollTop()>500?e(".header").addClass("header-small upscrolled"):e(".header").removeClass("upscrolled")}))}}}(),t='<div class="square"><div class="numb">',i='</div><div class="text">',e().countdown&&e(".countdown").countdown("2017/10/8",(function(a){e(this).html(a.strftime(t+"%D"+i+"DAYS</div></div>"+t+"%H"+i+"HOURS</div></div>"+t+"%M"+i+"MINITUES</div></div>"+t+"%S"+i+"SECONDS</div>"))})),a="desktop",e(window).on("load resize",(function(){var t="desktop";if(matchMedia("only screen and (max-width: 991px)").matches&&(t="mobile"),t!==a)if(a=t,"mobile"===t){var i=e("#mainnav").attr("id","mainnav-mobi").hide(),s=e("#mainnav-mobi").find("li:has(ul)");e("#header").after(i),s.children("ul").hide(),s.children("a").after('<span class="btn-submenu"></span>'),e(".btn-menu").removeClass("active")}else{var l=e("#mainnav-mobi").attr("id","mainnav").removeAttr("style");l.find(".submenu").removeAttr("style"),e("#header").find(".nav-wrap").append(l),e(".btn-submenu").remove()}})),e(".btn-menu").on("click",(function(){e("#mainnav-mobi").slideToggle(300),e(this).toggleClass("active")})),e(document).on("click","#mainnav-mobi li .btn-submenu",(function(t){e(this).toggleClass("active").next("ul").slideToggle(300),t.stopImmediatePropagation()})),e().gmap3&&e("#flat-map").gmap3({map:{options:{mapTypeControl:!1,zoomControl:!1,zoom:11,mapTypeId:"arch_style",mapTypeControlOptions:{mapTypeIds:["arch_style",google.maps.MapTypeId.SATELLITE,google.maps.MapTypeId.HYBRID]},scrollwheel:!1}},getlatlng:{address:"PO Box 97845 Baker st. 567, Los Angeles, California, United States",callback:function(t){t&&(e(this).gmap3("get").setCenter(new google.maps.LatLng(t[0].geometry.location.lat(),t[0].geometry.location.lng())),e(this).gmap3({marker:{latLng:t[0].geometry.location,options:{visible:!1,icon:"http://themesflat.com/html/arch/images/icon/marker.png"}}}))}},styledmaptype:{id:"arch_style",options:{name:"Arch Map"},styles:[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}]}}),e(".flat-row").each((function(){if(e().owlCarousel){var t=e(this).find(".flat-client");t.owlCarousel({loop:!0,margin:t.data("margin"),nav:t.data("nav"),dots:t.data("dots"),autoplay:t.data("auto"),responsive:{0:{items:1},480:{items:2},767:{items:3},991:{items:3},1200:{items:e(".flat-client").data("item")}}})}})),e(window).scroll((function(){e(this).scrollTop()>800?e(".go-top-v1").addClass("show"):e(".go-top-v1").removeClass("show")})),e(".go-top-v1").on("click",(function(){return e("html, body").animate({scrollTop:0},1e3,"easeInOutExpo"),!1})),e().datetimepicker&&(e(".date_picker input").datetimepicker({timepicker:!1,format:"d/m/Y"}),e(".time_picker input").datetimepicker({datepicker:!1,format:"H:i"})),e(".fancybox").on("click",(function(){return e.fancybox({href:this.href,type:e(this).data("type")}),!1})),e(".loading-overlay").fadeOut("slow",(function(){e(this).remove()})),e(".flat-product-single-slider").each((function(){e(this).children("#flat-product-carousel").flexslider({animation:"slide",controlNav:!1,animationLoop:!1,slideshow:!1,itemWidth:100,itemMargin:10,asNavFor:e(this).children("#flat-product-flexslider"),prevText:'<i class="fa fa-angle-left"></i>',nextText:'<i class="fa fa-angle-right"></i>'}),e(this).children("#flat-product-flexslider").flexslider({animation:"slide",controlNav:!1,animationLoop:!1,slideshow:!1,sync:e(this).children("#flat-product-carousel"),prevText:'<i class="fa fa-angle-left"></i>',nextText:'<i class="fa fa-angle-right"></i>'})})),e(".flat-tabs").each((function(){e(this).children(".content-tab").children().hide(),e(this).children(".content-tab").children().first().show(),e(this).find(".menu-tab").children("li").on("click",(function(t){var i=e(this).index(),a=e(this).siblings().removeClass("active").parents(".flat-tabs").children(".content-tab").children().eq(i);a.addClass("active").fadeIn("slow"),a.siblings().removeClass("active"),e(this).addClass("active").parents(".flat-tabs").children(".content-tab").children().eq(i).siblings().hide(),t.preventDefault()}))})),e("#reservation-form").each((function(t){t.preventDefault,e(this).validate({submitHandler:function(t){var i=e(t),a=i.serialize(),s=e("<div />",{class:"loading"});e.ajax({type:"POST",url:i.attr("action"),data:a,beforeSend:function(){i.find(".form-submit").append(s)},success:function(t){var a,s;"Success"==t?(a="Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )",s="msg-success"):(a="Error sending email.",s="msg-error"),i.prepend(e("<div />",{class:"flat-alert "+s,text:a}).append(e('<a class="close" href="#"><i class="fa fa-close"></i></a>'))),i.find(":input").not(".submit").val("")},complete:function(e,t,a){i.find(".loading").remove()}})}})})),function(){if(e().isotope){var t=e(".projects-portfolio");t.imagesLoaded((function(){t.isotope({itemSelector:".projects-portfolio-wrap",transitionDuration:"1s"})})),e(".portfolio-filter li").on("click",(function(){var i=e(this).find("a").attr("data-filter");return e(".portfolio-filter li").removeClass("active"),e(this).addClass("active"),t.isotope({filter:i}),!1}))}}(),e(".flat-carousel").each((function(){e().owlCarousel&&e(this).find(".owl-carousel-services").owlCarousel({loop:!0,auto:!0,dots:!1,nav:!0,responsive:{0:{items:1},480:{items:1},767:{items:1},991:{items:1},1200:{items:1}}})})),s={duration:600},e(".flat-toggle .toggle-title.active").siblings(".toggle-content").show(),e(".flat-toggle.enable .toggle-title").on("click",(function(){e(this).closest(".flat-toggle").find(".toggle-content").slideToggle(s),e(this).toggleClass("active")})),e(".flat-accordion .toggle-title").on("click",(function(){e(this).is(".active")?(e(this).toggleClass("active"),e(this).next().slideToggle(s)):(e(this).closest(".flat-accordion").find(".toggle-title.active").toggleClass("active").next().slideToggle(s),e(this).toggleClass("active"),e(this).next().slideToggle(s))}))}))}(jQuery);