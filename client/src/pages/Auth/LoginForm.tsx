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
        <div>
          <div>
            <input className="border border-[#393649] mb-[1rem] px-4" type="text" placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <input
            className="border border-[#393649] mb-[1rem] px-4"
              type="text"
              placeholder="Password"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </div>
          <button className="w-full mb-[1rem] bg-[#4b95d6] text-white rounded h-[1.8rem]">Login</button>
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
