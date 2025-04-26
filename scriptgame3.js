document.querySelector('.gameButtonThird').addEventListener('click', 
    function gameThird() {
    let inputText = prompt("Введите текст:");
    let reversedText = inputText.split("").reverse().join("");
    alert(`Перевернутый текст: ${reversedText}`);
    });