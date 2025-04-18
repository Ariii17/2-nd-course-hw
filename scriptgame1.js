document.querySelector('.gameButton').addEventListener('click', gameFirst);
function gameFirst(guess) {
let guess = prompt("Попробуйте угадать число");
const randomNumber = 17; 
if (guess < 0) {
alert("Число не может быть отрицательным");
} else if (randomNumber > 100) {
alert("Число не может быть больше 100");
} else if (randomNumber = 17) {
alert ("Вы угадали!") ;
} else 
alert ("Вы ввели неправильное значениие");
};