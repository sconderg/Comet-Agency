/* NAVBAR SCRIPT */
var solidNavbar = function () {
    $('nav').addClass('solid');
}
var transparentNavbar = function () {
    $('nav').removeClass('solid');
}
$(window).on('load', function () { 
    if ($(window).width() <= 974) {
        solidNavbar();
    }
    if($(window).width() > 974) {
        if($(window).scrollTop() > 90) {
            solidNavbar();
        } else {
            transparentNavbar();
        }
    } 
});
$(window).on('resize', function () {
    if ($(window).width() <= 974) {
        solidNavbar();
    } else {
        transparentNavbar();
    }    
});
$(window).on('scroll', function () {
    if($(window).width() > 974) {
        if($(window).scrollTop() > 90) {
            solidNavbar();
        } else {
            transparentNavbar();
        }
    } 
});
/* END NAVBAR */
$(function() {
    var backToTop = $('#backToTop');
    backToTop.on('click', function () {
        $('html, body').animate({scrollTop : 0},800);
        return false;
    })
});