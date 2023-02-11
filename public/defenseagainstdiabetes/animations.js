'use strict';

$(document).ready(function () {

    // HEADER

    $('a.desktopDadMenuIcon').hover(function () {
        gsap.to($('img', this), {duration: 0.15, y: -5, ease: "linear"});
        gsap.to($('p', this), {duration: 0.15, y: 5, ease: "linear"});
    }, function () {
        gsap.to($('img', this), {duration: 0.5, y: 0, ease: "linear"});
        gsap.to($('p', this), {duration: 0.25, y: 0, ease: "bounce"});
    });

    $('img', '.socialIconBox').hover(function () {
        gsap.to($(this), {duration: 0.2, y: -5, ease: "linear"});
    }, function () {
        gsap.to($(this), {duration: 0.2, y: 0, ease: "power0"});
    });

    $('#DonateButton').hover(function () {
        gsap.to($('.donateSubText'), {duration: 0.2, autoAlpha: 1, ease: "linear"});
    }, function () {
        gsap.to($('.donateSubText'), {duration: 0.2, autoAlpha: 0, ease: "power0"});
    });



    // AWARENESS

    $('.toolkit').hover(function () {
        gsap.to($('img', this), {duration: 0.25, y: -10, ease: "linear"});
    }, function () {
        gsap.to($('img', this), {duration: 0.5, y: 0, ease: "bounce"});
    });

    $('.flyerBox').hover(function () {
        gsap.to($(this), {duration: 0.1, y: -10, ease: "linear"});
    }, function () {
        gsap.to($(this), {duration: 0.15, y: 0, ease: "power2"});
    });

    $('button', '.snapButtonsBox').hover(function () {
        gsap.to($(this), {duration: 0.1, y: -2, ease: "linear"});
    }, function () {
        gsap.to($(this), {duration: 0.1, y: 0, ease: "power2"});
    });


    // PAGE BOTTOM

    $('div', '.motivationalMessage').hover(function () {
        gsap.to($(this), {duration: 0.25, scale: 1.4, x: -20, ease: "linear"});
    }, function () {
        gsap.to($(this), {duration: 0.5, scale: 1, x: 0, ease: "bounce"});
    });

    $('img', '.testimonial').hover(function () {
        gsap.to($(this), {duration: 0.1, y: -10, ease: "linear"});
    }, function () {
        gsap.to($(this), {duration: 0.15, y: 0, ease: "power2"});
    });


    // FOOTER

    $('a', '.serve').hover(function () {
        gsap.to($(this), {duration: 0.1, rotate: -10, scale: 1.3, ease: "linear"});
    }, function () {
        gsap.to($(this), {duration: 0.1, rotate: 0, ease: "linear"});
        gsap.to($(this), {duration: 0.25, scale: 1, ease: "power2"});
    });

    $('.contactButton').hover(function () {
        gsap.to($(this), {duration: 0.4, y: -10, backgroundColor: "rgb(200,235,244)", ease: "power2"});
        gsap.to($('img', this), {duration: 0.3, rotate: 10, ease: "power0"});
    }, function () {
        gsap.to($(this), {duration: 0.4, y: 0, backgroundColor: "rgb(140, 213, 232)", ease: "bounce"});
        gsap.to($('img', this), {duration: 0.3, rotate: 0, ease: "power0"});
    });

    $('img', '.dadInfoImgs').hover(function () {
        gsap.to($(this), {duration: 0.1, y: -4, ease: "linear"});
    }, function () {
        gsap.to($(this), {duration: 0.1, y: 0, ease: "linear"});
    });

    $('div', '.flexPartnersList').hover(function () {
        gsap.to($(this), {duration: 0.1, y: -4, ease: "linear"});
    }, function () {
        gsap.to($(this), {duration: 0.1, y: 0, ease: "linear"});
    });

    $('a', '.dadClaimers').hover(function () {
        gsap.to($(this), {duration: 0.1, y: -4, ease: "linear"});
    }, function () {
        gsap.to($(this), {duration: 0.1, y: 0, ease: "linear"});
    });

});
