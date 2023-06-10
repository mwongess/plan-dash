import MainSection from "./MainSection";
import SideNav from "./SideNav";

const Dashboard = () => {
  return (
    <div className="sm:flex justify-between min-h-screen bg-[#0f172a] text-white p-4 ">
      <div className="md:w-1/5  border-r border-[#393649]">
        <SideNav />
      </div>
      <div className="md:w-4/5 px-4 ">
        <MainSection/>
      </div>
    </div>
  );
};

export default Dashboard;
