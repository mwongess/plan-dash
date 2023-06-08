import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginSchema } from "../../schemas/auth.schema";
import { ILoginData } from "../../types/auth.types";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginData>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmitHandler = () =>{
    // Send data to server then..
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <input type="text" placeholder="Email" {...register('email') } />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input type="text" placeholder="Password" {...register('password')}/>
          <p>{errors.password?.message}</p>
        </div>
        <button>Login</button>
        <div>
          <span>
            Or SignUp <Link to="#">here</Link>
          </span>
        </div>
      </form>
    </div>
  );
};
