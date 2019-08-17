const express = require("express");
const app = express();

function jsonBuilder(name, value){
    return JSON.stringify(name + ":" + value);
}


app.get("/api/answer/:answer", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const input = JSON.stringify(req.params.answer + ":" + "aiwdiwi");
    res.json(input);
    //res.send(input);
});




app.listen(3221, () => console.log("API started"));