const express = require("express");
const { google } = require("googleapis");
require('dotenv').config();
const calendarRouter = require("./Routers/calendarRouter");
const app = express();

const PORT = process.env.PORT || 3000;

app.use("/rest/v1/calendar",calendarRouter);
app.get("/",(req,res) => res.send("APIs are up!"));


app.listen(PORT, () => {
    console.log(`Server started on PORT : ${PORT}`);
});