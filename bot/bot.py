from aiogram import Bot, Dispatcher, types
from aiogram.types import WebAppInfo
from aiogram.utils import executor

TOKEN = "8264401482:AAEhaD4tX5qaKmYYHTHQRcQ-iwEAnyOqmp4"
WEBAPP_URL = "https://твоя-ссылка-на-webapp"  # ссылка на webapp/index.html

bot = Bot(token=TOKEN)
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(msg: types.Message):
    keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)
    web_button = types.KeyboardButton(text="📅 Открыть расписание", web_app=WebAppInfo(url=WEBAPP_URL))
    keyboard.add(web_button)
    await msg.answer("Привет! Нажми, чтобы открыть расписание 👇", reply_markup=keyboard)

if __name__ == "__main__":
    executor.start_polling(dp, skip_updates=True)
