import { Link } from "react-router-dom";

import { FaBitbucket, FaGithub, FaGitlab } from "react-icons/fa";
import { onSubmitHandler } from "../../actions/auth.actions";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { LoginSchema } from "../../schemas/auth.schema";
import { ILoginData } from "../../types/auth.types";
import "./auth.css";
export const LoginForm = () => {
  const { handleSubmit } = useForm<ILoginData>({
    resolver: yupResolver(LoginSchema),
  });

  return (
    <div className="h-screen sm:flex  ">
      <div className= "clip-path w-full h-[15%] md:h-full sm:w-[50%] flex items-center justify-center bg-[#03103c] ">
        <img className="h-[6rem] md:h-auto" src="/se.png" alt="" />
      </div>
      <form
        className="sm:w-[50%]  flex items-center justify-center p-4"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="sm:w-[50%] w-full">
          <div className="flex flex-col gap-2 justify-between mb-[1.5rem]">
            <button
              className="flex items-center justify-center gap-3 border h-[2.5rem] w-full"
              type="button"
            >
              <FaGithub />
             Continue with Github
            </button>
            <button
              className="flex items-center justify-center gap-3 border h-[2.5rem]  w-full"
              type="button"
            >
              <FaGitlab />
             Continue with GitLab
            </button>
            <button className="flex items-center justify-center gap-2 border  h-[2.5rem]">
            <FaBitbucket/>  Continue with BitBucket
            </button>
          </div>
          <div className="group mb-[1.5rem] ">
            <input required type="text" className="input w-full" />
            <span className="highlight "></span>
            <span className="bar w-full"></span>
            <label>Name</label>
          </div>
          <div className="group mb-[2.5rem] ">
            <input required type="password" className="input w-full" />
            <span className="highlight"></span>
            <span className="bar w-full"></span>
            <label>Password</label>
          </div>
          <button className="auth-btn border-none  flex items-center justify-center   text-white h-[2.55rem] w-full mb-[1.5rem] rounded">
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
