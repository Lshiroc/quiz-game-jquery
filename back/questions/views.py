from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

def get_question(request):
    questions = [
    {
        "question": "What is the speed of light in a vacuum?",
        "options": [
            "300,000 km/s",
            "500,000 km/s",
            "700,000 km/s",
            "1,000,000 km/s"
        ],
        "answer": 0
    },
    {
        "question": "Who developed the theory of relativity?",
        "options": [
            "Isaac Newton",
            "Albert Einstein",
            "Stephen Hawking",
            "Galileo Galilei"
        ],
        "answer": 1
    },
    {
        "question": "In which year was the first successful human heart transplant performed?",
        "options": [
            "1950",
            "1975",
            "1967",
            "1982"
        ],
        "answer": 2
    },
    {
        "question": "What is the largest organ in the human body?",
        "options": [
            "Liver",
            "Brain",
            "Skin",
            "Heart"
        ],
        "answer": 2
    },
    {
        "question": "Which gas makes up the majority of Earth's atmosphere?",
        "options": [
            "Oxygen",
            "Nitrogen",
            "Carbon Dioxide",
            "Argon"
        ],
        "answer": 1
    },
    {
        "question": "Who is known as the 'Father of Computer Science'?",
        "options": [
            "Bill Gates",
            "Alan Turing",
            "Steve Jobs",
            "Tim Berners-Lee"
        ],
        "answer": 1
    },
    {
        "question": "What is the capital of South Korea?",
        "options": [
            "Busan",
            "Tokyo",
            "Seoul",
            "Beijing"
        ],
        "answer": 2
    },
    {
        "question": "In chemistry, what does pH measure?",
        "options": [
            "Pressure and Heat",
            "Potential Hydrogen",
            "Particle Hardness",
            "Power of Heat"
        ],
        "answer": 1
    },
    {
        "question": "Which element has the highest melting point?",
        "options": [
            "Gold",
            "Platinum",
            "Tungsten",
            "Mercury"
        ],
        "answer": 2
    },
    {
        "question": "Who formulated the laws of motion and universal gravitation?",
        "options": [
            "Galileo Galilei",
            "Isaac Newton",
            "Johannes Kepler",
            "Nikola Tesla"
        ],
        "answer": 1
    },
    {
        "question": "What is the powerhouse of the cell?",
        "options": [
            "Nucleus",
            "Mitochondria",
            "Endoplasmic Reticulum",
            "Ribosome"
        ],
        "answer": 1
    },
    {
        "question": "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        "options": [
            "Venus",
            "Mars",
            "Jupiter",
            "Saturn"
        ],
        "answer": 0
    },
    {
        "question": "Who discovered penicillin?",
        "options": [
            "Marie Curie",
            "Alexander Fleming",
            "Louis Pasteur",
            "Joseph Lister"
        ],
        "answer": 1
    },
    {
        "question": "What is the smallest prime number?",
        "options": [
            "0",
            "1",
            "2",
            "3"
        ],
        "answer": 2
    },
    {
        "question": "Which gas is responsible for the greenhouse effect on Earth?",
        "options": [
            "Ozone",
            "Methane",
            "Carbon Monoxide",
            "Carbon Dioxide"
        ],
        "answer": 3
    },
    {
        "question": "Who developed the first successful polio vaccine?",
        "options": [
            "Albert Sabin",
            "Edward Jenner",
            "Louis Pasteur",
            "Jonas Salk",
        ],
        "answer": 3
    },
    {
        "question": "What is the chemical symbol for gold?",
        "options": [
            "Au",
            "Ag",
            "Fe",
            "Cu"
        ],
        "answer": 0
    },
    {
        "question": "Who wrote 'The Iliad' and 'The Odyssey'?",
        "options": [
            "Homer",
            "Virgil",
            "Sophocles",
            "Aristotle"
        ],
        "answer": 0
    },
    {
        "question": "What is the largest ocean on Earth?",
        "options": [
            "Atlantic Ocean",
            "Indian Ocean",
            "Southern Ocean",
            "Pacific Ocean"
        ],
        "answer": 3
    },
    {
        "question": "Who developed the first practical telephone?",
        "options": [
            "Alexander Graham Bell",
            "Thomas Edison",
            "Nikola Tesla",
            "Guglielmo Marconi"
        ],
        "answer": 0
    },
    {
        "question": "In which year did the Industrial Revolution begin?",
        "options": [
            "1750",
            "1800",
            "1850",
            "1900"
        ],
        "answer": 0
    },
    {
        "question": "What is the largest moon in our solar system?",
        "options": [
            "Europa",
            "Ganymede",
            "Titan",
            "Callisto"
        ],
        "answer": 1
    },
    {
        "question": "Which country is known as the 'Land of the Rising Sun'?",
        "options": [
            "China",
            "Japan",
            "Korea",
            "Vietnam"
        ],
        "answer": 1
    },
    {
        "question": "Who is the author of the 'Theory of Evolution'?",
        "options": [
            "Charles Darwin",
            "Gregor Mendel",
            "Alfred Russel Wallace",
            "Thomas Huxley"
        ],
        "answer": 0
    },
    {
        "question": "What is the boiling point of water in Fahrenheit?",
        "options": [
            "100°F",
            "300°F",
            "212°F",
            "500°F"
        ],
        "answer": 2
    },
    {
        "question": "Which chemical element is essential for human bone health?",
        "options": [
            "Iron",
            "Magnesium",
            "Potassium",
            "Calcium",
        ],
        "answer": 3
    },
    {
        "question": "Who discovered radium and polonium?",
        "options": [
            "Marie Curie",
            "Albert Einstein",
            "Enrico Fermi",
            "Niels Bohr"
        ],
        "answer": 0
    }]

    return JsonResponse({"questions":questions}, status=200)
