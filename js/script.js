let a = 20;
alert (a);

let year = 2007;
alert (year);

let names = "Брендан Эйх";
alert (names);

let ten = 10;
let two = 2;
let summ = ten + two;
let raz = ten - two;
let pro = ten * two;
let chas = ten / two;
alert (summ); alert(raz); alert(pro); alert(chas); 

let result = 2**5;
alert (result);

let a1 = 9;
let b = 2;
let cel = a1 % b;
alert (cel);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

let age = prompt('Сколько вам лет?');
alert(age);

const user ={
    name: 'Sony',
    age: 29,
    isAdmin: false,
};
user["city of Residence"] = 'Novosibirsk';

alert(user["city of Residence"]);

user['age'] = 27;
alert(user[age]);

delete user.cityofResidence;

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

let ask = prompt('Как вас зовут?');
alert('Привет, ' + ask + ' !');
