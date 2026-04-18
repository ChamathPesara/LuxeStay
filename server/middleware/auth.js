const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) => {
    const token = req.headers.authorization;

    if(!token) return res.status(401).json("No tokens provided");

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json("Invalid token");
    }
};

const verifyAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json("Admin access only");
  }
};

module.exports = { verifyToken, verifyAdmin };