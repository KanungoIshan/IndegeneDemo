$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 30,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

jQuery(document).ready(function($) {

    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
         autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
          100: { items: 1 },
          768: { items: 2 },
          1170: { items: 3 },
                        1170: { items: 4 }
        }
    });
});