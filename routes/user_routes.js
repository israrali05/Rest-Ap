import express from 'express'

import { getallUsers, loginUser, signupUser } from '../controller/user_controller.js';


const router = express.Router()

router.get("/", getallUsers)
router.post("/signup",signupUser)
router.post("/login",loginUser)


export default router