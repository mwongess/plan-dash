import { Link, useNavigate } from "react-router-dom";

import { FaBitbucket, FaGithub, FaGitlab } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { LoginSchema } from "../../schemas/auth.schema";
import { ILoginData } from "../../types/auth.types";
import { login } from "../../actions/auth.actions";
import Error from "../../components/Error";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./auth.css";
export const LoginForm = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: yupResolver(LoginSchema),
  });

  // Send data to server
  const onSubmitHandler = async (data: ILoginData) => {
    console.log(data);
    const dataFromServer = await login(data);

    if (dataFromServer.error) {
      setError(dataFromServer.error);
    } else {
      reset();
    }
    if (dataFromServer.token) {
      const { token } = dataFromServer;
      localStorage.setItem("user", JSON.stringify(token));
      toast("Login Success");
      navigate("/dashboard");
    }
  };

  return (
    <div className="h-screen sm:flex  ">
      <div className="clip-path w-full h-[15%] md:h-full sm:w-[50%] flex items-center justify-center bg-[#03103c] ">
        <img className="h-[6rem] md:h-auto" src="/se.png" alt="" />
      </div>
      <ToastContainer />
      <form
        className="sm:w-[50%]  flex items-center justify-center p-4"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="sm:w-[50%] w-full">
          {error && <Error message={error} />}
          <div className="flex flex-col gap-2 justify-between mb-[1.5rem]">
            <button
              className="flex items-center justify-center gap-3 border-2 rounded h-[2.5rem] w-full"
              type="button"
            >
              <FaGithub />
              Continue with Github
            </button>
            <button
              className="flex items-center justify-center gap-3 border-2 rounded h-[2.5rem]  w-full"
              type="button"
            >
              <FaGitlab />
              Continue with GitLab
            </button>
            <button className="flex items-center justify-center gap-2 border-2 rounded  h-[2.5rem]">
              <FaBitbucket /> Continue with BitBucket
            </button>
          </div>
          <div className="group mb-[1.5rem] ">
            <input
              {...register("email")}
              type="email"
              className="input w-full"
            />
            <span className="highlight "></span>
            <span className="bar w-full"></span>
            <label>Email</label>
            <p className="text-[red]">{errors.email?.message}</p>
          </div>
          <div className="group mb-[2.5rem] ">
            <input
              {...register("password")}
              type="password"
              className="input w-full"
            />
            <span className="highlight"></span>
            <span className="bar w-full"></span>
            <label>Password</label>
            <p className="text-[red]">{errors.password?.message}</p>
          </div>
          <button className="auth-btn border-none  flex items-center justify-center   text-white h-[2.55rem] w-full mb-[1.5rem] rounded">
            Login
            <div className="arrow-wrapper">
              <div className="arrow"></div>
            </div>
          </button>{" "}
          <div>
            <span>
              <Link to="/auth/signup" className="text-[blue]">
                Or SignUp here
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};
