import os
from threading import Thread
from flask import Flask, send_from_directory
from aiogram import Bot, Dispatcher, types
from aiogram.utils import executor
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo

TOKEN = os.getenv("TOKEN")

# --- Telegram Bot ---
bot = Bot(token=TOKEN)
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    web_app = WebAppInfo(url="https://your-railway-url.up.railway.app/")
    button = KeyboardButton(text="Открыть Лобби", web_app=web_app)
    keyboard = ReplyKeyboardMarkup(resize_keyboard=True).add(button)
    await message.reply("Привет! Добро пожаловать в Game Lobby!", reply_markup=keyboard)

def start_bot():
    executor.start_polling(dp, skip_updates=True)

# --- Flask Web Server ---
app = Flask(__name__, static_folder='webapp')

@app.route('/')
def index():
    return send_from_directory('webapp', 'index.html')

@app.route('/<path:path>')
def serve_file(path):
    return send_from_directory('webapp', path)

def start_webserver():
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)

# --- Одновременный запуск ---
if __name__ == "__main__":
    Thread(target=start_webserver).start()
    start_bot()
