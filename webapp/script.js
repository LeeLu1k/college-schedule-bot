// Telegram Web App
const tg = window.Telegram?.WebApp || null;

// Устанавливаем ник из Telegram
document.getElementById("username").innerText = tg?.initDataUnsafe?.user?.username || "Игрок";

// Баланс
let balance = 0;
document.getElementById("balance").innerText = balance;

// Функция запуска мини-игры
function playGame(game) {
    alert(`Запуск ${game}!\nБаланс: ${balance}`);
    // Можно открыть мини-игру в новом div или canvas
}
