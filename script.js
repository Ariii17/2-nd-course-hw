let password = 'пароль';
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
    case (+12):
        alert(`зима`);
        break;
    case (+1):
        alert(`зима`);
        break;
    case (+2):
        alert(`зима`);
        break;
    case (+3):
        alert(`весна`);
        break;
    case (+4):
        alert(`весна`);
        break;
    case (+5):
        alert(`весна`);
        break;
    case (+6):
        alert(`лето`);
        break;
    case (+7):
        alert(`лето`);
        break;
    case (+8):
       alert(`лето`);
        break;
    case (+9):
        alert(`осень`);
        break;
    case (+10):
        alert(`осень`);
        break;
    case (+11):
        alert(`осень`);
        break; 
    default: alert(`Такого месяца нет`);
    break;
}