import { Request } from "express";
import { string } from "joi";

export interface ISignupRequest extends Request {
  body: {
    name: string;
    email: string;
    password: string;
  };
}

export interface ILoginRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

export interface IUser {
  user_id: string | number;
  name: string;
  email: string;
  password: string;
}

export interface IUserInfo {
  user_id: string;
  name: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}
