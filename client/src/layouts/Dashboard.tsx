import MainSection from "./MainSection";
import SideNav from "./SideNav";

const Dashboard = () => {
  return (
    <>
    <div className="sm:flex justify-between min-h-screen bg-[#0f172a] text-white px-4 pt-4 pb-[6rem]">
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
