{let password = 'пароль';

let ask = prompt(`Введите пароль`);

alert(ask === password ? `Пароль введен верно` : `Пароль введен неправильно`);


let c = Number(prompt(`Введите число`));
alert(c > 0 && c < 10 ? `Верно` : `Неверно`);

let d = Number(prompt(`Введите число`));
let e = Number(prompt(`Введите число`));
alert(d > 100 || e > 100 ? `Верно` : `Неверно`);

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(+a + +b);

let monthNumber = Number(prompt(`Введите номер месяца`)); 

switch (monthNumber) {
    case (12):
        alert(`зима`);
        break;
    case (1):
        alert(`зима`);
        break;
    case (2):
        alert(`зима`);
        break;
    case (3):
        alert(`весна`);
        break;
    case (4):
        alert(`весна`);
        break;
    case (5):
        alert(`весна`);
        break;
    case (6):
        alert(`лето`);
        break;
    case (7):
        alert(`лето`);
        break;
    case (8):
       alert(`лето`);
        break;
    case (9):
        alert(`осень`);
        break;
    case (10):
        alert(`осень`);
        break;
    case (11):
        alert(`осень`);
        break; 
    default: alert(`Такого месяца нет`);
    break;
};

} 
{
let f = 20;
alert(f);

let iph = 2007;
alert(iph);

let js = (`Bendan Eich`);
alert(js);

let c = 10;
let d = 2;
alert(`${c + d}, ${c - d}, ${c * d}, ${c / d}`);

let result = 2 ** 5;
alert(result);

let a = 9;
let b = 2;
let remainder = a % b;
alert(remainder);

let num = 1;
num +=5;
num -= 3;
num += 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt(`Сколько вам лет?`);
alert(age);

const user = {
    name: `John`,
    age: 21,
    isAdmin: false
};

let hisname = prompt(`Как Вас зовут?`);
alert(`Привет, ${hisname}!`);
}

let c = 0;
while (c < 2) {
    alert (`Привет`);
    c++;
};

let i = 1;
do {
    alert(i);
    i++;
} while (i <= 5);

let a = 7;
do {
    alert(a);
    a++;
} while (a <= 22);

let obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
};

for (let key in obj) {
    alert(`${key} — зарплата ${obj[key]} долларов`);
};

let n = 1000;
do {
    n = n / 2;
} while (n > 50);
alert(n);

let firstFriday = 1;

for (let day = firstFriday; day <= 31; day +=7) {
    alert(`Сегодня пятница, ${day} -е число. Необходимо подготовить отчет.`);
};



