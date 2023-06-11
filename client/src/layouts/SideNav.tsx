import { FaPlus } from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="h-[95vh]">
      <div className=" flex md:flex-col md:justify-between h-full px-2 ">
        <div>
          <input
            className="bg-[#2b283d] p-2 rounded w-full mb-2"
            type="search"
            name=""
            id=""
            placeholder="Search here "
          />
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
            New Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
