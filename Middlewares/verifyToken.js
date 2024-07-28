import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) =>{
    const token = req.cookie.access_token;
    if(!token){
        res.status(401).json("You are not authenticated");
    }
    jwt.verify(token, process.env.JWT_KEY, (err, user)=>{
        if(err){
            res.status(500).json("invalid Token");
        }
        req.user = user
        next();
    });
}

export {verifyToken}