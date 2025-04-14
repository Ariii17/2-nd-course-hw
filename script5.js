
let i = 0;
while (i < 2) {
  console.log("Привет");
  i++;
}

let c = 1;
while (c <= 5) {
  console.log(c);
  c++;
};

let b = 7;
while (b <= 22) {
  console.log(b);
  b++;
}
const obj = {
  "Коля": '200',
  "Вася": '300',
  "Петя": '400'
};

for (let key in obj) {
  console.log(`${key} — ${obj[key]} долларов`);
};


let n = 1000;
let num = 0;

while (n >= 50) {
  n = n / 2; // Или n /= 2;
  num++;
};

console.log("Результат деления:", n);
console.log("Количество итераций:", num);

let firstFriday = 5; // Предположим, что первая пятница месяца - 5-е число

for (let day = firstFriday; day <= 31; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
};

