import { Request } from "express";

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
  user_id: string | number
  name: string;
  email: string;
  password: string;
}
