import {user} from "../models/userModel";
import bcrypt from "bcryptjs"

export const register = async(req, res) => {
    try {
        const{fullName, username, password, confirmpassword, gender} = req.body;
        if(!fullName || !username || !password || !confirmpassword || !gender){
            return res.status(400).json({message:"All fields are required"});
        }
        if(password != confirmpassword){
            return res.statues(400).json({message:"password not match"});
        }
        const user = await user.findOne({username});
        if(user){
            return res.status(400).json({message:"username already exit try different way"})
        }
        const hashedPassword = await bcrypt.hash(password,10);
        // Profile photo
        // const 

        await user.create({fullName,
            username,
            password :hashedPassword,
            profilephoto,
            gender
        })
    }catch(error) {}
}