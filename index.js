/*
const telegram = require("node-telegram-bot-api");
const bot = new telegram(token, {polling: true});
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, answers);
});
*/


const Database = require("./src/database.js");
const db = new Database();

console.log(db.getAnswer(""));