const phrases = {
    'input1': 'programando',
    'input2': 'el',
    'input3': 'futuro',
    'input4': 'de',
    'input5': 'venezuela',
};

Object.keys(phrases).forEach(inputId => {
    const inputElement = document.getElementById(inputId);
    const phraseElement = document.getElementById(`phrase${inputId.slice(-1)}`);

    inputElement.addEventListener('input', () => {
        if (inputElement.value.trim().toLowerCase() === phrases[inputId]) {
            inputElement.style.display = 'none';
            transisitionToVisible(phraseElement);
        }
    });
});


//change display from none to block but with visibility hidden and transition to visible
function transisitionToVisible(element) {
    //use class hidde-phrase.show
    element.classList.add('show');
}