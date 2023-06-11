import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginSchema } from "../../schemas/auth.schema";
import { ILoginData } from "../../types/auth.types";
import { onSubmitHandler } from "../../actions/auth.actions";

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
      <div className="w-[50%] flex items-center justify-center bg-[#03103c]" >
        <img src="/se.png" alt="" />
      </div>
      <form className="w-[50%] flex items-center justify-center" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="w-[50%]">
          <div>
            <h1 className="font-bold mb-[1rem]">Welcome Back</h1>
          </div>
          <div className="mb-[1rem]">
            <input className="border border-[#393649] w-full h-[2rem] px-4" type="text" placeholder="Email" {...register("email")} />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div className="mb-[1rem]">
            <input
            className="border border-[#393649] w-full h-[2rem] px-4"
              type="text"
              placeholder="Password"
              {...register("password")}
            />
            <p className="text-red-500">{errors.password?.message}</p>
          </div>
          <button className="w-full mb-[1rem] bg-[#4b95d6] hover:opacity-90 text-white rounded h-[2rem]">Login</button>
          <div>
            <span>
              Or SignUp <Link to="/auth/signup" className="">here</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};
