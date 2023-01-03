'use strict';

$(document).ready(function () {

    // INTRO ANIMATION
    anime({
        targets: '.landingAnim img.bg',
        rotate: 360,
        duration: 40000,
        easing: 'linear',
        loop: true
    });
    anime({
        targets: '.landingAnim div.bg',
        rotate: -360,
        duration: 120000,
        easing: 'linear',
        loop: true
    });

    // INFOGRAPHICS FUNCTION
    var i = 0;
    // hero stories
    $("#heroNext").click(function () {
        i += 1;
        if(i >= 2) {
            i = 2;
            $("#heroNext").addClass("inactive");
        }
        $("#heroPrev").removeClass("inactive");
        $(".heroImg").removeClass("activeHeroImg");
        $("#heroImg" + i).addClass("activeHeroImg");
        $(".heroBack").removeClass("activeHeroBack");
        $("#heroBack" + i).addClass("activeHeroBack");
        if(i == 1) {
            $("#heroName").html("PRESLIE");
            $("#heroText1").html("Preslie is continuing to undergo treatment at Children’s Hospital in Milwaukee, Wisconsin.");
            $("#heroText2").html("The Lions clubs of the UP can help those affected by childhood cancer to “Survive and Thrive”. The UP Lions childhood cancer program has helped many families thus far, including 4-year-old Preslie (in the photo), with funds for travel, food, and medical expenses.");
        } else if(i == 2) {
            $("#heroName").html("ABRAM");
            $("#heroText1").html("Abram was diagnosed with a choriocarcinoma brain tumor shortly after his first birthday. Despite about nine months of excellent treatment and care, he died peacefully on July 2, 2019.");
            $("#heroText2").html("As the Johnson family of Menominee mourned the death of their 22-month-old son Abram, they worked to save the money needed to create a very special gravestone. With the help of Menominee Granite Co., and Upper Peninsula Lions Clubs, they purchased a beautiful grave marker that will be engraved with the following poem written by Abram’s mother, Heidi:<br><br>We thought we would watch over you.<br>There is now no need.<br>We thought we would make a straight arrow of you.<br>You fly true without us.<br>We thought to teach you all we knew.<br>You know more now than we ever dreamed.<br>We thought we would bring you to meet the Lord.<br>You see His very face.<br>We thought we would love you forever and ever.<br>That we will.<br>We will.");
        } else if(i == 0) {
            $("#heroName").html("RYLAN");
            $("#heroText1").html("Rylan, an Upper Peninsula 5-year-old who is being treated for high-risk neuroblastoma, is one of the children the Lions have helped.");
            $("#heroText2").html("His father is very grateful for the assistance as Rylan receives treatment at the University of Michigan hospitals in Ann Arbor, including surgery, chemotherapy, bone marrow transplants, and more. This treatment requires lengthy hospitalizations, keeping Rylan and his mom away from his father and siblings for months.");
        }
    });
    $("#heroPrev").click(function () {
        i -= 1;
        if(i <= 0) {
            i = 0;
            $("#heroPrev").addClass("inactive");
        }
        $("#heroNext").removeClass("inactive");
        $(".heroImg").removeClass("activeHeroImg");
        $("#heroImg" + i).addClass("activeHeroImg");
        $(".heroBack").removeClass("activeHeroBack");
        $("#heroBack" + i).addClass("activeHeroBack");
        if(i == 1) {
            $("#heroName").html("PRESLIE");
            $("#heroText1").html("Preslie is continuing to undergo treatment at Children’s Hospital in Milwaukee, Wisconsin.");
            $("#heroText2").html("The Lions clubs of the UP can help those affected by childhood cancer to “Survive and Thrive”. The UP Lions childhood cancer program has helped many families thus far, including 4-year-old Preslie (in the photo), with funds for travel, food, and medical expenses.");
        } else if(i == 2) {
            $("#heroName").html("ABRAM");
            $("#heroText1").html("Abram was diagnosed with a choriocarcinoma brain tumor shortly after his first birthday. Despite about nine months of excellent treatment and care, he died peacefully on July 2, 2019.");
            $("#heroText2").html("As the Johnson family of Menominee mourned the death of their 22-month-old son Abram, they worked to save the money needed to create a very special gravestone. With the help of Menominee Granite Co., and Upper Peninsula Lions Clubs, they purchased a beautiful grave marker that will be engraved with the following poem written by Abram’s mother, Heidi:<br><br>We thought we would watch over you.<br>There is now no need.<br>We thought we would make a straight arrow of you.<br>You fly true without us.<br>We thought to teach you all we knew.<br>You know more now than we ever dreamed.<br>We thought we would bring you to meet the Lord.<br>You see His very face.<br>We thought we would love you forever and ever.<br>That we will.<br>We will.");
        } else if(i == 0) {
            $("#heroName").html("RYLAN");
            $("#heroText1").html("Rylan, an Upper Peninsula 5-year-old who is being treated for high-risk neuroblastoma, is one of the children the Lions have helped.");
            $("#heroText2").html("His father is very grateful for the assistance as Rylan receives treatment at the University of Michigan hospitals in Ann Arbor, including surgery, chemotherapy, bone marrow transplants, and more. This treatment requires lengthy hospitalizations, keeping Rylan and his mom away from his father and siblings for months.");
        }
    });
    // data section
    $("#dataNext").click(function () {
        i += 1;
        if(i >= 4) {
            i = 4;
            $("#dataNext").addClass("inactive");
        }
        $("#dataPrev").removeClass("inactive");
        $(".dataImg").removeClass("dataActive");
        $("#dataImg" + i).addClass("dataActive");
        if (i == 1) {
            $("#dataText1").html("According to recent figures, <span class='bold1'>11,000 children in the U.S. were diagnosed with a form of cancer in 2020.</span> Michigan diagnoses approximately 470 children per year with some form of cancer. At any given time there are approximately 2000 children in Michigan battling this dreadful disease.");
            $("#dataText2").html("The Upper Peninsula of Michigan has the largest number of cases diagnosed per capita.");
        } else if(i == 2) {
            $("#dataText1").html("Within the past few decades, cancer research has produced promising treatments for pediatric cancer. <span class='bold1'>60% of children who have had cancer, have lifelong emotional, cognitive, physical, and developmental deficits.</span> Key statistics for Childhood Cancers, The American Cancer Society's most recent estimates and statistics for cancer in children in the United States can be found <a href='https://www.cancer.org/cancer/cancer-in-children/key-statistics.html'><span class='colorb' style='font-weight: bold;'>here.</span></a>");
            $("#dataText2").html("Currently in the U.S., the recovery rate for childhood cancer is 84%.");
        } else if(i == 3) {
            $("#dataText1").html("<span class='bold1'>The Childhood Cancer program has worked hard and received support from several organizations.</span> Fundraisers and donations made by Lions, other organizations and individuals earned over $30,000. Tour Da Yoop, Eh earned over $50,000 in 2022. Graymont and Superior Health Foundation provided grants worth over $25,000. A Legacy Bequeathment has also provided funding.");
            $("#dataText2").html("In total, The U.P. Lions Serve Childhood Cancer Program has raised over $100,000 through fundraisers, individual donations, and grants!");
        } else if(i == 4) {
            $("#dataText1").html("Families found by the Childhood Cancer program, dsitributed by county.");
            $("#dataText2").html("");
        } else if(i == 0) {
            $("#dataText1").html("Since our project began, <span class='bold1'>we have seen a rise in the number of families</span> living in the Upper Peninsula of Michigan seeking help with a child battling cancer.");
            $("#dataText2").html("As of December 2021, that number has increased by more than twenty-fold!");
        }
    });
    $("#dataPrev").click(function () {
        i -= 1;
        if(i <= 0) {
            i = 0;
            $("#dataPrev").addClass("inactive");
        }
        $("#dataNext").removeClass("inactive");
        $(".dataImg").removeClass("dataActive");
        $("#dataImg" + i).addClass("dataActive");
        if (i == 1) {
            $("#dataText1").html("According to recent figures, <span class='bold1'>11,000 children in the U.S. were diagnosed with a form of cancer in 2020.</span> Michigan diagnoses approximately 470 children per year with some form of cancer. At any given time there are approximately 2000 children in Michigan battling this dreadful disease.");
            $("#dataText2").html("The Upper Peninsula of Michigan has the largest number of cases diagnosed per capita.");
        } else if(i == 2) {
            $("#dataText1").html("Within the past few decades, cancer research has produced promising treatments for pediatric cancer. <span class='bold1'>60% of children who have had cancer, have lifelong emotional, cognitive, physical, and developmental deficits.</span> Key statistics for Childhood Cancers, The American Cancer Society's most recent estimates and statistics for cancer in children in the United States can be found <a href='https://www.cancer.org/cancer/cancer-in-children/key-statistics.html'><span class='colorb' style='font-weight: bold;'>here.</span></a>");
            $("#dataText2").html("Currently in the U.S., the recovery rate for childhood cancer is 84%.");
        } else if(i == 3) {
            $("#dataText1").html("<span class='bold1'>The Childhood Cancer program has worked hard and received support from several organizations.</span> Fundraisers and donations made by Lions, other organizations and individuals earned over $30,000. Tour Da Yoop, Eh earned over $50,000 in 2022. Graymont and Superior Health Foundation provided grants worth over $25,000. A Legacy Bequeathment has also provided funding.");
            $("#dataText2").html("In total, The U.P. Lions Serve Childhood Cancer Program has raised over $100,000 through fundraisers, individual donations, and grants!");
        } else if(i == 4) {
            $("#dataText1").html("Families found by the Childhood Cancer program, dsitributed by county.");
            $("#dataText2").html("");
        } else if(i == 0) {
            $("#dataText1").html("Since our project began, <span class='bold1'>we have seen a rise in the number of families</span> living in the Upper Peninsula of Michigan seeking help with a child battling cancer.");
            $("#dataText2").html("As of December 2021, that number has increased by more than twenty-fold!");
        }
    });

    // HOW WE HELP MENU
    // load Press Center content in viewport
    $('#displayContent').load('/childhoodcancer/media/helpMenu/pressCenter.html');
    // close drop-down menu
    $('#mobileDropDown').hide();
    // make button active
    $('.button').click(function() {
         $(this).addClass('activeButton');
         $(this).removeClass('inactiveButton');
         $('.button').not(this).addClass('inactiveButton');
         $('.button').not(this).removeClass('activeButton');
         $('.button p').removeClass('activeText');
         $(this).children('p').addClass('activeText');
    });
    // open/close on expand button press
    var isExpanded = false;
    $('#mobileExpandBtn').click(function() {
         if(!isExpanded) {
              isExpanded = true;
             $('#mobileDropDown').animate({
                  opacity: 'show'
             });
             $('#dropDownArrow').removeClass('arrowAnimateOut');
             $('#dropDownArrow').addClass('arrowAnimateIn');
         }
         else {
             isExpanded = false;
             $('#mobileDropDown').animate({
                  opacity: 'hide'
             });
             $(this).addClass('inactiveButton')
             $(this).removeClass('activeButton')
             $('#howWeHelpMenuTextBtn').addClass('activeButton')
             $('#howWeHelpMenuTextBtn').removeClass('inactiveButton')
             $('#howWeHelpMenuTextBtn p').addClass('activeText')
             $(this).children('p').removeClass('activeText');
             $('#dropDownArrow').removeClass('arrowAnimateIn');
             $('#dropDownArrow').addClass('arrowAnimateOut');
         }
    });
    // close on main button press
    $('#howWeHelpMenuTextBtn').click(function() {
        $('#mobileDropDown').animate({
            opacity: 'hide'
        });
        $('#dropDownArrow').removeClass('arrowAnimateIn');
        $('#dropDownArrow').addClass('arrowAnimateOut');
    });
    // update main button then close
    $('.dropDownText').click(function() {
        isExpanded = false;
        $('#howWeHelpMenuText').text($(this).text());
        $(this).css('color', 'var(--a)');
        $('.dropDownText').not(this).css('color', 'var(--b)');
        $('#mobileDropDown').animate({
        opacity: 'hide'
        });
        $('#dropDownArrow').removeClass('arrowAnimateIn');
        $('#dropDownArrow').addClass('arrowAnimateOut');
        //Make main button active
        $('.howWeHelpMenuTextBtn').addClass('activeButton');
        $('.howWeHelpMenuTextBtn').removeClass('inactiveButton');
        $('.button', '.howWeHelpMenu').not('.howWeHelpMenuTextBtn').addClass('inactiveButton');
        $('.button', '.howWeHelpMenu').not('.howWeHelpMenuTextBtn').removeClass('activeButton');
        $('.button p').removeClass('activeText');
        $('.howWeHelpMenuTextBtn').children('p').addClass('activeText');
    });
    // load animation

    function loadHelpMenu(fileName) {
        $('#displayContent').animate({'opacity': '0.01'}, 250);
        setTimeout(function() {
            $('#displayContent').load("/childhoodcancer/media/helpMenu/" + fileName + ".html");
        }, 250);
        setTimeout(function() {
            $('#displayContent').animate({'opacity': '1'}, 250);
            $('.howWeHelpMenuDisplay').scrollTop(0);
        }, 500);
    }

    // load drop-down menu item
    $('.dropDownText').click(function() {
        $('#howWeHelpMenuTextBtn').attr('id', $(this).attr('id'));
        loadHelpMenu($(this).attr('id'));
    });
    // load Press Center
    $('#menuPressCenterBtn').click(function() {
        loadHelpMenu("pressCenter");
    });
    // load Media
    $('#menuMediaBtn').click(function() {
        loadHelpMenu("media");
    });
    // load Partners
    $('#menuPartnersBtn').click(function() {
        loadHelpMenu("partners");
    });
    // load Fundraising
    $('#menuFundraisingBtn').click(function() {
        loadHelpMenu("fundraising");
    });
    // load Photo Gallery
    $('#menuPhotoBtn').click(function() {
        loadHelpMenu("photoGallery");
    });

});
