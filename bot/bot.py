from aiogram import Bot, Dispatcher, types
from aiogram.utils import executor
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo
import os

TOKEN = os.getenv("TOKEN")
bot = Bot(token=TOKEN)
dp = Dispatcher(bot)

# --- Команда /start ---
@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    # Кнопка для открытия Web App
    web_app = WebAppInfo(url="https://college-schedule-bot-production.up.railway.app/")
    button = KeyboardButton(text="Открыть приложение", web_app=web_app)
    keyboard = ReplyKeyboardMarkup(resize_keyboard=True).add(button)

    await message.reply(
        "Привет! 👋\nНажми кнопку ниже, чтобы открыть приложение колледжа:",
        reply_markup=keyboard
    )

if __name__ == "__main__":
    executor.start_polling(dp, skip_updates=True)
