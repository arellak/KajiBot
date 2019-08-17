const express = require("express");
const app = express();

app.get("/api/answer/:answer", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const input = JSON.stringify(req.params.answer);
    res.send(input);
});

app.listen(3221, () => console.log("API started"));