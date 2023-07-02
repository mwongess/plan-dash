import { ILoginData, IsignupData } from "../types/auth.types";
import { apiDomain } from "../utils/api";

const URL = apiDomain + "auth/";

export const getLoggedInUser = (): string => {
  const user: string = JSON.parse(localStorage.getItem("user") as string);
  return user;
};

export const signup = async (user: IsignupData) => {
  const { username, email, password } = user;
  const name = username;
  const res = await fetch(`${URL}signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  if (!res.ok) {
    throw new Error("Network response was not ok!");
  }
  const data = res.json();
  return data;
};

export const login = async (user: ILoginData) => {
  const res = await fetch(`${URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!res.ok) {
    throw new Error("Network response was not ok!");
  }
  const data = res.json();

  return data;
};
