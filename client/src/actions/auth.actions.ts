import { ILoginData, IsignupData } from "../types/auth.types";
import { useForm } from "react-hook-form";

const { reset } = useForm();

export const onSubmitHandler = (data: ILoginData | IsignupData) => {
  // Send data to server
  reset();
};
