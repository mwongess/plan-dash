import Projects from "../pages/Projects";
import SideNav from "./SideNav";

const Dashboard = () => {
  return (
    <div>
      <div>
        <SideNav />
      </div>
      <div>
        <Projects />
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
