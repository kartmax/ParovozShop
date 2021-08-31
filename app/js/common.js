$(function() {

	// Custom JS

});
//Carousel
$('.carousel-1').owlCarousel({
    loop:true,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        }
    }
});

//Carouse2
$("#slid_for_us").owlCarousel({
    items: 1,
    loop: true,
});



//Carouse1 forUs
$("#slid_for_us_second").owlCarousel({
    items: 1,
    loop: true,
});

//Carouse2 forUs
$("#part-carous").owlCarousel({
    items: 5,
    loop: true,
    nav: false,

    responsive:{
        0:{
           items:3
        },
        600:{
           items:5
        }
    }
});









$("#back-top").hide();
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });

    $('#back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
});




$(document).ready(function(){

    $(".menu-btn").click(function(){
        $(".menu").toggleClass("on");
        $(".menu-btn").toggleClass("off_btn");
    });

    $(".close").click(function(){
        $(".menu").toggleClass("on");
        $(".menu-btn").toggleClass("off_btn");
    });



    $(".filt_btn").click(function(){
        $(".menu-filt").toggleClass("off_menu_filter");
        $(".filt_btn").toggleClass("off_btn_filter");
    });
    $(".close-filt").click(function(){
        $(".menu-filt").toggleClass("off_menu_filter");
        $(".filt_btn").toggleClass("off_btn_filter");
    });




    $(".delete-row").click(function () {
        var a = (this);
        $(this).parents("tr").toggleClass("off-row");

        setTimeout(function() {
                $(a).parents("tr").toggleClass("hlop");
            }, 400);
    });

});





$(document).ready(function () {
    $(".search").magnificPopup();
});


$('.requisites select').styler();
$('.pay-method input[type="radio"]').styler();
$('.form-quant input[type="number"]').styler();





$(function () {
    $('.goods').mixItUp({

    });
});





$('.litl-photo').on('click', function(e) {
    var m = $('#big-photo');
    m.attr('src', $(e.target).attr('src'));
});



// вешаем на каждую ссылку обработчик
$(".filter-block a").click(function(){

    $(".activeClassUnderl").removeClass("activeClassUnderl");
    $("span.underl", this).addClass("activeClassUnderl");

    // удаляем у старого элемента, класс   activeClass
    $(".activeClass").removeClass("activeClass");
    // добавляем к ссылки по которой щёлкнули класс activeClass
    $(this).addClass("activeClass");

});


$(".right-filt ul a").click(function(){

    $(".activeClassRightFilt").removeClass("activeClassRightFilt");
    $(this).addClass("activeClassRightFilt");

});










