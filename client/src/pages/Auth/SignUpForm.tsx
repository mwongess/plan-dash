import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../../schemas/auth.schema";
import { IsignupData } from "../../types/auth.types";
import { onSubmitHandler } from "../../actions/auth.actions";

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
        <div>
          <div>
            <h1 className="font-bold mb-2">Welcome Folk</h1>
          </div>
          <div className="mb-[1rem]">
            <input
              className="bg-transparent border border-[#393649] w-full px-4"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            <p className="text-red-500">{errors.name?.message}</p>
          </div>
          <div className="mb-[1rem]">
            <input
              className="bg-transparent border border-[#393649] w-full px-4"
              type="text"
              placeholder="Email"
              {...register("email")}
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div className="mb-[1rem]">
            <input
              className="bg-transparent border border-[#393649]  w-full px-4"
              type="text"
              placeholder="Password"
              {...register("password")}
            />
            <p className="text-red-500">{errors.password?.message}</p>
          </div>
          <div className="mb-[1rem]">
            <input
              className="bg-transparent border border-[#393649] w-full  px-4"
              type="text"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            <p className="text-red-500">{errors.confirmPassword?.message}</p>
          </div>
          <button className="border-none bg-[#4b95d6] hover:opacity-90 text-white h-[1.8rem] w-full mb-2 rounded">
            Sign Up
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
