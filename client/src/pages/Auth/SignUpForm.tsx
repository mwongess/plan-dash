import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../../schemas/auth.schema";
import { IsignupData } from "../../types/auth.types";
import { onSubmitHandler } from "../../actions/auth.actions";

import "./auth.css";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IsignupData>({
    resolver: yupResolver(SignupSchema),
  });

  return (
    <div className="flex justify-center items-center  h-screen">
      <div className="h-full w-[50%] bg-[#03103c] flex items-center justify-center">
        <img src="/se.png" alt="" className=" object-contain" />
      </div>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col items-center justify-center w-[50%] h-full"
      >
        <div className="w-[50%]">
          <div>
            <h1 className="font-bold mb-[1.5rem]">Welcome Folk</h1>
          </div>
          <div className="group mb-[1.5rem] ">
            <input required type="text" className="input w-full" />
            <span className="highlight"></span>
            <span className="bar w-full"></span>
            <label>Name</label>
          </div>
          <div className="group mb-[1.5rem] ">
            <input required type="email" className="input w-full" />
            <span className="highlight"></span>
            <span className="bar w-full"></span>
            <label>Email</label>
          </div>
          <div className="group mb-[1.5rem] ">
            <input required type="password" className="input w-full" />
            <span className="highlight"></span>
            <span className="bar w-full"></span>
            <label>Password</label>
          </div>
          <div className="group mb-[1.5rem] ">
            <input required type="password" className="input w-full" />
            <span className="highlight"></span>
            <span className="bar w-full"></span>
            <label>Confirm Password</label>
          </div>
          <button className="auth-btn border-none   text-white h-[2.55rem] w-full mb-2 rounded">
            Sign up
            <div className="arrow-wrapper">
              <div className="arrow"></div>
            </div>
          </button>
          <div>
            <span>
              Or Login <Link to="/auth/login">here</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};
