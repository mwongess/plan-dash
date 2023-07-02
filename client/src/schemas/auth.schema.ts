import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  username: yup.string().required("Name is required!"),
  email: yup.string().email("Email must contain @ symbol!").required("Email is required!"),
  password: yup.string().min(4,"Password must be atleast 4 characters long!").max(32).required("Password cannot be empty!"),
  confirmpass: yup.string().oneOf([yup.ref("password")], 'Passwords must match!'),
});

export const LoginSchema = yup.object({
  email: yup.string().email("Email must contain @ symbol!").required("Email cannot be empty!"),
  password: yup.string().min(4,"Password must be atleast 4 characters long!").max(15).required("Password is required!"),
});
