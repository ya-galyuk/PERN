const pool = require("../db");

module.exports = {
    showUsers: showUsers,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
};

/**
 * create user
 */
async function createUser(req, res) {
    try {
        const data = req.body.username;
        const newUser = await pool.query("INSERT INTO users(name) VALUES($1)", [data]);
        res.json(newUser);
    } catch (e) {
        console.error(e.message);
    }
}

/**
 * get all users
 */
async function showUsers(req, res) {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
    } catch (e) {
        console.error(e.message);
    }
}

/**
 * update user
 */
async function updateUser(req, res) {
    try {
        const id = req.params.id;
        const name = req.body.username;
        const updateUser = await pool.query("UPDATE users SET name = $1 WHERE id = $2", [name, id]);

        res.json("User was updated!");
    } catch (e) {
        console.error(e.message);
    }
}

/**
 * delete user
 */
async function deleteUser(req, res) {

    try {
        const {id} = req.params;
        const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [id]);

        res.json("User was deleted!");
    } catch (e) {
        console.error(e.message);
    }
}