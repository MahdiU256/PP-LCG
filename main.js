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
        
            // Intro Alert - Third click event
            $('#introBtn').click(function() {
                $('#intro').css('top', '35vh');
                $('#introText').css('margin', '20px 10px');
                $('#introText').html("If any of the numbers you've entered is incorrect, the page will tell you which number is incorrect, by telling you whether the number selected is higher/lower than the number you've entered.");
                
                // Intro Alert - Fourth click event
                $('#introBtn').click(function() {
                    $('#intro').css('top', '40vh');
                    $('#introBtn').css('display', 'none');
                    $('#closeBtn').css('display', 'block');
                    $('#introText').html("To start playing, click on the white X on the top-right corner of the page.");

                    
                });
            });
        });
    });
});