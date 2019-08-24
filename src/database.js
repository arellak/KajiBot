const mysql = require("mysql");

const con = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ""
});

class Database {
    constructor(){}

    getAnswer(inp){
        con.connect();
        
        con.query("SELECT * FROM kaji", (err, res) => {
            if(err) console.log(err);
            console.log(res);
        });
    
        con.end();
    }

    loadAnswersToList(){

    }

    test(){
        return "test";
    }

}

module.exports = Database;