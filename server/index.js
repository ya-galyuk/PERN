const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors())
//access to request that body and then get JSON data
app.use(express.json())

/*
* Routers
 */
//create
app.post("/users", async (req, res) => {
    try {
        const {name} = req.body;
        const newUser = await pool.query("INSERT INTO users (name) VALUES($1)", [name]);
        res.json(newUser);
    }catch (e) {
        console.error(e.message);
    }
})
//get all

//update

//delete

app.listen(5000, () => {
    console.log("Server has started on port 5000");
})