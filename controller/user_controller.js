import User from '../models/User.js'
import bcrypt from "bcryptjs"

export const getallUsers = async (req, res, next) => {
    let users
    try {
        users = await User.find();
    } catch (error) {
        console.log(error);

    }
    if(!users){
        return res.status(404).json({message: "No user found"})
    }
    return res.status(200).json({users})

    
 }

export const signupUser = async(req, res, next) => {
    const { name, email , password} = req.body;
    let existingUser;
    try {
        existingUser = await  User.findOne({email})
    } catch (error) {
       return console.log(error)
    }
    if(existingUser){
        return res.status(400).json({message: "User already exists! login Instead"})
    }
    try {
        const hashpassword = await bcrypt.hashSync(password)
           const user = new User({
            name,
            email,
            password: hashpassword,
    
        })
        try {
    
            await user.save()
        } catch (error) {
             return console.log(error)
        }
        return res.status(201).json({user})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Signup failed. Please try again later.' })
    }
}

export const loginUser = async(req, res, next)=>{
    const {email , password} = req.body
    let exitingUser;
    try {
        exitingUser = await User.findOne({email})
    } catch (error) {
        console.log(error)
    }
    if(!exitingUser){
        return res.status(404).json({message: "Could not find Email"})
    }
    const isPassCorrext = bcrypt.compare(password, exitingUser.password)
    if(!isPassCorrext){
        return res.status(400).json({message: "Incorrect Password"})
    }
    return res.status(200).json({message: "Login Successfull"})
} 