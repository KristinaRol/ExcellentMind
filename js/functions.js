
$(window).scroll(function(){
    if ($(window).scrollTop() >= 800) {
        $('nav').addClass('fixed-top');
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-top');
        $('nav div').removeClass('visible-title');
    }
});
