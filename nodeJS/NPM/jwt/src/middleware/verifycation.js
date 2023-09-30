const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const token = req.headers.token;
    if (token) {
        const accessToken = token.split(' ')[1];
        console.log(accessToken);
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY, (error, user) => {
            if (error) {
                return res.status(500).json(`error: ${error}`);
            }
            req.user = user; // data user => same web jwt
            next();
        });
    } else {
        return res.status(404).json("You're not authentication");
    }
};

const verifyIsAdminOrOwn = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id == req.body._id || req.user.admin) {
            next();
        } else {
            res.status(403).json("You're not allow");
        }
    });
};

module.exports = { verifyToken, verifyIsAdminOrOwn };
