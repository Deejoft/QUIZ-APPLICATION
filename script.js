const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'London', 'Rome'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
      correctAnswer: 'Leonardo da Vinci'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
      correctAnswer: 'Mars'
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionContainer = document.getElementById('questionContainer');
  const optionsContainer = document.getElementById('optionsContainer');
  const nextButton = document.getElementById('nextButton');
  const resultContainer = document.getElementById('resultContainer');
  
  nextButton.addEventListener('click', showNextQuestion);
  
  function showNextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
  
    if (selectedOption) {
      const userAnswer = selectedOption.value;
      if (userAnswer === quizData[currentQuestion].correctAnswer) {
        score++;
      }
  
      selectedOption.checked = false;
      currentQuestion++;
  
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.textContent = currentQuizData.question;
  
    optionsContainer.innerHTML = '';
    currentQuizData.options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.innerHTML = `
        <input type="radio" id="option${index}" name="option" value="${option}">
        <label for="option${index}">${option}</label>
      `;
      optionsContainer.appendChild(optionElement);
    });
  }
  
  function displayResult() {
    questionContainer.textContent = '';
    optionsContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
    resultContainer.textContent = `You scored ${score} out of ${quizData.length} correct answers.`;
    resultContainer.classList.remove('hidden');
  }
  
  displayQuestion();
  