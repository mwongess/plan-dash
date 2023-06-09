import { Router } from "express";
import { LoginExistingUser, SignupNewUser } from "../controllers/user.controllers";

export const userRouter = Router()

userRouter.post('/login', LoginExistingUser)
userRouter.post('/signup', SignupNewUser)
