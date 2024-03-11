const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.listen(process.env.PORT, () => {
    console.log("Listening to port: ", process.env.PORT);
})