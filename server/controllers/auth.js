import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/User.js"

/* REGISTER USER */
export const register = async (req, res) =>{
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body

        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)

        const newuser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random()*10000),
            impressions: Math.floor(Math.random()*10000)
        })
        const savedUser = await newuser.save();
        res.status(201).json(savedUser)
    }catch(err){

    }
}