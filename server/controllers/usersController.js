const db = require('../database/models/index');
const User = db['User'];

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
        const data = req.body;
        const newUser = await User.create({
            userName: data.username,
        });
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
        const allUsers = await User.findAll();
        res.send(JSON.stringify(allUsers, null, 2));
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
        const username = req.body.username;
        await User.update({ userName: username }, {
            where: {
                id: id
            }
        });
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
        await User.destroy({
            where: {
                id: id
            }
        });
        res.json("User was deleted!");
    } catch (e) {
        console.error(e.message);
    }
}