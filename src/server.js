const express = require("express");
const app = express();

function jsonBuilder(value){
    let answers = [];
    return {"input": value, "answers": answers};
}

app.get("/api/answer", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const inp = req.query.input;
    res.json(jsonBuilder(inp));
});

app.listen(3221, () => console.log("API started"));