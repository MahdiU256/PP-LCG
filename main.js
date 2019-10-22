$(document).ready(function() {
    // Intro Alert - First click event
    $('#introBtn').click(function () {
        $('#introText').css('margin', '20px 5px');
        $('#intro').css('top', '35vh');
        $('#introText').html('In this game, three numbers are randomly selected to form a combination, which you have to guess using the given text boxes.');
        
        // Intro Alert - Second click event
        $('#introBtn').click(function () {
            $('#intro').css('top', '40vh');
            $('#introText').html('The numbers will be between 1 and 99. When you have made your guess, click on the "Submit Answer" button.');

            
        });
    });
});