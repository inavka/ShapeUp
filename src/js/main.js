$(document).ready(function(){
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.sync-slider'
    });
    $('.sync-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 0,
        asNavFor: '.main-slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        infinite: true
    });
});