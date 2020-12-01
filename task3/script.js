const   trafficLightEl = document.querySelector('#trafficLight'),
        trafficLightEl2 = document.querySelector('#trafficLight2'),
        trafficLightEl3 = document.querySelector('#trafficLight3'),
        title = document.querySelector('h1');

// rules for user
alert('Посмотри в консоль !');
console.log('Кликни на кружок получишь цвет');
console.log('Кликни на надпись вернешься в начало!');
// function for making colors
function makeColors() {
    if (trafficLightEl.style.background == ('green')) {
        clear();
        trafficLightEl2.style.background = ('yellow');
        title.style.color = ('yellow');
    } else if ((trafficLightEl.style.background ==('black')) &&  (trafficLightEl2.style.background == ('yellow'))) {
        trafficLightEl.style.background = ('black');
        trafficLightEl2.style.background = ('black');
        trafficLightEl3.style.background = ('red');
        title.style.color = ('red');
    }else if((trafficLightEl.style.background ==('black')) &&  (trafficLightEl2.style.background == ('black'))){
        trafficLightEl3.style.background = ('black');
        trafficLightEl.style.background = ('green');
        title.style.color = ('green');
    }else {
        clear();
        trafficLightEl.style.background = ('green');
        title.style.color = ('green');
    }
}

trafficLightEl.addEventListener('click', makeColors);
trafficLightEl2.addEventListener('click', makeColors);
trafficLightEl3.addEventListener('click', makeColors);

//return to default
title.addEventListener('click', () => {
    clear();
    title.style.color = ('black');
})

//function for clearing colors
function clear() {
    trafficLightEl.style.background = ('black');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('black');
}

