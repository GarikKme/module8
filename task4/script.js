const link = document.querySelector('#link');

link.addEventListener('click', (e) => {
    e.preventDefault();
    let newText = prompt('Введите текст ссылки - ');
    link.textContent = newText;
});