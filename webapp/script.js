// Telegram Web App
const tg = window.Telegram.WebApp;

// Показываем ник пользователя
document.getElementById("username").innerText = tg.initDataUnsafe?.user?.username || "Игрок";

// Инициализация баланса
let balance = 0;

// Функция запуска игры
function playGame(game) {
    alert(`Запуск ${game}!\nБаланс пока: ${balance}`);
    // Здесь можно открыть мини-игру в модальном окне или новом div
}
