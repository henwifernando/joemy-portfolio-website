const express = require("express");
const bodyParser = require("body-parser");
const path = require ('path')

const app = express();

/* Frontend */
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"../frontend/views"));

app.use("/static",express.static(path.join(__dirname,"../frontend/static")));

/* Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
const indexRoute = require('./routes/index');

app.use('/',indexRoute);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
