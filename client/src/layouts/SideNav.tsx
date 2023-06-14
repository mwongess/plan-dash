import { Link } from "react-router-dom";
import SearchInput from "../components/SearchInput/SearchInput";
import { FaPlus } from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="h-[95vh] bg-[url('/proje.png')] bg-no-repeat bg-bottom bg-opacity-0">
      <div className=" flex md:flex-col md:justify-between h-full px-2  ">
        <div>
          {/* <SearchInput /> */}
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
          <button className="bg-green-600 py-1 px-2 rounded flex items-center justify-center gap-4 w-full hover:opacity-80">
            <FaPlus />
            <Link to='/dashboard/project/new'>New Project</Link>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
