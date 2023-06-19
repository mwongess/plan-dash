import { redirect } from "react-router-dom";
const Landing = () => {
  return (
    <>
      
    </>
  );
};

export const loader = async () => {
  return redirect("/dashboard");
};

export default Landing;
