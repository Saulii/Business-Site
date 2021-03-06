$(document).ready(function() {

   $('#slides').superslides({
   	   animation: 'fade',
   	   play: 3000,
   	   pagination: false
   });
    var typed = new Typed(".typed", {
       strings: ["Business Strategy", "Marketing Management", "Analytics"],
       typeSpeed: 50,
       loop: true,
       startDelay: 1000,
       showCursor: false
    });

    $('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        940:{
            items:4
        }
    }
});

    $(function() {
        $('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent) {
            	$(this.el).find('.percent').text(Math.round(percent));
            }
        });

});
    
});

