/* NAVBAR SCRIPT */
const solidNavbar = _ => {
    $('nav').addClass('solid');
}
const transparentNavbar = _ => {
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
    const backToTop = $('#backToTop');
    backToTop.on('click', () => {
        $('html, body').animate({scrollTop : 0},800);
        return false;
    })
});