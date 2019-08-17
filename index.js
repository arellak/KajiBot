//const telegram = require("node-telegram-bot-api");
const {Client} = require("pg");
const connectionString = "";

const client = new Client({connectionString: connectionString});

client.connect().catch(err => console.log(err));

client.query("SELECT * FROM answers", (err, res) => {
    console.log(res);
});

client.end().catch(err => console.log(err));



//const bot = new telegram(token, {polling: true});
/*bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, answers);
});
*/