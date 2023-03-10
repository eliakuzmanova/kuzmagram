const SECRET = require("../utils/secret");
const jwt = require("../utils/jsonwebtoken");

exports.authentication = async (req, res, next) => {

    const token = req.cookies["auth"] 

    if (token) {
          
        try {
            
            const decodedToken = await jwt.verify(token, SECRET);

            req.user = decodedToken
            res.locals.isAuthenticated = true;
            res.locals.user = decodedToken
            // req.isAuthenticated = true;
        } catch (err) {
            
            res.clearCookie("auth")
            return res.status(401).render("home/404", {erorrs: err})
        }
    }
    next();
};

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        res.redirect("/login")
    }

    next();
};