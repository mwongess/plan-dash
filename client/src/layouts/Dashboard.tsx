import { useEffect, useState } from "react";
import MainSection from "./MainSection";
import SideNav from "./SideNav";
import { Outlet, useLoaderData } from "react-router-dom";
import { log } from "console";
// import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
 
  // const navigate = useNavigate()
  // useEffect(()=>{
  //   !isLoggedIn ? navigate('/auth/login') : null
  // },[isLoggedIn])

  return (
    <>
    <div className="sm:flex justify-between min-h-screen bg-[#0f172a] text-white p-4 ">
      <div className="md:w-[17%] border-r border-[#393649]">
        <SideNav />
      </div>
      <div className="md:w-[83%] px-4 ">
        <MainSection/>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
