const router = require("express").Router();

// const {isAuth} = require("../middlewares/authMiddleware")
const userController = require("../controllers/userController");

//add middleware to the needed routes <<<<-----------------------

router.get("/users", userController.getUsers)

// router.get("/search", isAuth, addController.getSearchView);
// router.post("/search", isAuth, addController.postSearch);

module.exports = router