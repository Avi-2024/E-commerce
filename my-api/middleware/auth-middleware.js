import jwt from "jsonwebtoken";
import { User } from "../models/user-model.js";
import dotenv from "dotenv";

dotenv.config();

export const authMiddleware = async (req,res,next) =>{
    const token = req.header("Authorization");
    if(!token){
        return res.status(401).json({msg: "Unauthorized HTTP, Token not Provided"})
    }
    console.log(token);

    const jwtToken = token.replace("Bearer","").trim();

    try {

        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        const  userData = await User.findOne({email:isVerified.email});
        console.log(userData);                           
        req.user = userData;
        req.token= token;
        req.userId= userData._id;
        next();

    } catch (error) {
        return res.status(401).json({msg: "Unauthorized HTTP, Invalid Token",error})
    }
}