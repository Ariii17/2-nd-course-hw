document.querySelector('.gameButtonSecond').addEventListener('click', 
function gameSecond() {
function randomNumber() {
    return Math.floor(Math.random() * 10) + 1; 
  }
  
  function getRandomOperation() {
    const operations = ['+', '-', '*', '/'];
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
  }
  
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const operation = getRandomOperation();
  
  function getExample() {
    return `${firstNumber} ${operation} ${secondNumber} = ?`;
  }
  
  alert(getExample());
  
  let result;
  switch (operation) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      result = firstNumber / secondNumber;
      break;
  }
  
  const userAnswer = prompt("Посчитай и выведи ответ:");
  
  if (!isNaN(userAnswer) && Number(userAnswer) === result) {
    alert("Верный ответ!");
  } else {
    alert(`Неверно. Правильный ответ: ${result}`);
  }
});

