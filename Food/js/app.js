console.log('app.js');

$(document).ready(function () {
    $('.food-slider').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.prev-btn',
        nextArrow: '.next-btn',
        responsive: [
            {
                breakpoint:1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint:771,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]


    });
    $('.nav-trigger').click(function my() {
        $('.site-content-wrapper').toggleClass('scaled');
    })
   

})

function mainContent(){
    $('.site-content-wrapper').toggleClass('scaled');

}