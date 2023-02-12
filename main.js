'use strict';

$(document).ready(function () {

    // MENU
    var isClicked = false;
    function openHamburger() {
        anime({
            targets: '#topBun',
            translateY: 70
        });
        anime({
            targets: '#bottomBun',
            translateY: -70
        });
        anime({
            targets: ".projectHeaderDropdownListMobile a",
            opacity: 1,
            duration: 200,
            easing: 'linear',
            begin: function () {
                $('a', '.projectHeaderDropdownListMobile').css('display', 'inline-block');
            }
        });
        isClicked = true;
    }
    function closeHamburger() {
        anime({
            targets: '#topBun',
            translateY: 0
        });
        anime({
            targets: '#bottomBun',
            translateY: 0
        });
        anime({
            targets: ".projectHeaderDropdownListMobile a",
            opacity: 0,
            duration: 200,
            easing: 'linear',
            complete: function () {
                $('a', '.projectHeaderDropdownListMobile').css('display', 'none');
            }
        });
        isClicked = false;
    }

    $('.hamburger').click(function () {
        if (!isClicked) {
            openHamburger();
            $('.headerBehind').addClass('headerBehindOpen');
            $("#projectHeaderArrow").addClass("projectHeaderArrowOpen");
            $("#projectHeaderDropdownList").addClass("projectHeaderDropdownListOpen");
            $("#cause").addClass("causeDropdownOpen");
        } else {
            $('.headerBehind').removeClass('headerBehindOpen');
            $("#projectHeaderArrow").removeClass("projectHeaderArrowOpen");
            $("#projectHeaderDropdownList").removeClass("projectHeaderDropdownListOpen");
            $("#cause").removeClass("causeDropdownOpen");
            closeHamburger();
        }
    });

    $("#projectHeaderDropdown").click(function () {
        $('.headerBehind').toggleClass('headerBehindOpen');
        $("#projectHeaderArrow").toggleClass("projectHeaderArrowOpen");
        $("#projectHeaderDropdownList").toggleClass("projectHeaderDropdownListOpen");
        $("#cause").toggleClass("causeDropdownOpen");
        console.log("Toggle class function executed.");
    });

    $("header a").click(function () {
        $('.headerBehind').removeClass('headerBehindOpen');
        $("#projectHeaderArrow").removeClass("projectHeaderArrowOpen");
        $("#projectHeaderDropdownList").removeClass("projectHeaderDropdownListOpen");
        $("#cause").removeClass("causeDropdownOpen");
        closeHamburger();
        console.log("Remove class function executed.");
    });

    $(".headerBehind").click(function () {
        $('.headerBehind').removeClass('headerBehindOpen');
        $("#projectHeaderArrow").removeClass("projectHeaderArrowOpen");
        $("#projectHeaderDropdownList").removeClass("projectHeaderDropdownListOpen");
        $("#cause").removeClass("causeDropdownOpen");
        closeHamburger();
        console.log("Remove class function executed.");
    });

    // HEADER CHANGE BASED ON SCROLL

    $(function() {
        $(window).scroll(function() {
            var scrolled = $(window).scrollTop();
            if (scrolled >= 50) {
                $('header').addClass('onScroll');
                console.log('You scrolled.');
            } else {
                $('header').removeClass('onScroll');
                console.log('Back up top.');
            }
        });
    });

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
