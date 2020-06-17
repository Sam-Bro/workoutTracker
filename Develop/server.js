const express = require("express");
const mongoose = require("mongoose");


let app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("app running on: " + PORT);
});
