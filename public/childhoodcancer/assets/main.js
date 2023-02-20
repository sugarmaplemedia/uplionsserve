'use strict';

$(document).ready(function () {

    // MOBILE MENU

    $("#navToggle").click(function () {
        if ($(window).width() < 750) {
            $("#navToggle").toggleClass("navToggleOn");
            $("header").toggleClass("navOn");
            if (eventsMenuTracker == 1)
                closeInitiatives();

            $(".menuItem:not(#eventsTab)").click(function () {
                $("#navToggle").removeClass("navToggleOn");
                $("header").removeClass("navOn");
                checkInitiativesTracker();
            });

            $('#eventsTab').click(function() {
                checkInitiativesTracker();
            });
            $('#eventsSelector').css('top', ($('.menuItem:nth-of-type(2)').height()+10));

            var eventsMenuTracker = 0;
            function openInitiatives() {
                eventsMenuTracker = 1;
                anime({
                    targets: '.initialItem',
                    translateX: '-80vw',
                    duration: 100,
                    easing: 'easeOutCirc'
                });
                anime({
                    targets: '#eventsSelector',
                    rotateY: 180,
                    duration: 2000
                });
                anime({
                    targets: '.eventsItem',
                    translateY: '-22vh',
                    opacity: 1,
                    duration: 200,
                    ease: 'easeOutCirc'
                });
                $('.eventsItem').addClass('eventsItemActive');
            }
            function closeInitiatives() {
                eventsMenuTracker = 0;
                anime({
                    targets: '.initialItem',
                    translateX: '0vw',
                    duration: 100,
                    easing: 'easeInCirc'
                });
                anime({
                    targets: '#eventsSelector',
                    rotateY: 0,
                    duration: 2000
                });
                anime({
                    targets: '.eventsItem',
                    translateY: '0',
                    opacity: 0,
                    duration: 200,
                    ease: 'easeOutCirc'
                });
                $('.eventsItem').removeClass('eventsItemActive');
            }
            function checkInitiativesTracker() {
                if (eventsMenuTracker == 0)
                    openInitiatives();
                else
                    closeInitiatives();
        }
        }
    });

    // DESKTOP MENU

    $('#eventsTab, .eventsMenuDesktop').hover(function () {
        $('.eventsMenuDesktop').toggleClass('eventsMenuDesktopActive');
        $('.eventsMenuDesktop').css('top', $('header').offset().top - $(window).scrollTop() + 73);
    })

    // SCROLLING

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});
