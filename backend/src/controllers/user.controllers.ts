import { ILoginRequest, ISignupRequest, IUser } from "../types/user.types";
import { Connection } from "../helpers/db.helpers";
import jwt from "jsonwebtoken";
import { Response } from "express";
import { v4 as uuid } from "uuid";

import bcrypt from "bcrypt";

import dotenv from "dotenv";
dotenv.config();

const db = new Connection();

export const SignupNewUser = async (req: ISignupRequest, res: Response) => {
  try {
    const userId = uuid();
    let { name, email, password, confirmPassword } = req.body;
    console.log(name, email);
    const { recordset } = await db.executeProcedure("GetUser", { email });
    if (recordset.length > 0) {
      return res.json({ error: "Account already exists" });
    }
    password = await bcrypt.hash(password, 10);
    await db.executeProcedure("NewUser", {
      userId,
      name,
      email,
      password,
      confirmPassword,
    });
    res.json({ message: "Account created" });
  } catch (error) {
    res.json({ error: error });
  }
};

export const LoginExistingUser = async (req: ILoginRequest, res: Response) => {
  try {
    let { email, password } = await req.body;
    const user: IUser[] = (await db.executeProcedure("GetUser", { email }))
      .recordset;
    !user[0] ? res.json({ error: "Account doesnt exist" }) : null;
    const validpassword = await bcrypt.compare(password, user[0].password);
    !validpassword ? res.json({ error: "Try another password" }) : null;

    const payload = user.map((item) => {
      const { password, confirmPassword, ...rest } = item;
      return rest;
    });
    console.log(payload);
    const token = jwt.sign(payload[0], process.env.JWT_KEY as string, {
      expiresIn: "3600s",
    });
    console.log(token);
    res.status(200).json({
      message: "Logged in successfully",
      token,
    });
  } catch (error) {}
};
