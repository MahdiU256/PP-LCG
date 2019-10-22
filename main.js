$(document).ready(function() {
    // Intro Alert - First click event
    $('#introBtn').click(function () {
        $('#introText').css('margin', '20px 5px');
        $('#intro').css('top', '35vh');
        $('#introText').html('In this game, three numbers are randomly selected to form a combination, which you have to guess using the given text boxes.');

        
    });
});