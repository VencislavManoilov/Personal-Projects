const express = require("express");
const app = express();
const path = require("path");
const fetch = require("node-fetch");
const PORT = 3000;

app.use(express.static('public'));

app.get("/", function(req, res) {
    res.status(200);
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, function() {
    console.log("Listening: " + PORT);
});

app.get("/test", function(req, res) {
    res.status(200);
    res.send("It works");
});

app.get("/getWeather", async function(req, res) {
    try {
        const response = await fetch("http://api.weatherapi.com/v1/current.json?key=d89fee9ba391445fbd7224934232208&q=London&aqi=no");
        const json = await response.json();
        res.status(200).json(json);
    } catch(error) {
        res.status(400);
        res.send("Something is wrong!");
    }
});