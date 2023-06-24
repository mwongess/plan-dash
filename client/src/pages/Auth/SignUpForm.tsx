import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../../schemas/auth.schema";
import { IsignupData } from "../../types/auth.types";

import "./auth.css";
import { FaBitbucket, FaGithub, FaGitlab } from "react-icons/fa";
import { useState } from "react";
import { signup } from "../../actions/auth.actions";

export const SignUp = () => {
  const [showOptions, setShowOptions] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IsignupData>({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmitHandler = (data: IsignupData) => {
    // Send data to server

    signup(data);
    reset();
  };

  return (
    <div className="md:flex justify-center items-center  sm:h-screen">
      <div className="clip-path w-full md:w-[50%] h-[15%] md:h-full bg-[#03103c] flex items-center justify-center">
        <img className="h-[6rem] md:h-auto" src="/se.png" alt="" />
      </div>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col sm:items-center sm:justify-center md:w-[50%] h-full p-4"
      >
        <div className="w-full md:w-[50%]">
          {showOptions && (
            <>
              <div className="flex flex-col gap-4">
                <button
                  className="flex items-center justify-center gap-3 w-full border h-[2.5rem]"
                  type="button"
                >
                  <FaGithub />
                  Continue with Github
                </button>
                <button
                  className="flex items-center justify-center gap-3 border w-full h-[2.5rem]"
                  type="button"
                >
                  <FaGitlab />
                  Continue with GitLab
                </button>
                <button className="flex items-center justify-center gap-2 border  h-[2.5rem]">
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
              className="border w-full h-[2.5rem] mt-[1rem] mb-[1.3rem]"
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
              </div>
              <button className="auth-btn flex items-center justify-center border-none   text-white h-[2.55rem] w-full mb-2 rounded">
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
            </>
          )}
        </div>
      </form>
    </div>
  );
};
