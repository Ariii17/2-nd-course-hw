/*1 task*/
function numberLess(a, b) {
    if (a <= b) {
      return a;
    } else {
      return b;
    }
  }

/*2 task*/
  function chet(a) {
    if (a % 2 == 0) {
    return 'Число четное';
    } else {
    return 'Число нечетное';
    }
    }
 /*3 task*/   
    function outNumbSq(numC) {
      const square = numC * numC;
      console.log(square);
    }
    
    function getSq(numD) {
      const square = numD * numD;
      console.log(square);
      return numD;
    }
/*4 task*/
    let age = parseInt(prompt("Пожалуйста, введите ваш возраст"));

    if (isNaN(age)) {
        alert("Пожалуйста, введите числовое значение для возраста.");
    } else {
      function userAge() {
        if (age < 0) {
          alert('Вы ввели неправильное значение (возраст не может быть отрицательным)');
        } else if (age >= 13) {
          alert( 'Добро пожаловать!');
        } else if (age <= 12) {
          alert('Привет, друг!');
        }
      }
      userAge();
    }
 /*5 task*/ 
    function multNumb(a, b) {
      if (a === null || a === undefined || b === null || b === undefined) {
        return 'Одно или оба значения являются null или undefined';
      }
    
      const numA = Number(a);
      const numB = Number(b);
    
      if (isNaN(numA) || isNaN(numB)) {
        return 'Одно или оба значения не являются числом';
      } else {
        return numA * numB;
      }
    }  
    
  /*6 task*/
function countCube() {
  const userInput = prompt("Пожалуйста, введите число:");

  if (userInput === null) {
    return 'Ввод отменен пользователем.';
  }

  const numE = Number(userInput);

  if (isNaN(numE)) {
    return'Переданный параметр не является числом';
  } else {
    const cube = numE ** 3;  
    return `${numE} в кубе равняется ${cube}`;
  }
}

/*7 task*/
const circle1 = {
  radius: 5,
  getArea() {
    return Math.PI * this.radius * this.radius;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}
const circle2 = {
  radius: 7,
  getArea() {
    return Math.PI * this.radius * this.radius;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}
circle1.getArea();
circle1.getPerimeter();
circle2.getArea();
circle2.getPerimeter();