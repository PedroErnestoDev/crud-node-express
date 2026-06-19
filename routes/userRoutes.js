const express = require("express");

const router = express.Router();

const UserController = require("../controllers/userController");

router.get(
    "/usuarios",
    UserController.getUsers
)

router.get(
    "/usuario/:id",
    UserController.listUser
)

router.post(
    "/usuarios",
    UserController.createUser
)

router.delete(
    "/usuarios/:id",
    UserController.deleteUser
)

router.put(
    "/usuario/:id",
    UserController.uptadeUser
)

module.exports = router;