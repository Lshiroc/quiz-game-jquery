let questions;

async function getQuestions() {
    // http://localhost:8000/questions/get/
    let resp = await $.get('https://quiz-game-jquery-back.vercel.app/questions/get/',
        function(data, success){
            if(success) {
                questions = data.questions;
            }
        })

    if(resp) {
        return true;
    } else {
        return false;
    }
}

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
    $('.startbtn').click(async function(){
        if(questions) {
            $('.startMenu').hide();
            $('.game').css("display", "flex");
            showQuestion(questions[0].question, questions[0].options, questions[0].answer);
        } else {
            $('#loading').show();
            $('#loading').css("animation", "load 1s infinite ease-in-out");
            let resp = await getQuestions();
            if(resp) {
                $("#loading").hide();
                $("#loading").css("animation", "none");
                $('.startbtn').click();
            }
        }

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


// Next button functionality
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


// Try again after finishing
$('.tryagain').on('click', function(){
    selectedAnswer.answer = null;
    selectedAnswer.correct = false;
    questionIndex = 0;
    showQuestion(questions[questionIndex].question, questions[questionIndex].options, questions[questionIndex].answer);
    $('.tryagain').hide();
    $('.submit').show();
    $('.submit').addClass('passive');
})

// Go to previous question if possible
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

// Go to next questions if possible
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
