// import models from "./models";

const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors())
//access to request that body and then get JSON data
app.use(express.json())

//Database
const db = require('./database/config/db')
//Test db
db.authenticate()
    .then(()=>console.log("Database connected!"))
    .catch(err => console.log("Error: " + err))

//set the routes
app.use('/users', require('./router/users'));

app.listen(5000, () => {
    console.log("Server has started on port 5000");
})