require("dotenv").config();

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.info(`Server is listening at ${PORT}`);
});
