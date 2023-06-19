import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="h-[95vh] bg-[url('/proje.png')] bg-no-repeat bg-bottom bg-opacity-0">
      <div className=" flex md:flex-col md:justify-between h-full px-2  ">
        <div>
          <img className="h-[6rem]" src="/logo.png" alt="" />
          <div>
            <h3>FAVORITES</h3>
          </div>
        </div>

        <div>
          <h3>ALL PROJECTS</h3>
        </div>
        <div>
          <h3>ARCHIVES</h3>
        </div>
        <div>
          <Link to="/dashboard/project/new">
            <button className="bg-[#00A97F] py-1 px-2 rounded flex items-center justify-center gap-3 w-full hover:opacity-80">
              <FaPlus />
              New Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
