$(document).ready(function ($) {

    /* Progress bar */
    var pageProgress = function () {
        $(window).scroll(function () {
            var wintop = $(window).scrollTop(), docheight = $('body').height(), winheight = $(window).height();
            var totalScroll = (wintop / (docheight - winheight)) * 100;
            $(".progressBar").css("width", totalScroll + "%");
        });

    };
    pageProgress();

    /* Header animation */
    $('header').waypoint(function (direction) {

        $(this.element).addClass('fadeIn');

    });

    /* Project section animation */
    $('.content-animate').waypoint(function (direction) {

        if (direction == 'down') {
            $(this.element).addClass('fadeInUp');
        } else {
            $(this.element).removeClass('fadeInUp');
        }

    }, { offset: '75%' });
});