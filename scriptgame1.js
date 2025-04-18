document.querySelector('.gameButton').addEventListener('click', 
function gameFirst() {
let guess = prompt("Попробуйте угадать число");
if (guess < 0) {
alert("Число не может быть отрицательным");
} else if (guess > 100) {
alert("Число не может быть больше 100");
} else if (guess == 17) {
alert ("Вы угадали!") ;
} else 
alert ("Вы ввели неправильное значениие");
});