/* ===================================
   QUIZ SYSTEM - JAVASCRIPT
   =================================== */

// Quiz Data Structure
const quizData = {
    web: {
        name: 'Web Development',
        questions: [
            {
                id: 1,
                text: 'What does HTML stand for?',
                image: null,
                options: [
                    'Hyper Text Markup Language',
                    'High Tech Modern Language',
                    'Home Tool Markup Language',
                    'Hyperlinks and Text Markup Language'
                ],
                correct: 0
            },
            {
                id: 2,
                text: 'Which CSS property is used to control the spacing inside an element?',
                image: null,
                options: [
                    'margin',
                    'padding',
                    'border-spacing',
                    'line-height'
                ],
                correct: 1
            },
            {
                id: 3,
                text: 'What is the primary purpose of JavaScript in web development?',
                image: null,
                options: [
                    'Styling web pages',
                    'Adding interactivity to web pages',
                    'Creating server-side logic',
                    'Managing databases'
                ],
                correct: 1
            },
            {
                id: 4,
                text: 'Which of the following is NOT a valid CSS selector?',
                image: null,
                options: [
                    '.class',
                    '#id',
                    '&element',
                    'element'
                ],
                correct: 2
            },
            {
                id: 5,
                text: 'What does the "box model" in CSS consist of?',
                image: null,
                options: [
                    'Margin, Padding, Border, Content',
                    'Width, Height, Color, Background',
                    'Display, Position, Float, Clear',
                    'Flex, Grid, Align, Justify'
                ],
                correct: 0
            },
            {
                id: 6,
                text: 'Which JavaScript method is used to add a new element to the DOM?',
                image: null,
                options: [
                    'appendChild()',
                    'addElement()',
                    'insertElement()',
                    'createNewElement()'
                ],
                correct: 0
            },
            {
                id: 7,
                text: 'What is the correct syntax for a JavaScript arrow function?',
                image: null,
                options: [
                    '(x) => { return x * 2; }',
                    'function(x) -> x * 2',
                    'func x => x * 2',
                    'x => return x * 2'
                ],
                correct: 0
            },
            {
                id: 8,
                text: 'Which HTML element is used to specify the main heading of a page?',
                image: null,
                options: [
                    '<heading>',
                    '<h1>',
                    '<head>',
                    '<title>'
                ],
                correct: 1
            },
            {
                id: 9,
                text: 'What is the purpose of the viewport meta tag?',
                image: null,
                options: [
                    'Control layout on browsers',
                    'Specify character encoding',
                    'Define the document language',
                    'Link external stylesheets'
                ],
                correct: 0
            },
            {
                id: 10,
                text: 'Which CSS display property is used for flexible layouts?',
                image: null,
                options: [
                    'block',
                    'inline',
                    'flex',
                    'static'
                ],
                correct: 2
            }
        ]
    },
    python: {
        name: 'Python Programming',
        questions: [
            {
                id: 1,
                text: 'What is the correct way to create a list in Python?',
                image: null,
                options: [
                    'list = [1, 2, 3]',
                    'list = (1, 2, 3)',
                    'list = {1, 2, 3}',
                    'list = <1, 2, 3>'
                ],
                correct: 0
            },
            {
                id: 2,
                text: 'Which function is used to find the length of a list?',
                image: null,
                options: [
                    'size()',
                    'len()',
                    'length()',
                    'count()'
                ],
                correct: 1
            },
            {
                id: 3,
                text: 'What does the "def" keyword do in Python?',
                image: null,
                options: [
                    'Defines a variable',
                    'Defines a function',
                    'Defines a class',
                    'Defines a constant'
                ],
                correct: 1
            },
            {
                id: 4,
                text: 'Which of these is NOT a Python data type?',
                image: null,
                options: [
                    'string',
                    'integer',
                    'array',
                    'dictionary'
                ],
                correct: 2
            },
            {
                id: 5,
                text: 'What is the correct syntax for a for loop in Python?',
                image: null,
                options: [
                    'for i in range(5):',
                    'for i to 5:',
                    'for(i = 0; i < 5; i++):',
                    'for i = 1 to 5:'
                ],
                correct: 0
            },
            {
                id: 6,
                text: 'Which method is used to add an element to a list?',
                image: null,
                options: [
                    'add()',
                    'append()',
                    'insert()',
                    'both append and insert'
                ],
                correct: 3
            },
            {
                id: 7,
                text: 'What is the output of print(2 ** 3)?',
                image: null,
                options: [
                    '5',
                    '6',
                    '8',
                    '9'
                ],
                correct: 2
            },
            {
                id: 8,
                text: 'How do you create a dictionary in Python?',
                image: null,
                options: [
                    'dict = {key: value}',
                    'dict = [key: value]',
                    'dict = (key: value)',
                    'dict = <key: value>'
                ],
                correct: 0
            },
            {
                id: 9,
                text: 'Which module is used for working with file systems?',
                image: null,
                options: [
                    'filesystem',
                    'os',
                    'file',
                    'system'
                ],
                correct: 1
            },
            {
                id: 10,
                text: 'What is the purpose of the __init__ method in a class?',
                image: null,
                options: [
                    'Initialize the class',
                    'Initialize an object',
                    'Define class variables',
                    'Define static methods'
                ],
                correct: 1
            }
        ]
    },
    database: {
        name: 'Database Design',
        questions: [
            {
                id: 1,
                text: 'What does SQL stand for?',
                image: null,
                options: [
                    'Standard Question Language',
                    'Structured Query Language',
                    'Simple Query Language',
                    'System Query Language'
                ],
                correct: 1
            },
            {
                id: 2,
                text: 'Which SQL keyword is used to retrieve data?',
                image: null,
                options: [
                    'FETCH',
                    'GET',
                    'SELECT',
                    'RETRIEVE'
                ],
                correct: 2
            },
            {
                id: 3,
                text: 'What is a primary key?',
                image: null,
                options: [
                    'A key that is frequently used',
                    'A unique identifier for a record',
                    'A key used for sorting',
                    'A key for encryption'
                ],
                correct: 1
            },
            {
                id: 4,
                text: 'Which type of join returns only matching records?',
                image: null,
                options: [
                    'LEFT JOIN',
                    'RIGHT JOIN',
                    'INNER JOIN',
                    'FULL JOIN'
                ],
                correct: 2
            },
            {
                id: 5,
                text: 'What is normalization?',
                image: null,
                options: [
                    'Making data random',
                    'Organizing data to reduce redundancy',
                    'Encrypting data',
                    'Compressing data'
                ],
                correct: 1
            },
            {
                id: 6,
                text: 'Which normal form is highest?',
                image: null,
                options: [
                    '1NF',
                    '2NF',
                    '3NF',
                    'BCNF'
                ],
                correct: 3
            },
            {
                id: 7,
                text: 'What is a foreign key?',
                image: null,
                options: [
                    'A key used in another country',
                    'A reference to another table\'s primary key',
                    'A duplicate primary key',
                    'A temporary key'
                ],
                correct: 1
            },
            {
                id: 8,
                text: 'Which SQL clause is used to filter records?',
                image: null,
                options: [
                    'SORT',
                    'FILTER',
                    'WHERE',
                    'CONDITION'
                ],
                correct: 2
            },
            {
                id: 9,
                text: 'What is an index in a database?',
                image: null,
                options: [
                    'A list of all records',
                    'A structure for faster data retrieval',
                    'A backup copy',
                    'A constraint on data'
                ],
                correct: 1
            },
            {
                id: 10,
                text: 'Which database is NoSQL?',
                image: null,
                options: [
                    'MySQL',
                    'PostgreSQL',
                    'MongoDB',
                    'Oracle'
                ],
                correct: 2
            }
        ]
    },
    oop: {
        name: 'Object-Oriented Programming',
        questions: [
            {
                id: 1,
                text: 'What is encapsulation?',
                image: null,
                options: [
                    'Wrapping data and methods into a single unit',
                    'Hiding implementation details',
                    'Creating objects from classes',
                    'Both A and B'
                ],
                correct: 3
            },
            {
                id: 2,
                text: 'What is inheritance?',
                image: null,
                options: [
                    'Creating multiple objects',
                    'A mechanism to derive a class from another class',
                    'Combining multiple classes',
                    'Creating an interface'
                ],
                correct: 1
            },
            {
                id: 3,
                text: 'What is polymorphism?',
                image: null,
                options: [
                    'Many forms',
                    'Ability to take multiple forms',
                    'Creating multiple objects',
                    'Both A and B'
                ],
                correct: 3
            },
            {
                id: 4,
                text: 'What is abstraction?',
                image: null,
                options: [
                    'Creating abstract classes',
                    'Hiding complex implementation details',
                    'Defining methods without implementation',
                    'All of the above'
                ],
                correct: 3
            },
            {
                id: 5,
                text: 'What is a class?',
                image: null,
                options: [
                    'An instance of an object',
                    'A blueprint for creating objects',
                    'A method of an object',
                    'A type of variable'
                ],
                correct: 1
            },
            {
                id: 6,
                text: 'What is an object?',
                image: null,
                options: [
                    'A blueprint',
                    'An instance of a class',
                    'A type of class',
                    'A method'
                ],
                correct: 1
            },
            {
                id: 7,
                text: 'What is a constructor?',
                image: null,
                options: [
                    'A method that builds a class',
                    'A method that initializes an object',
                    'A method that creates objects',
                    'A method that destroys objects'
                ],
                correct: 1
            },
            {
                id: 8,
                text: 'What is method overriding?',
                image: null,
                options: [
                    'Using the same method name in multiple classes',
                    'Changing the implementation of a method in a subclass',
                    'Creating multiple methods with same name',
                    'Both A and B'
                ],
                correct: 3
            },
            {
                id: 9,
                text: 'What is method overloading?',
                image: null,
                options: [
                    'Creating multiple methods with same name but different parameters',
                    'Changing method implementation',
                    'Creating multiple objects',
                    'Inheriting methods'
                ],
                correct: 0
            },
            {
                id: 10,
                text: 'What is an interface?',
                image: null,
                options: [
                    'A way to achieve abstraction',
                    'A contract for classes',
                    'A collection of method declarations',
                    'All of the above'
                ],
                correct: 3
            }
        ]
    },
    ai: {
        name: 'Artificial Intelligence',
        questions: [
            {
                id: 1,
                text: 'What is Machine Learning?',
                image: null,
                options: [
                    'Learning about machines',
                    'A subset of AI where systems learn from data',
                    'Programming machines',
                    'Building robots'
                ],
                correct: 1
            },
            {
                id: 2,
                text: 'What is supervised learning?',
                image: null,
                options: [
                    'Learning without labels',
                    'Learning with labeled training data',
                    'Learning from humans',
                    'Learning step by step'
                ],
                correct: 1
            },
            {
                id: 3,
                text: 'What is unsupervised learning?',
                image: null,
                options: [
                    'Learning without supervision',
                    'Learning without labeled data',
                    'Learning from unlabeled data',
                    'Both B and C'
                ],
                correct: 3
            },
            {
                id: 4,
                text: 'What is a neural network?',
                image: null,
                options: [
                    'A network of neurons in the brain',
                    'A computational model inspired by biological neurons',
                    'A network of computers',
                    'A type of algorithm'
                ],
                correct: 1
            },
            {
                id: 5,
                text: 'What is deep learning?',
                image: null,
                options: [
                    'Learning deeply about topics',
                    'Neural networks with many layers',
                    'Complex machine learning',
                    'Both B and C'
                ],
                correct: 1
            },
            {
                id: 6,
                text: 'What is NLP?',
                image: null,
                options: [
                    'Numerical Linear Programming',
                    'Natural Language Processing',
                    'New Learning Protocol',
                    'None Language Programming'
                ],
                correct: 1
            },
            {
                id: 7,
                text: 'What is computer vision?',
                image: null,
                options: [
                    'Seeing like a computer',
                    'AI field of processing images/videos',
                    'Programming vision systems',
                    'Understanding sight'
                ],
                correct: 1
            },
            {
                id: 8,
                text: 'What is reinforcement learning?',
                image: null,
                options: [
                    'Learning again and again',
                    'Learning through rewards and penalties',
                    'Learning from experience',
                    'Both B and C'
                ],
                correct: 3
            },
            {
                id: 9,
                text: 'What is a dataset?',
                image: null,
                options: [
                    'A set of dates',
                    'Collection of data used for training',
                    'Data about sets',
                    'Setting data'
                ],
                correct: 1
            },
            {
                id: 10,
                text: 'What is accuracy in ML?',
                image: null,
                options: [
                    'Being accurate in coding',
                    'Percentage of correct predictions',
                    'Precision of measurements',
                    'Speed of algorithms'
                ],
                correct: 1
            }
        ]
    },
    security: {
        name: 'Cybersecurity',
        questions: [
            {
                id: 1,
                text: 'What is encryption?',
                image: null,
                options: [
                    'Making data smaller',
                    'Converting data into a secure code',
                    'Storing data safely',
                    'Transmitting data faster'
                ],
                correct: 1
            },
            {
                id: 2,
                text: 'What is a firewall?',
                image: null,
                options: [
                    'A physical wall',
                    'A security system that monitors traffic',
                    'A software for data backup',
                    'A tool for network speed'
                ],
                correct: 1
            },
            {
                id: 3,
                text: 'What is a phishing attack?',
                image: null,
                options: [
                    'An attack using fish',
                    'Attempting to trick users into revealing sensitive info',
                    'A network attack',
                    'A hardware failure'
                ],
                correct: 1
            },
            {
                id: 4,
                text: 'What is a VPN?',
                image: null,
                options: [
                    'Very Popular Network',
                    'Virtual Private Network',
                    'Verified Personal Network',
                    'Video Protection Network'
                ],
                correct: 1
            },
            {
                id: 5,
                text: 'What is authentication?',
                image: null,
                options: [
                    'Authorizing access',
                    'Verifying the identity of a user',
                    'Encrypting data',
                    'Backing up data'
                ],
                correct: 1
            },
            {
                id: 6,
                text: 'What is a password hash?',
                image: null,
                options: [
                    'Dividing a password',
                    'Converting password into a fixed-length string',
                    'Encrypting a password',
                    'Storing a password'
                ],
                correct: 1
            },
            {
                id: 7,
                text: 'What is SSL/TLS?',
                image: null,
                options: [
                    'Security for large texts',
                    'Secure protocols for web communication',
                    'System for transferring logs',
                    'Standards for legal training'
                ],
                correct: 1
            },
            {
                id: 8,
                text: 'What is malware?',
                image: null,
                options: [
                    'Bad wear',
                    'Malicious software intended to harm',
                    'Software that is poorly made',
                    'Unnecessary software'
                ],
                correct: 1
            },
            {
                id: 9,
                text: 'What is two-factor authentication?',
                image: null,
                options: [
                    'Authentication using two servers',
                    'Using two methods to verify identity',
                    'Encrypting twice',
                    'Two-step backup'
                ],
                correct: 1
            },
            {
                id: 10,
                text: 'What is a vulnerability?',
                image: null,
                options: [
                    'A weakness in security',
                    'A type of malware',
                    'A network issue',
                    'A coding error'
                ],
                correct: 0
            }
        ]
    }
};

// Global State
let state = {
    currentTopic: null,
    currentQuestionIndex: 0,
    timeLimit: 10,
    totalQuestions: 10,
    startTime: null,
    elapsedTime: 0,
    answers: {}, // { questionId: selectedOptionIndex }
    timerInterval: null,
    questions: [],
    selectedTopic: null
};

// DOM Elements
const homeScreen = document.getElementById('homeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const topicBtns = document.querySelectorAll('.topic-btn');
const startBtn = document.getElementById('startBtn');
const timeSelect = document.getElementById('timeSelect');
const questionSelect = document.getElementById('questionSelect');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const submitBtn = document.getElementById('submitBtn');
const retakeBtn = document.getElementById('retakeBtn');
const homeBtn = document.getElementById('homeBtn');
const preloader = document.getElementById('preloader');

// Event Listeners
topicBtns.forEach(btn => {
    btn.addEventListener('click', selectTopic);
});

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', previousQuestion);
submitBtn.addEventListener('click', submitQuiz);
retakeBtn.addEventListener('click', retakeQuiz);
homeBtn.addEventListener('click', goHome);

// Topic Selection
function selectTopic(e) {
    topicBtns.forEach(btn => btn.classList.remove('active'));
    e.target.closest('.topic-btn').classList.add('active');
    
    state.currentTopic = e.target.closest('.topic-btn').dataset.topic;
    state.selectedTopic = state.currentTopic;
    startBtn.disabled = false;
}

// Initialize Quiz
function startQuiz() {
    if (!state.currentTopic) return;

    state.timeLimit = parseInt(timeSelect.value);
    state.totalQuestions = parseInt(questionSelect.value);
    state.currentQuestionIndex = 0;
    state.answers = {};
    state.elapsedTime = 0;

    // Get questions
    let allQuestions = quizData[state.currentTopic].questions;
    state.questions = allQuestions.slice(0, state.totalQuestions);

    // Show quiz screen
    homeScreen.style.display = 'none';
    quizScreen.style.display = 'flex';
    resultsScreen.style.display = 'none';

    // Start timer
    state.startTime = Date.now();
    startTimer();

    // Display first question
    displayQuestion();
}

// Display Current Question
function displayQuestion() {
    const question = state.questions[state.currentQuestionIndex];
    
    // Update counter
    document.getElementById('questionCounter').textContent = 
        `Question ${state.currentQuestionIndex + 1} of ${state.totalQuestions}`;
    
    // Update topic badge
    document.getElementById('topicDisplay').textContent = 
        `📚 ${quizData[state.currentTopic].name}`;

    // Update question
    document.getElementById('questionText').textContent = question.text;

    // Handle image
    const imageContainer = document.getElementById('imageContainer');
    if (question.image) {
        imageContainer.style.display = 'block';
        document.getElementById('questionImage').src = question.image;
    } else {
        imageContainer.style.display = 'none';
    }

    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        const isSelected = state.answers[question.id] === index;
        if (isSelected) {
            optionDiv.classList.add('selected');
        }

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'option';
        radio.value = index;
        radio.checked = isSelected;

        const label = document.createElement('span');
        label.textContent = option;

        radio.addEventListener('change', () => {
            state.answers[question.id] = index;
            updateOptionVisuals(question.id);
        });

        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);
        optionDiv.addEventListener('click', () => {
            radio.checked = true;
            radio.dispatchEvent(new Event('change'));
        });

        optionsContainer.appendChild(optionDiv);
    });

    // Update progress
    updateProgress();

    // Update buttons
    prevBtn.disabled = state.currentQuestionIndex === 0;
    
    if (state.currentQuestionIndex === state.totalQuestions - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

function updateOptionVisuals(questionId) {
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.classList.remove('selected');
        if (state.answers[questionId] === index) {
            option.classList.add('selected');
        }
    });
}

// Navigation
function nextQuestion() {
    if (state.currentQuestionIndex < state.totalQuestions - 1) {
        state.currentQuestionIndex++;
        displayQuestion();
    }
}

function previousQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        displayQuestion();
    }
}

// Progress Update
function updateProgress() {
    const progress = ((state.currentQuestionIndex + 1) / state.totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = 
        `${state.currentQuestionIndex + 1} of ${state.totalQuestions} questions answered`;
}

// Timer
function startTimer() {
    const timeInMs = state.timeLimit * 60 * 1000;
    
    state.timerInterval = setInterval(() => {
        state.elapsedTime = Date.now() - state.startTime;
        const remainingMs = timeInMs - state.elapsedTime;
        
        if (remainingMs <= 0) {
            clearInterval(state.timerInterval);
            submitQuiz();
            return;
        }

        updateTimerDisplay(remainingMs);
    }, 100);
}

function updateTimerDisplay(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    const timerElement = document.getElementById('timeDisplay');
    timerElement.textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    const timerContainer = document.getElementById('timer').parentElement;
    
    // Change color based on time
    if (seconds < 10 && minutes === 0) {
        timerContainer.parentElement.classList.add('danger');
        timerContainer.parentElement.classList.remove('warning');
    } else if (minutes === 0) {
        timerContainer.parentElement.classList.add('warning');
        timerContainer.parentElement.classList.remove('danger');
    } else {
        timerContainer.parentElement.classList.remove('warning', 'danger');
    }
}

// Submit Quiz
function submitQuiz() {
    clearInterval(state.timerInterval);
    calculateResults();
    displayResults();
}

// Calculate Results
function calculateResults() {
    let correct = 0;
    
    state.questions.forEach(question => {
        const userAnswer = state.answers[question.id];
        if (userAnswer === question.correct) {
            correct++;
        }
    });

    state.results = {
        correct: correct,
        total: state.totalQuestions,
        wrong: state.totalQuestions - correct,
        percentage: Math.round((correct / state.totalQuestions) * 100),
        timeTaken: Math.floor(state.elapsedTime / 1000)
    };
}

// Display Results
function displayResults() {
    quizScreen.style.display = 'none';
    resultsScreen.style.display = 'flex';

    // Update results
    document.getElementById('topicResultDisplay').textContent = 
        `${quizData[state.currentTopic].name}`;
    document.getElementById('scorePercentage').textContent = 
        `${state.results.percentage}%`;
    document.getElementById('totalQuestionsResult').textContent = 
        state.results.total;
    document.getElementById('correctAnswersResult').textContent = 
        state.results.correct;
    document.getElementById('wrongAnswersResult').textContent = 
        state.results.wrong;
    
    const minutes = Math.floor(state.results.timeTaken / 60);
    const seconds = state.results.timeTaken % 60;
    document.getElementById('timeTakenResult').textContent = 
        `${minutes}m ${seconds}s`;

    // Feedback
    let feedbackTitle, feedbackMessage;
    if (state.results.percentage >= 80) {
        feedbackTitle = 'Excellent! 🌟';
        feedbackMessage = 'Outstanding performance! You have demonstrated excellent knowledge of this topic.';
    } else if (state.results.percentage >= 60) {
        feedbackTitle = 'Good! 👍';
        feedbackMessage = 'Good job! Keep practicing to improve further.';
    } else if (state.results.percentage >= 40) {
        feedbackTitle = 'Fair 📚';
        feedbackMessage = 'You have basic understanding. Review the topics and try again.';
    } else {
        feedbackTitle = 'Need Improvement 💡';
        feedbackMessage = 'Don\'t worry! Keep learning and practicing to improve your skills.';
    }

    document.getElementById('feedbackTitle').textContent = feedbackTitle;
    document.getElementById('feedbackMessage').textContent = feedbackMessage;

    // Review answers
    displayReview();
}

// Display Review
function displayReview() {
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = '';

    state.questions.forEach((question, index) => {
        const userAnswer = state.answers[question.id];
        const isCorrect = userAnswer === question.correct;

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

        const questionText = document.createElement('div');
        questionText.className = 'review-item-question';
        questionText.textContent = `Q${index + 1}: ${question.text}`;

        const userAnswerDiv = document.createElement('div');
        userAnswerDiv.className = 'review-item-answer';
        userAnswerDiv.innerHTML = `<span class="review-item-label">Your Answer:</span>
            <span class="user-answer">${question.options[userAnswer] || 'Not answered'}</span>`;

        const correctAnswerDiv = document.createElement('div');
        correctAnswerDiv.className = 'review-item-answer';
        correctAnswerDiv.innerHTML = `<span class="review-item-label">Correct Answer:</span>
            <span class="correct-answer">${question.options[question.correct]}</span>`;

        reviewItem.appendChild(questionText);
        reviewItem.appendChild(userAnswerDiv);
        if (!isCorrect) {
            reviewItem.appendChild(correctAnswerDiv);
        }

        reviewContainer.appendChild(reviewItem);
    });
}

// Retake Quiz
function retakeQuiz() {
    state.currentTopic = state.selectedTopic;
    startQuiz();
}

// Go Home
function goHome() {
    resultsScreen.style.display = 'none';
    homeScreen.style.display = 'flex';
    quizScreen.style.display = 'none';
    
    // Reset state
    state = {
        currentTopic: null,
        currentQuestionIndex: 0,
        timeLimit: 10,
        totalQuestions: 10,
        startTime: null,
        elapsedTime: 0,
        answers: {},
        timerInterval: null,
        questions: [],
        selectedTopic: null
    };
    
    // Reset UI
    topicBtns.forEach(btn => btn.classList.remove('active'));
    startBtn.disabled = true;
}

// Hide preloader
window.addEventListener('load', () => {
    preloader.style.display = 'none';
});
