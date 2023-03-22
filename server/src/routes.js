const router = require("express").Router();
const multer = require("multer")
const upload = multer({dest: "uploads/"})

const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
const authController = require("../controllers/authController");



router.post("/auth/register", authController.register)
router.post("/auth/login", authController.login)

router.get("/users", userController.getUsers)
router.post("/create", upload.single("image"),postController.createPost)


module.exports = router