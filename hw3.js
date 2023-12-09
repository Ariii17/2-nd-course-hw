/* 31*/
let password = '2323';
let newpassword = prompt('Введите пароль');

if (newpassword == password){
    alert('Пароль введен верно');
} else {alert('Пароль введен неправильно')
};
/* 2 */
let c = 2;
if (c>0 && c<10) {
    alert('Верно');
} else { alert('Неверно');
};

/* 3 */
let d = 10;
let f = 150;
if (d>100 || f>100) {
    alert('Верно');
} else {alert('Неверно');
};

/* 4 */
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(2 + 3);

/* 5 */
let monthNumber = prompt('Введите месяц (число)');
if (monthNumber<13){
    switch(monthNumber) {
        case'1':
        console.log('зима');
        break;
        case'2':
        console.log('зима');
        break;
        case'3':
        console.log('весна');
        break;
        case'4':
        console.log('весна');
        break;
        case'5':
        console.log('весна');
        break;
        case'6':
        console.log('лето');
        break;
        case'7':
        console.log('лето');
        break;
        case'8':
        console.log('лето');
        break;
        case'9':
        console.log('осень');
        break;
        case'10':
        console.log('осень');
        break;
        case'11':
        console.log('осень');
        break;
        case'12':
        console.log('зима');
        break;
        default:
        console.log('winter');
        break;}
};
