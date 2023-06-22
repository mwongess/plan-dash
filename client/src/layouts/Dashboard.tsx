import MainSection from "./MainSection";
import SideNav from "./SideNav";

const Dashboard = () => {
  return (
    <>
      <div className="sm:flex justify-between min-h-screen bg-[#0f172a] text-white px-4 pt-4 pb-[6rem]">
        <div className="md:w-[20%] border-r border-[#393649] h-[100vh] overflow-y-auto  overscroll-none">
          <SideNav />
        </div>
        <div className="md:w-[80%] px-4 ">
          <MainSection />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
