const input = document.querySelector('#input'),
    button =  document.querySelector('#button'),
    duplicatedField = document.querySelector('#duplicateField');
    
    let text;
    input.addEventListener('input', () => {
        text = input.value;
        duplicatedField.innerHTML = text;
        
    });


    button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(text);
        duplicatedField.innerHTML = "";
    });