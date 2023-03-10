const router = require("express").Router();

const {isAuth} = require("../middlewares/authMiddleware")

//add middleware to the needed routes <<<<-----------------------


// router.get("/search", isAuth, addController.getSearchView);
// router.post("/search", isAuth, addController.postSearch);

module.exports = router