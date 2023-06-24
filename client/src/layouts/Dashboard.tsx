import { useNavigate } from "react-router-dom";
import MainSection from "./MainSection";
import SideNav from "./SideNav";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  const user: string = JSON.parse(localStorage.getItem("user") as string);

  useEffect(() => {
    if (!user) {
      return navigate("/auth/login");
    }
  }, [user]);
  
  if (user) {
    return (
      <>
        <div className="sm:flex justify-between min-h-screen bg-[#0f172a] text-white px-4 pt-4 pb-[6rem]">
          <div className="hidden lg:block md:w-[20%] border-r border-[#393649] min-h-[100vh] overflow-y-auto  overscroll-none">
            <SideNav />
          </div>
          <div className="w-full over md:w-[80%] px-4 ">
            <MainSection />
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard;
