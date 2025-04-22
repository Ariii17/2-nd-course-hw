const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  if (array[i] === 10) {
    break; // Прерываем цикл, когда встречаем 10
  }
}

2 

const numbersArray = [1, 3, 5, 10, 20];

const resultOne = numbers.join(' ');

console.log(resultOne); 

3

const numbers = [1, 3, 5, 10, 20];

const result = numbers.join(' ');

console.log(result); 

4

const multiArray = [];

for (let i = 0; i < 3; i++) {
  multiArray[i] = []; 

  for (let j = 0; j < 3; j++) {
    multiArray[i][j] = 1; 
  }
}

console.log(multiArray); 

5

const myArray = [1, 1, 1];

myArray.push(...[2, 2, 2]);

console.log(myArray); 

6

const alsoArray = [9, 8, 7, 'a', 6, 5];

alsoArray.sort(); 

const indexA = alsoArray.indexOf('a');
if (indexA !== -1) {
  alsoArray.splice(indexA, 1); 
}

console.log(alsoArray); 


7

const numbersB = [9, 8, 7, 6, 5];

const userAnswer = prompt("Угадайте число из массива: " + numbersB.join(', '));

if (userAnswer !== null) { 
    const userNumber = Number(userAnswer); 

    if (!isNaN(userNumber)) { 
        if (numbersB.includes(userNumber)) {
            alert("Угадал");
        } else {
            alert("Не угадал");
        }
    } else {
        alert("Пожалуйста, введите число.");
    }
} else {
    alert("Вы отменили ввод."); 
}

8

const stroka = 'abcdef';

const reversedStroka = stroka.split('').reverse().join('');

console.log(reversedStroka);

9

const newArray = [[1, 2, 3], [4, 5, 6]];

const smallArray = [].concat(...newArray);

console.log(smallArray); 

10

const oldName = [3, 7, 1, 9, 4, 6, 2, 5, 8, 10]; // Произвольный массив чисел от 1 до 10

for (let i = 0; i < oldName.length; i++) {
  if (i < oldName.length - 1) {
    const sum = oldName[i] + oldName[i + 1];
    console.log(`Сумма ${oldNames[i]} и ${oldName[i + 1]} = ${sum}`);
  } else {
    console.log(`У элемента ${oldName[i]} нет следующего.`);
  }
}

11

function squareArray(arr) {
    return arr.map(num => num * num);
  }

  const numbers1 = [1, 2, 3, 4, 5];
  const squaredNumbers1 = squareArray(numbers1);
  console.log(squaredNumbers1); 

12

function getStringLengths(arr) {
    return arr.map(str => str.length);
  }
  
  const strings1 = ["hello", "world", "javascript"];
  const lengths1 = getStringLengths(strings1);
  console.log(lengths1);

  13

  function getNegativeNumbers(arr) {
    return arr.filter(num => num < 0);
  }
  
  const numbers8 = [-5, 10, -3, 0, -8, 2];
  const negativeNumbers8 = getNegativeNumbers(numbers8);
  console.log(negativeNumbers8);

  14

  const numbers5 = [];
for (let i = 0; i < 10; i++) {
  numbers5.push(Math.floor(Math.random() * 11)); 
}

const evenNumbers = numbers5.filter(num => num % 2 === 0);

console.log("Исходный массив:", numbers5);
console.log("Массив с четными значениями:", evenNumbers);

15


const numbers6 = [];
for (let i = 0; i < 6; i++) {
  numbers6.push(Math.floor(Math.random() * 10) + 1);
}

const sum = numbers6.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const average = sum / numbers6.length;
console.log("Массив:", numbers6);
console.log("Сумма элементов:", sum);
console.log("Среднее арифметическое:", average);

