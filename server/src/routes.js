const router = require("express").Router();
// const multer = require("multer")
// const {v4: uuidv4} = require("uuid")
// const path = require("path")

// const storage = multer.diskStorage({
//     destination: function (req, file, cb){
//         cb(null, "images")
    
// },
// filename: function (req, file, cb) { 
//     cb(null, uuidv4() + "-" + Date.now()) + path.extname(file.originalname)
// }
// });

// const fileFilter = (req, file, cb) => {
//     const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg"];
//     if(allowedFileTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// };

// let upload = multer({storage, fileFilter})

// const {isAuth} = require("../middlewares/authMiddleware")
const userController = require("../controllers/userController");
const postController = require("../controllers/postController");

//add middleware to the needed routes <<<<-----------------------

router.get("/users", userController.getUsers)
router.post("/create", postController.createPost)


// router.route("/create").post(upload.single(image), (req, res) => {
//     const image = req.file.image
//     postService.create(image)
//         .then(() => res.json("User added"))
//         .catch(err => res.status(400).json("Error" + err))

// })

// router.get("/search", isAuth, addController.getSearchView);
// router.post("/search", isAuth, addController.postSearch);

module.exports = router