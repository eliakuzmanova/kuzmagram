const router = require("express").Router();
const multer = require("multer")
const upload = multer({dest: "uploads/"})

const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
const authController = require("../controllers/authController");



router.post("/auth/register", authController.register)
router.post("/auth/login", authController.login)

router.post("/users/getOne", userController.getOne)
router.post("/users/getOneWithRelations", userController.getOneByUsernameWithRel)
router.post("/users/addFollower", userController.addFollower)
router.post("/users/removeFollower", userController.removeFollower)
router.post("/users/delete", userController.deleteUser)
router.post("/profile/edit", upload.single("image"),userController.editProfile)

router.post("/posts/create", upload.single("image"),postController.createPost)
router.post("/posts/:profileId/like",postController.likePost)

module.exports = router