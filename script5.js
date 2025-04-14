
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
}