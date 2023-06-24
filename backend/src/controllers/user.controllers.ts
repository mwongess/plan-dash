import { ILoginRequest, ISignupRequest, IUser } from "../types/user.types";
import { LoginSchema, SignUpSchema } from "../schemas/auth.schemas";
import { Connection } from "../helpers/db.helpers";
import { Response } from "express";
import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const db = new Connection();

export const SignupNewUser = async (req: ISignupRequest, res: Response) => {
  try {
    const user_id = uuid();
    let { name, email, password } = req.body;
    const { error, value } = SignUpSchema.validate(req.body);
    if (error) {
      return res.status(500).json({ error: error.details[0].message });
    }
    const { recordset } = await db.executeProcedure("GetUser", { email });
    if (recordset.length > 0) {
      return res.json({ error: "Account already exists" });
    }
    password = await bcrypt.hash(password, 10);
    await db.executeProcedure("NewUser", {
      user_id,
      name,
      email,
      password,
    });
    res.json({ message: "Account created successfully" });
  } catch (error: any) {
    res.json({error: error.message});
  }
};

export const LoginExistingUser = async (req: ILoginRequest, res: Response) => {
  try {
    let { email, password } = req.body;
    const { error, value } = LoginSchema.validate(req.body);
    if (error) {
      return res.status(500).json({ error: error.details[0].message });
    }
    const user: IUser[] = (await db.executeProcedure("GetUser", { email }))
      .recordset;
    if (!user[0]) {
      return res.json({ error: "Account doesnt exist" });
    }
    const validpassword = await bcrypt.compare(password, user[0].password);
    if (!validpassword) {
      return res.json({ error: "Try another password" });
    }
    const payload = user.map((item) => {
      const { password, ...rest } = item;
      return rest;
    });
    const token = jwt.sign(payload[0], process.env.JWT_KEY as string, {
      expiresIn: "3600s",
    });
    res.status(200).json({
      message: "Logged in successfully",
      token,
    });
  } catch (error:any) {
    res.json({error: error.message});
  }
};
