// js.js

// Функция, которая выводит приветствие
function sayHello() {
    alert('Привет, мир!');
}

// Ждём, пока страница полностью загрузится
document.addEventListener('DOMContentLoaded', function() {
    // Находим кнопку по её ID
    const button = document.getElementById('myButton');

    // Добавляем обработчик события на клик
    button.addEventListener('click', sayHello);
});