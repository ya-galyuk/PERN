const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

//create
router.post('/', usersController.createUser);

//get all
router.get("/", usersController.showUsers)

//update
router.put("/:id", usersController.updateUser)

//delete
router.delete("/:id", usersController.deleteUser)

//export router
module.exports = router;