let questions;

function getQuestions() {
    $.get('https://quiz-game-jquery.vercel.app/questions/get',
        function(data, success){
            if(success) {
                questions = data.questions;
            }
        })
}

getQuestions();

let questionIndex = 0;
let selectedAnswer = {
    answer: null,
    correct: false
};

function showQuestion(question, options, answer) {
    let questionBox = $('.questionBox');
    $('.question').text(question);
    let optionsDiv = $('.options');
    optionsDiv.empty();
    
    options.forEach((option, index) => {
        let letters = 'ABCDEFG'; // for answer options
        let optionDiv = $(`<div class="option" value="${index}"></div>`);
        let letterDiv = $(`<div class="letter">${letters[index]})</div>`);
        let answerDiv = $(`<div class="optionText">${option}</div>`)
        optionDiv.append(letterDiv, answerDiv);
        optionsDiv.append(optionDiv);
    })
}

$(function(){
    $('.game').hide();

    $('.startbtn').click(function(){
        $('.startMenu').hide();
        $('.game').show();

        showQuestion(questions[0].question, questions[0].options, questions[0].answer);
    })
})

$(document).on('click', '.option', function(){
    if(selectedAnswer.correct) return;
    $('.option').removeClass('selected');
    selectedAnswer.answer = $(this).attr("value");
    $(this).addClass('selected');
    $('.submit').removeClass('passive');
})

// correct or wrong
$(document).on('click', '.submit', function(){
    if(selectedAnswer.answer == null) return;
    if(questions[questionIndex].answer == selectedAnswer.answer) {
        selectedAnswer.correct = true;
        $('.option').removeClass('selected');
        $(`.option:eq(${selectedAnswer.answer})`).addClass("correct");

        $('.submit').hide();
        $('.nextQuestion').show();

        if(questionIndex == questions.length-1) {
            $('.nextQuestion').hide();
            $('.tryagain').show();
        }
    } else {
        $(`.option:eq(${selectedAnswer.answer})`).addClass('wrong');

        setTimeout(() => {
            $(`.option:eq(${selectedAnswer.answer})`).removeClass('wrong');
        }, 500);
    }
})

$(document).on('click', '.nextQuestion', function() {
    if(questionIndex != questions.length - 1) {
        questionIndex++;
        showQuestion(questions[questionIndex].question, questions[questionIndex].options, questions[questionIndex].answer);
        selectedAnswer.answer = null;
        selectedAnswer.correct = false;
        $('.nextQuestion').hide();
        $('.submit').show();
        $('.submit').addClass('passive');
    }
})

$('.tryagain').on('click', function(){
    selectedAnswer.answer = null;
    selectedAnswer.correct = false;
    questionIndex = 0;
    showQuestion(questions[questionIndex].question, questions[questionIndex].options, questions[questionIndex].answer);
    $('.tryagain').hide();
    $('.submit').show();
    $('.submit').addClass('passive');
})

$(document).on('click', '.prev', function(){
    if(questionIndex != 0) {
        questionIndex--;
        selectedAnswer.answer = null;
        selectedAnswer.correct = false;
        showQuestion(questions[questionIndex].question, questions[questionIndex].options, questions[questionIndex].answer);
        $('.nextQuestion').hide();
        $('.tryagain').hide();
        $('.submit').show();
        $('.submit').addClass('passive');
    }
})

$(document).on('click', '.next', function(){
    if(questionIndex != questions.length - 1) {
        questionIndex++;
        selectedAnswer.answer = null;
        selectedAnswer.correct = false;
        showQuestion(questions[questionIndex].question, questions[questionIndex].options, questions[questionIndex].answer);
        $('.nextQuestion').hide();
        $('.submit').show();
        $('.submit').addClass('passive');
    }
})
