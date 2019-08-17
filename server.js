const express = require("express");
const app = express();

function jsonBuilder(value){
    let answers = [];
    return {"input": value, "answers": answers};
}

app.get("/api/answer/:answer", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const input = req.params.answer;
    res.json(jsonBuilder(input));
});

app.listen(3221, () => console.log("API started"));