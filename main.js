let r1 = Math.floor((Math.random() * 98) + 1);
let r2 = Math.floor((Math.random() * 98) + 1);
let r3 = Math.floor((Math.random() * 98) + 1);

function intro1() {
	$('#introText').css('margin', '20px 5px');
	$('#intro').css('top', '35vh');
	$('#introText').html(
		'In this game, three numbers are randomly selected to form a combination, which you have to guess by typing your guesses into the given boxes.'
	);

	// Intro Alert - Second click event
	$('#introBtn').click(intro2);
}

function intro2() {
    $('#intro').css('top', '35vh');
    $('#introText').html(
        'The numbers will be between 1 and 99. When you have made your guess, click on the "Submit Answer" button.'
    );

    // Intro Alert - Third click event
    $('#introBtn').click(intro3);
}

function intro3() {
    $('#intro').css('top', '35vh');
    $('#introText').css('margin', '20px 10px');
    $('#introText').html(
        "If any of the numbers you've entered is incorrect, the page will tell you which number is incorrect, by telling you whether the number selected is higher/lower than the number you've entered."
    );

    // Intro Alert - Fourth click event
    $('#introBtn').click(intro4);
}

function intro4() {
    $('#intro').css('top', '40vh');
    $('#introBtn').css('display', 'none');
    $('#closeBtn').css('display', 'block');
    $('#introText').html(
        'To start playing, click on the white X on the top-right corner of the page.'
    );

    // Intro Alert - Fifth click event
    $('#closeBtn').click(intro5);
}

function intro5() {
    $('#alertContainer').css('display', 'none');
    $('#container').css('display', 'block');
}

$(document).ready(function() {
	// Intro Alert - First click event
	$('#introBtn').click(intro1);
});
