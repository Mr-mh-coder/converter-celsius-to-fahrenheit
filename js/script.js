const convertButton = document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const changeButton = document.querySelector('.changeButton');
let result = document.querySelector('.result');
let titleFalg = true;
let celsius = document.querySelector('.C');
let fahrenheit = document.querySelector('.F');

changeButton.addEventListener('click', function(){

    if(titleFalg){
        titleFalg = false
        document.title = '°F to °C';
        celsius.innerHTML = '°F';
        fahrenheit.innerHTML = '°C';
        document.querySelector('input').setAttribute('placeholder', '°F');
    }else{
        titleFalg = true;
        document.title = '°C to °F';
        celsius.innerHTML = '°C';
        fahrenheit.innerHTML = '°F';
        document.querySelector('input').setAttribute('placeholder', '°C');
    }
});

convertButton.addEventListener('click', function(){
    let inputValue = document.querySelector('#converter').value;
    if(titleFalg){
        if(!inputValue || isNaN(inputValue)){
            result.innerHTML = 'Wrong!! Please enter a number!!';
            result.style.color = ' #ad1a1a';
        }else{
            const fahrenheitConvert = (inputValue * 1.8) + 32;
            result.innerHTML = `${inputValue}°C to ${fahrenheitConvert}°F`;
        }

    }else{
        if(!inputValue || isNaN(inputValue)){
            result.innerHTML = 'Wrong!! Please enter a number!!';
            result.style.color = ' #ad1a1a';
        }else{
            const celsiusConvert = Math.floor((inputValue - 32) * 5 / 9);
            result.innerHTML = `${inputValue}°F to ${celsiusConvert}°C`;
        }
    }
});

resetButton.addEventListener('click', function(){
    titleFalg = true;
    document.querySelector('input').value = '';
    document.querySelector('input').setAttribute('placeholder', '°C');
    document.title = '°C to °F';
    celsius.innerHTML = '°C';
    fahrenheit.innerHTML = '°F';
    result.innerHTML = '';

});