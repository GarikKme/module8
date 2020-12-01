// variables
const consoleLog = document.querySelector('#consoleLog'),
    exampleAlert = document.querySelector('#alert'),
    examplePrompt = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщений в веб-консоль');
});

exampleAlert.addEventListener('click', () => {
    alert('Метод для вывода сообщений в модальное окно');
})

examplePrompt.addEventListener('click', () => {
    prompt('Введите число от 1 до 9', 1);
})

