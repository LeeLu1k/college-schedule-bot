// Telegram Web App
const tg = window.Telegram?.WebApp || null;

// Ник из Telegram
document.getElementById("username").innerText = tg?.initDataUnsafe?.user?.username || "Игрок";

// Баланс
let balance = 0;
document.getElementById("balance").innerText = `Баланс: ${balance} ✦`;

// Функция "В бой"
function startBattle() {
    alert("Запуск боя!\nБаланс: " + balance);
    // Здесь позже можно открыть мини-игру или arena canvas
}

// Навигация
function openSection(section) {
    alert(`Открыта секция: ${section}`);
    // Здесь можно показывать разные окна / модальные окна
}
