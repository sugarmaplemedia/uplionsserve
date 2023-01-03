'use strict';

$(document).ready(function () {

    //HEADER

    //Menu
    var logoIsClicked = false;
    //Transition icon on hover
    $('.dadMenuIcon').hover(function() {
        $('img:nth-of-type(2)', this).toggleClass('menuIconHover');
        $('h1', this).toggleClass('hamburgerTextHover');
        $('p', this).toggleClass('menuTextHover');
    });
    //Transition donation color on hover
    $('.desktopDonateText a').hover(function() {
        $('p', this).toggleClass('donateTextHover');
    });
    //Set hamburger menu to flip sidways and expand div to reveal full set of options with page names
    $('.dadExtra').click(function() {
        $('img', this).toggleClass('activeHamburger');
        $('img:nth-of-type(2)', this).toggleClass('activeHamburgerShadow');
        $('.mobileDadMenuIcon img').toggleClass('hamburgerMenuIcons');
        $('.dadHead').toggleClass('hamburgerBlueRemove');
        if($('img', this).hasClass('activeHamburger')) {
            $('.mobileDadFullMenu').animate({top: '55px'})
            $('.mobileLogo, .mobileLogoText').animate({right: '30px'});
        } else {
            $('.mobileDadFullMenu').animate({top: '-420px'})
            $('.mobileLogo, .mobileLogoText').animate({right: '-240px'}, 200);
        }
        $('.logoBox img:nth-of-type(1)').removeClass('activeLogo');
        $('.logoBox img:nth-of-type(2)').removeClass('activeLogoBack');
        logoIsClicked = false;
    });
    //Set DAD logo to 3D rotate and display UPLS logo
    $('.logoBox').click(function () {
        if(logoIsClicked == true) {
            window.location.href = "/";
        } else {
            $('img:nth-of-type(1)', this).toggleClass('activeLogo');
            $('img:nth-of-type(2)', this).delay(250).toggleClass('activeLogoBack');
            logoIsClicked = true;
        }
        setTimeout(function () {
            $('.logoBox img:nth-of-type(1)').removeClass('activeLogo');
            $('.logoBox img:nth-of-type(2)').removeClass('activeLogoBack');
            logoIsClicked = false;
        }, 3000);
    });

    // MAIN

    //Fade in sections
    function fadeIn() {
        $('section', '.dadMain').each( function(){
            var sectionVisible = $(this).offset().top + 100;
            var windowView = $(window).scrollTop() + $(window).height();

            if(sectionVisible < windowView){
                $(this).addClass('visible');
                console.log($(this).attr('id') + "is now visible (" + sectionVisible + " > " + windowView + ")");
            }
        });
    }

    fadeIn();
    $(window).scroll( function(){
        fadeIn();
    });

    // Section hider
    // Set up hider button and active text
    $('.picturesInfoHide:first-of-type figure:nth-of-type(2)').fadeOut(0);
    $('h2:first-of-type', 'section').toggleClass('activePicturesInfo');
    // Hide/Show section
    $('.picturesInfoHide').click(function() {
        if(!$(this).hasClass('inactive')) {
            if($('figure:nth-of-type(2)', this).css('display') == 'none') {
                $('html, body').animate({
                    scrollTop: $(this).offset().top - $(this).prev().height() - 300
                }, 500);
            }
            $(this).prev().slideToggle(400,'linear');
            $('figure:nth-of-type(2)', this).fadeToggle();
            $(this).prev().prev().toggleClass('activePicturesInfo');
        }
    });
    // Wellness wheel
    let wheelIds = ['emo', 'occ', 'phys', 'soc', 'int', 'spir'];
    // Hover class toggle
    $('.wellnessWheelBox img').hover(function() {
        $(this).toggleClass($(this).attr('id') + 'Hover');
    });
    $('.wellnessWheelBox img').click(function() {
        $('.wellnessWheelBox img').removeClass('wheelHover');
        wheelIds.forEach(function(item) {
            $('#' + item).removeClass(item + 'Hover');
            $('#' + item).removeClass(item + 'Click');
            $('#' + item + 'Info').removeClass('wellnessDisplay');
        });
        $(this).addClass($(this).attr('id') + 'Click');
        $(this).addClass('wheelHover');
        $('#' + $(this).attr('id') + 'Info').addClass('wellnessDisplay');
    });

    //Footer
    //Open Contact lightbox
    $('.contactButton').click(function() {
        disableScroll();
        $('body').prepend("<div class='lightBox'></div>");
        if ($(this).attr('id') == 'ContactZoom') {
            $('.lightBox').load("/dad/contact.html #Zoom");
        } else {
            $('.lightBox').load("/dad/contact.html #Email");
        }
    });

    $('.zoomIcon').click(function() {
        disableScroll();
        $('body').prepend("<div class='lightBox'></div>");
        $('.lightBox').load("/dad/contact.html #Zoom");
    });

    $('body').on("click", ".lightBoxContainer .exitButton", function () {
        enableScroll();
        $('.lightBox').remove();
    });
});

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
