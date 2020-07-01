const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors())
//access to request that body and then get JSON data
app.use(express.json())

//set the routes
app.use(require('./router'));


app.listen(5000, () => {
    console.log("Server has started on port 5000");
})