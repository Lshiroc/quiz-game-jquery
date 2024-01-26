
let questions = [
    {
        "question": "Where is it Illegal to die?",
        "options": [
            "New York",
            "Nigeria",
            "Longyearbyen",
            "Italy"
        ],
        "answer": 2
    },
    {
        "question": "In which year did the United Nations officially come into existence?",
        "options": [
            "1945",
            "1955",
            "1965",
            "1975"
        ],
        "answer": 0
    },
    {
        "question": "What is the capital city of Brazil?",
        "options": [
            "Rio de Janeiro",
            "Brasília",
            "São Paulo",
            "Buenos Aires"
        ],
        "answer": 1
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "options": [
            "Earth",
            "Mars",
            "Venus",
            "Jupiter"
        ],
        "answer": 1
    },
    {
        "question": "Who is the author of 'To Kill a Mockingbird'?",
        "options": [
            "J.K. Rowling",
            "Harper Lee",
            "Ernest Hemingway",
            "George Orwell"
        ],
        "answer": 1
    },
    {
        "question": "What is the largest mammal in the world?",
        "options": [
            "Elephant",
            "Blue Whale",
            "Giraffe",
            "Hippopotamus"
        ],
        "answer": 1
    },
    {
        "question": "Which element has the chemical symbol 'O'?",
        "options": [
            "Oxygen",
            "Gold",
            "Iron",
            "Silver"
        ],
        "answer": 0
    },
    {
        "question": "Who painted the Mona Lisa?",
        "options": [
            "Vincent van Gogh",
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Claude Monet"
        ],
        "answer": 2
    },
    {
        "question": "What is the capital of Japan?",
        "options": [
            "Seoul",
            "Beijing",
            "Tokyo",
            "Bangkok"
        ],
        "answer": 2
    },
    {
        "question": "What is the currency of Australia?",
        "options": [
            "Dollar",
            "Euro",
            "Yen",
            "Pound"
        ],
        "answer": 0
    },
    {
        "question": "Who wrote 'Romeo and Juliet'?",
        "options": [
            "Charles Dickens",
            "William Shakespeare",
            "Jane Austen",
            "Emily Brontë"
        ],
        "answer": 1
    }
];

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
