import argon2 from "argon2"
import User from "../Models/User.js"
import jwt from "jsonwebtoken"


const signupController =  async(req, res)=>{
    const hash = await argon2.hash(req.body.password)
    const newUser = new User(
        {
            username:req.body.username,
            email:req.body.email,
            password:hash
        }
    );
    try{
        const savedUser = await newUser.save();
        res.status(200).send(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
}

const loginController = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json("Wrong Email or Password");
        }

        const requiredPassword = user.password;
        const inputPassword = req.body.password;
        if (await argon2.verify(requiredPassword, inputPassword)) {
            const accessToken = jwt.sign({ id: user._id, username : user.username }, process.env.JWT_KEY);


            // res.cookie("access_token", accessToken, {
            //     httpOnly: true,
            //     secure : false,
            //     SameSite: 'None' 
            // }).status(200).json({ _id: user._id, username: user.username });

            res.status(200).json({ 
                _id: user._id, 
                username: user.username,
                token: accessToken
            });
        } else {
            res.status(401).json("Wrong Email or Password");
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

const logoutController = async(req, res) => {
    res.clearCookie("access_token").status(200).json("Logged out successfully");
};



export {signupController, loginController, logoutController}