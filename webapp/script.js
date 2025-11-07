const tg = window.Telegram?.WebApp;

if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) {
    document.getElementById("app").classList.add("hidden");

    const user = tg.initDataUnsafe.user;
    const telegramId = user.id;
    const username = user.username || user.first_name || "Игрок";

    document.getElementById("username").innerText = username;

    let balance = parseInt(localStorage.getItem(`balance_${telegramId}`)) || 0;
    document.getElementById("balance").innerText = `Баланс: ${balance} ✦`;

    let hero = localStorage.getItem(`hero_${telegramId}`);
    const hasGift = localStorage.getItem(`hasGift_${telegramId}`);

    // === Если нет подарка ===
    if (!hasGift) {
        document.getElementById("gift-screen").classList.remove("hidden");
    } 
    // === Если подарок уже был, но герой не выбран ===
    else if (!hero) {
        document.getElementById("choose-hero").classList.remove("hidden");
    } 
    // === Если герой выбран ===
    else {
        document.getElementById("app").classList.remove("hidden");
        updateHeroImage(hero);
    }

    // Забрать подарок
    window.claimGift = function() {
        localStorage.setItem(`hasGift_${telegramId}`, "true");
        document.getElementById("gift-screen").classList.add("hidden");
        document.getElementById("choose-hero").classList.remove("hidden");
    };

    // Выбор героя
    window.selectHero = function(selectedHero) {
        localStorage.setItem(`hero_${telegramId}`, selectedHero);
        hero = selectedHero;
        document.getElementById("choose-hero").classList.add("hidden");
        document.getElementById("app").classList.remove("hidden");
        updateHeroImage(hero);
    };

    // Обновить аватар героя
    function updateHeroImage(hero) {
        const el = document.getElementById("hero-image");
        if (!el) return;
        if (hero === "warrior") el.style.backgroundImage = "url('https://i.imgur.com/ZbS6hTQ.png')";
        if (hero === "archer") el.style.backgroundImage = "url('https://i.imgur.com/kqBja0n.png')";
        if (hero === "mage") el.style.backgroundImage = "url('https://i.imgur.com/1A7Guq5.png')";
    }

    // В бой
    window.startBattle = function() {
        alert(`Твой герой: ${hero}\nТы отправился в бой!\n+10 золота`);
        balance += 10;
        localStorage.setItem(`balance_${telegramId}`, balance);
        document.getElementById("balance").innerText = `Баланс: ${balance} ✦`;
    };

    window.openSection = function(section) {
        alert(`Открыта секция: ${section}`);
    };

} else {
    document.getElementById("not-telegram").classList.remove("hidden");
}
