import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../../schemas/auth.schema";
import { IsignupData } from "../../types/auth.types";

import "./auth.css";
import { FaBitbucket, FaGithub, FaGitlab } from "react-icons/fa";
import { useState } from "react";
import { signup } from "../../actions/auth.actions";
import Error from "../../components/Error";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignUp = () => {
  const [showOptions, setShowOptions] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IsignupData>({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmitHandler = async (data: IsignupData) => {
    // Send data to server

    const dataFromServer = await signup(data);
    if (dataFromServer.message) {
      toast(dataFromServer.message);
    }
    if (dataFromServer.error) {
      setError(dataFromServer.error);
    } else {
      reset();
    }
  };

  return (
    <div className="md:flex justify-center items-center  sm:h-screen">
      <div className="clip-path w-full md:w-[50%] h-[15%] md:h-full bg-[#03103c] flex items-center justify-center">
        <img className="h-[6rem] md:h-auto" src="/se.png" alt="" />
      </div>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col sm:items-center sm:justify-center md:w-[50%] h-full p-4"
      >
        <div className="w-full md:w-[50%]">
          {error && <Error message={error} />}
          {showOptions && (
            <>
              <div className="flex flex-col gap-4">
                <button
                  className="flex items-center justify-center gap-3 w-full border-2 rounded h-[2.5rem]"
                  type="button"
                >
                  <FaGithub />
                  Continue with Github
                </button>
                <button
                  className="flex items-center justify-center gap-3 border-2 rounded w-full h-[2.5rem]"
                  type="button"
                >
                  <FaGitlab />
                  Continue with GitLab
                </button>
                <button className="flex items-center justify-center gap-2 border-2 rounded  h-[2.5rem]">
                  <FaBitbucket /> Continue with BitBucket
                </button>
                <h2 className="line-aside border-b">
                  <span>OR</span>
                </h2>
              </div>
            </>
          )}

          <div>
            <button
              className="border-2 rounded w-full h-[2.5rem] mt-[1rem] mb-[1.3rem]"
              type="button"
              onClick={() => {
                setShowForm(!showForm);
                setShowOptions(!showOptions);
              }}
            >
              {showOptions ? "Continue with Email" : "Other Options"}
            </button>
          </div>
          {showForm && (
            <>
              <div className="group mb-[1.5rem] ">
                <input
                  {...register("username")}
                  required
                  type="text"
                  className="input w-full"
                />
                <span className="highlight"></span>
                <span className="bar w-full"></span>
                <label>Name</label>
                <p className="text-[red]">{errors.username?.message}</p>
              </div>
              <div className="group mb-[1.5rem] ">
                <input
                  {...register("email")}
                  required
                  type="email"
                  className="input w-full"
                />
                <span className="highlight"></span>
                <span className="bar w-full"></span>
                <label>Email</label>
                <p className="text-[red]">{errors.email?.message}</p>
              </div>
              <div className="group mb-[1.5rem] ">
                <input
                  {...register("password")}
                  required
                  type="password"
                  className="input w-full"
                />
                <span className="highlight"></span>
                <span className="bar w-full"></span>
                <label>Password</label>
                <p className="text-[red]">{errors.password?.message}</p>
              </div>
              <div className="group mb-[1.5rem] ">
                <input
                  {...register("confirmpass")}
                  required
                  type="password"
                  className="input w-full"
                />
                <span className="highlight"></span>
                <span className="bar w-full"></span>
                <label>Confirm Password</label>
              <p className="text-[red]">{errors.confirmpass?.message}</p>
              </div>

              <button className="auth-btn flex items-center justify-center border-none   text-white h-[2.55rem] w-full mb-2 rounded">
                Sign up
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
                </div>
              </button>
              <div>
                <span>
                  <Link to="/auth/login " className="text-[blue]">
                    Or Login here
                  </Link>
                </span>
              </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
};
