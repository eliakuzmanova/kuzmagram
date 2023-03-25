const router = require("express").Router();
const multer = require("multer")
const upload = multer({dest: "uploads/"})

const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
const authController = require("../controllers/authController");



router.post("/auth/register", authController.register)
router.post("/auth/login", authController.login)

router.post("/users/getOne", userController.getOne)
router.post("/users/getOneWithRelations", userController.getOneByEmailWithRel)
router.post("/create", upload.single("image"),postController.createPost)
router.post("/profile/edit", upload.single("image"),userController.editProfile)


module.exports = router