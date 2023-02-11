'use strict';

$(document).ready(function () {
    $('#ittupParticipateBtn').click(function() {
        $(window).scrollTop($('#ittupParticipate').offset().top - 225);
    });
});
