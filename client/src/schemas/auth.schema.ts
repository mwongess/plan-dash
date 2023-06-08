import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(4).max(32).required("Password cannot be empty!"),
  confirmpass: yup.string().oneOf([yup.ref("password")]),
});

export const LoginSchema = yup.object({
  email: yup.string().email().required("Email cannot be empty!"),
  password: yup.string().min(4).max(15).required("Password is required"),
});