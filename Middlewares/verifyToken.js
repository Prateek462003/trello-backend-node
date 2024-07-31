import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) =>{
    const token = req.cookies.access_token;
    console.log("Cookies", req.cookies);
    if(!token){
        return res.status(401).json("You are not authenticated");
    }

    jwt.verify(token, process.env.JWT_KEY, (err, user)=>{
        if(err){
            return res.status(500).json("invalid Token");
        }
        req.user = user
        console.log("verified", user)
        next();
    });
}

export {verifyToken}