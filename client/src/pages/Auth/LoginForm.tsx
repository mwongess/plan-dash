import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginSchema } from "../../schemas/auth.schema";
import { ILoginData } from "../../types/auth.types";
import { onSubmitHandler } from "../../actions/auth.actions";
import "./auth.css";
export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: yupResolver(LoginSchema),
  });

  return (
    <div className="h-screen flex ">
      <div className="w-[50%] flex items-center justify-center bg-[#03103c]">
        <img src="/se.png" alt="" />
      </div>
      <form
        className="w-[50%] flex items-center justify-center"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="w-[50%]">
          <div>
            <h1 className="font-bold mb-[1.5rem]">Welcome Back</h1>
          </div>
          <div className="group mb-[1.5rem] ">
            <input required type="text" className="input w-full" />
            <span className="highlight "></span>
            <span className="bar w-full"></span>
            <label>Name</label>
          </div>
          <div className="group mb-[1.5rem] ">
            <input required type="password" className="input w-full" />
            <span className="highlight"></span>
            <span className="bar w-full"></span>
            <label>Password</label>
          </div>
          <button className="auth-btn border-none   text-white h-[2.55rem] w-full mb-2 rounded">
            Login
            <div className="arrow-wrapper">
              <div className="arrow"></div>
            </div>
          </button>{" "}
          <div>
            <span>
              Or SignUp{" "}
              <Link to="/auth/signup" className="">
                here
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};
