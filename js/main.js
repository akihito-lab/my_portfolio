$(function() {
    //処理を書く部分
    particlesJS("particles-js", {
    "particles":{
        "number":{"value":350,"density":{"enable":true,"value_area":961.4460148062693}},
        "color":{"value":"ffffff"},
        "shape":{"type":"polygon","stroke":{"width":1,"color":"#ffffff"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},
        "opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
        "size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
        "line_linked":{"enable":true,"distance":256.38560394833854,"color":"#15AABF","opacity":0.7691568118450155,"width":0.8012050123385578},
        "move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
    "interactivity":{
        "detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},
        "modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
        "retina_detect":true
    });
        var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
    });

    $(function() {
        $('#toggle').click(function() {
            $(this).toggleClass("active");
            $('#overlay').toggleClass("open");
            if ($("html div").not("#overlay").hasClass("blur")){
                $("html div").not("#overlay").not(".button_container").removeClass("blur")
             }else{
                $("html div").not("#overlay").not(".button_container").addClass("blur")
             }
         });
         
         // 特定の位置までスクロール
         $('.menu_aboutme').click(function() {
           $("html,body").animate({scrollTop:$(".profile_title").offset().top});
           $('#overlay').removeClass("open");
           $('html div').removeClass("blur");
           $("#toggle").toggleClass("active");
         });
         
         $('.menu_service').click(function() {
           $("html,body").animate({scrollTop:$(".service_section").offset().top});
           $('#overlay').removeClass("open");
           $('html div').removeClass("blur");
           $("#toggle").toggleClass("active");
         });
         
         $('.menu_works').click(function() {
           $("html,body").animate({scrollTop:$(".works_section").offset().top});
           $('#overlay').removeClass("open");
           $('html div').removeClass("blur");
           $("#toggle").toggleClass("active");
         });
         
         $('.menu_contact').click(function() {
           $("html,body").animate({scrollTop:$(".contact_title").offset().top});
           $('#overlay').removeClass("open");
           $('html div').removeClass("blur");
           $("#toggle").toggleClass("active");
         });
         
         // Animate.cssのfadeInUpエフェクトを適用
         $(".fadein").waypoint(function(direction) {
           if (direction === "down") {
             $(this.element).addClass("fadeInUp");
             this.destroy();
           }
         }, { offset: "100%" });
         
    });