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
    } catch (e) {
        console.error(e.message);
    }
})

//get all
app.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
    } catch (e) {
        console.error(e.message);
    }
})

//update
app.put("/users/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;
        const updateUser = await pool.query("UPDATE users SET name = $1 WHERE id = $2", [name, id]);

        res.json("User was updated!");
    } catch (e) {
        console.error(e.message);
    }
})
//delete

app.listen(5000, () => {
    console.log("Server has started on port 5000");
})