var quizQuestions = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: 'Hypertext Markup Language'
    },
    {
        question: 'Who is making the web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: 'The World Wide Web Consortium'
    },
    {
        question: 'Choose the correct HTML element for the largest heading?',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: '<h1>'
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: '<br>'
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background=yellow>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text',
        option1: '<b>',
        option2: '<important>',
        option3: '<strong>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text',
        option1: '<italic>',
        option2: '<em>',
        option3: '<i>',
        correctOption: '<em>'
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a href="http://www.w3schools.com">',
        option2: '<a url="http://www.w3schools.com">',
        option3: '<a>http://www.w3schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">w3SchoolJs</a>'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: '/'
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
        option1: '<a href="url" target="new">',
        option2: '<a href="url" new>',
        option3: '<a href="url" target="_blank">',
        correctOption: '<a href="url" target="_blank">'
    }
];

var index = 0;

function nextQuestion() {
    if (index < quizQuestions.length) {
        var getQuestions = document.querySelector('#question');
        getQuestions.innerText = quizQuestions[index].question;

        var getOption1 = document.querySelector('#opt1 + label');
        getOption1.innerText = quizQuestions[index].option1;

        var getOption2 = document.querySelector('#opt2 + label');
        getOption2.innerText = quizQuestions[index].option2;

        var getOption3 = document.querySelector('#opt3 + label');
        getOption3.innerText = quizQuestions[index].option3;

        // Clear the selected radio button
        var radios = document.getElementsByName('quiz');
        for (var i = 0; i < radios.length; i++) {
            radios[i].checked = false;
        }

        index++;
    } else {
        alert("You have completed the quiz!");
    }
}

nextQuestion();


