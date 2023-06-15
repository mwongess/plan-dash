import { LoginExistingUser, SignupNewUser } from "../controllers/user.controllers";
import { Router } from "express";

export const userRouter = Router()

userRouter.post('/signup', SignupNewUser)
userRouter.post('/login', LoginExistingUser)
