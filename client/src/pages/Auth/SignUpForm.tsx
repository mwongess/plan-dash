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
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <input type="text" placeholder="Name" {...register("name")} />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <input type="text" placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input type="text" placeholder="Password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <button>Sign Up</button>
        <div>
          <span>
            Or Login <Link to="/login">here</Link>
          </span>
        </div>
      </form>
    </div>
  );
};
