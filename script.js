document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var answers = {
        'question1': 'Anteil',
        'question2': 'Risiko',
        'question3': 'Index',
        'question4': 'AAPL'
    };

    var score = 0;
    for(var i = 1; i <= Object.keys(answers).length; i++) {
        var selectedAnswer = document.querySelector('input[name="question' + i + '"]:checked');
        if(selectedAnswer) {
            if(selectedAnswer.value === answers['question' + i]) {
                score++;
            }
        }
    }

    var resultContainer = document.querySelector('.wide-container'); // Target the wide container
    resultContainer.innerHTML = 'Du hast ' + score + ' von ' + Object.keys(answers).length + ' Fragen Richtig!';
    // Add correct answers
    resultHTML += '<h3>Richtige Antworten:</h3><ul>';
    for(var question in answers) {
        resultHTML += '<li><strong>Frage ' + question.slice(-1) + ':</strong> ' + answers[question] + '</li>';
    }
    resultHTML += '</ul>';

    // Add user's answers
    resultHTML += '<h3>Deine Antworten:</h3><ul>';
    for(var question in userAnswers) {
        resultHTML += '<li><strong>Frage ' + question.slice(-1) + ':</strong> ' + userAnswers[question] + '</li>';
    }
    resultHTML += '</ul>';

    resultContainer.innerHTML = resultHTML;
});
