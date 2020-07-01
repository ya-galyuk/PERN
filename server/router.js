const express = require('express');
const router = express.Router();
const usersController = require('./controllers/usersController');

//export router
module.exports = router;

router.post('/users', usersController.createUser);

//get all
router.get("/users", usersController.showUsers)

//update
router.put("/users/:id", usersController.updateUser)

//delete
router.delete("/users/:id", usersController.deleteUser)