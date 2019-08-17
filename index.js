//const telegram = require("node-telegram-bot-api");
const {Client} = require("pg");
const connectionString = "postgres://user:password@ip:port/database";

const client = new Client({connectionString: connectionString});

client.connect();

//const bot = new telegram(token, {polling: true});

let answers = [];
client.query("SELECT * FROM answers", (err, res) => {
    console.log(err, res);
});

client.end();

/*bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, answers);
});
*/