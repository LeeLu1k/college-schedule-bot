// Telegram Web App
const tg = window.Telegram?.WebApp || null;

// Получаем ник и ID из Telegram
const telegramUser = tg?.initDataUnsafe?.user;
const telegramId = telegramUser?.id || 'guest';
const telegramUsername = telegramUser?.username || 'Игрок';

// Загружаем баланс из localStorage по Telegram ID
let balance = parseInt(localStorage.getItem(`balance_${telegramId}`)) || 0;

// Устанавливаем ник и баланс
document.getElementById("username").innerText = telegramUsername;
document.getElementById("balance").innerText = `Баланс: ${balance} ✦`;

// Функция "В бой"
function startBattle() {
    alert(`Запуск боя!\nБаланс: ${balance}`);
    balance += Math.floor(Math.random() * 20) + 5; // случайная награда
    localStorage.setItem(`balance_${telegramId}`, balance);
    document.getElementById("balance").innerText = `Баланс: ${balance} ✦`;
}

// Навигация
function openSection(section) {
    alert(`Открыта секция: ${section}`);
}
