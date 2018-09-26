
/*  
Click to Start
Timer begins at 120 seconds and countdown
Player goes through all 10 questions
player can only guess one answer per question
Once completed, player submit's answers
HTML is updated with users score
Score includes: time spent, answers correct, and answers wrong */

// --------------------------------------------------------------- 

var questions = [{
    ques: "When did the Los Angeles Dodgers last win a World Series?",
    ans: ["2009", "1996", "2017", "1988"],
    name: "WorldSeries",
    correct: "1988",
    divClass: ".WorldSeries"
},
{
    ques: "What year did Clayton Kershaw throw a no-hitter?",
    ans: ["2013", "2014", "2015", "2016"],
    name: "KershNoNo",
    correct: "2014",
    divClass: ".KershNoNo"
},
{
    ques: "Where was the team located before moving to Los Angeles in 1958?",
    ans: ["Colorado", "Anaheim", "Brooklyn", "Ohio"],
    name: "Brooklyn",
    correct: "Brooklyn",
    divClass: ".Brooklyn"
},
{
    ques: "What number was Jackie Robinson's jersey number?",
    ans: ["24", "42", "34", "23"],
    name: "Jackie",
    correct: "42",
    divClass: ".Jackie"
},
{
    ques: "Who threw the Dodgers only perfect game in 1965?",
    ans: ["Sandy Koufax", "Clayton Kershaw", "Hideo Nomo", "Fernando Valenzuela"],
    name: "PerfectGame",
    correct: "Sandy Koufax",
    divClass: ".PerfectGame"
},
{
    ques: "Dodger Stadium also goes by the name of?",
    ans: ["Fenway Park", "Wrigley Stadium", "Angel Stadium", "Chavez Ravine"],
    name: "Stadium",
    correct: "Chavez Ravine",
    divClass: ".Stadium"
},
{
    ques: "What Dodger won Rookie of the Year in 2017?",
    ans: ["Joc Pederson", "Max Muncy", "Cody Bellinger", "Cory Seager"],
    name: "ROY",
    correct: "Cody Bellinger",
    divClass: ".ROY"
},
{
    ques: "Who hit a historic game winning homerun in the 1988 World Series ?",
    ans: ["Orel Hershiser", "Kirk Gibson", "Mike Scioscia", "Steve Sax"],
    name: "HomeRun",
    correct: "Kirk Gibson",
    divClass: ".HomeRun"
},
{
    ques: "When was the Dodgers last 100 win season?",
    ans: ["2017", "1962", "1975", "2001"],
    name: "Wins",
    correct: "2017",
    divClass: ".Wins"
},
{
    ques: "Who was the Manager during the 1988 World Series?",
    ans: ["Tony La Russa", "Joe Torre", "Tommy Lasorda", "Dave Roberts"],
    name: "Manager",
    correct: "Tommy Lasorda",
    divClass: ".Manager"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(120);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
},1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz