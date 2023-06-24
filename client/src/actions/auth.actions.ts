import { ILoginData, IsignupData } from "../types/auth.types";

// export const onSubmitHandler = (data: ILoginData | IsignupData) => {
// Send data to server
//   console.log(data)
//   reset();
// };

const URL = "http://localhost:3000/auth/"

export const signup = async(user:IsignupData)=> {
  const {username, email,password} = user
  const name = username
  const res= await fetch(`${URL}signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name,email,password})
  })
  if (!res.ok) {
    throw new Error('Network response was not ok!')
  }
  const data = await res.json()
}


export const login = async(user: ILoginData)=>{
  const res= await fetch(`${URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  })
  if (!res.ok) {
    throw new Error('Network response was not ok!')
  }
  const data = await res.json()
}