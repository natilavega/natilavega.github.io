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

});