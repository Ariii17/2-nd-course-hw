function numberLess(a, b) {
    if (a <= b) {
      return a;
    } else {
      return b;
    }
  }

  function chet(a) {
    if (a % 2 == 0) {
    alert("Число четное");
    } else {
    alert("Число нечетное");
    }
    }
    
    let age = parseInt(prompt("Пожалуйста, введите ваш возраст"));

    if (isNaN(age)) {
        alert("Пожалуйста, введите числовое значение для возраста.");
    } else {
      function userAge() {
        if (age < 0) {
          alert("Вы ввели неправильное значение (возраст не может быть отрицательным)");
        } else if (age >= 13) {
          alert("Добро пожаловать!");
        } else if (age <= 12) {
          alert("Привет, друг!");
        }
      }
      userAge();
    }
  
    function multNumb(a, b) {
      if (a === null || a === undefined || b === null || b === undefined) {
        alert("Одно или оба значения являются null или undefined");
      }
    
      const numA = Number(a);
      const numB = Number(b);
    
      if (isNaN(numA) || isNaN(numB)) {
        alert("Одно или оба значения не являются числом");
      } else {
        alert(numA * numB);
      }
    }  
    
function outNumbSq(numC) {
  const square = numC * numC;
  console.log(square);
}

function getSq(numD) {
  const square = numD * numD;
  console.log(square);
  return numD;
}

function countCube() {
  const userInput = prompt("Пожалуйста, введите число:");

  if (userInput === null) {
    return "Ввод отменен пользователем.";
  }

  const numE = Number(userInput);

  if (isNaN(numE)) {
    alert('Переданный параметр не является числом');
  } else {
    const cube = numE ** 3;  
    alert(`${numE} в кубе равняется ${cube}`);
  }
}
