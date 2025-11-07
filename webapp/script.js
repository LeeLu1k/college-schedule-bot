const tg = window.Telegram?.WebApp;

if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) {
    document.getElementById("app").classList.remove("hidden");

    const user = tg.initDataUnsafe.user;
    const telegramId = user.id;
    const username = user.username || user.first_name || "Игрок";

    // Баланс и герой
    let balance = parseInt(localStorage.getItem(`balance_${telegramId}`)) || 0;
    let hero = localStorage.getItem(`hero_${telegramId}`);

    // Если герой не выбран — показать экран выбора
    if (!hero) {
        document.getElementById("app").classList.add("hidden");
        document.getElementById("choose-hero").classList.remove("hidden");
    }

    // Отображаем данные
    document.getElementById("username").innerText = username;
    document.getElementById("balance").innerText = `Баланс: ${balance} ✦`;
    updateHeroImage(hero);

    // === Выбор героя ===
    window.selectHero = function (selectedHero) {
        localStorage.setItem(`hero_${telegramId}`, selectedHero);
        hero = selectedHero;
        document.getElementById("choose-hero").classList.add("hidden");
        document.getElementById("app").classList.remove("hidden");
        updateHeroImage(hero);
    };

    function updateHeroImage(hero) {
        const el = document.getElementById("hero-image");
        if (!el) return;
        if (hero === "warrior") el.style.backgroundImage = "url('https://i.imgur.com/ZbS6hTQ.png')";
        if (hero === "archer") el.style.backgroundImage = "url('https://i.imgur.com/kqBja0n.png')";
        if (hero === "mage") el.style.backgroundImage = "url('https://i.imgur.com/1A7Guq5.png')";
    }

    // === Бой ===
    window.startBattle = function() {
        alert(`Твой герой: ${hero}\nВыходишь в бой!\n+10 золота`);
        balance += 10;
        localStorage.setItem(`balance_${telegramId}`, balance);
        document.getElementById("balance").innerText = `Баланс: ${balance} ✦`;
    };

    // Навигация
    window.openSection = function(section) {
        alert(`Открыта секция: ${section}`);
    };
} else {
    document.getElementById("not-telegram").classList.remove("hidden");
}
