import { FaGripVertical, FaRegStar, FaSearch } from "react-icons/fa";
import SearchInput from "../components/SearchInput/SearchInput";
import { Link, NavLink, Outlet } from "react-router-dom";
import UserCard from "../components/usercard/UserCard";
import { useState } from "react";

const MainSection = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="text-gray-200">
      <div className="flex flex-col gap-4 ">
        <div className="bg-[url('/proj.pn')] bg-no-repeat border-b border-[#393649] bg-right bg-auto ">
          <div className="flex justify-between py-4">
            <div >
              {/* <SearchInput /> */}
              <h1 className="text-2xl text-gray-200">{new Date().toDateString().toLocaleUpperCase()}</h1>
            </div>
            <div className="flex items-center gap-[2rem] relative">
              {/* <div className="">
                <h1 className="text-xl">{new Date().toDateString()}</h1>
              </div> */}
              <div className="flex  gap-4 text-xl cursor-pointer">
                <FaSearch />
                <FaRegStar />
                <FaGripVertical />
              </div>
              <div className="">
                <div className="">
                  <img
                    onClick={() => setShow(!show)}
                    className="h-[2.3rem] rounded-full cursor-pointer hover:border-2 hover:border-[#4099ff]"
                    src="https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png"
                    alt=""
                  />
                </div>
                {show && <UserCard />}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex  gap-x-8 border-b border-[#393649] pb-3">
          <NavLink to="my/organisations" className="">My Organisations</NavLink>
          <Link to="">Projects</Link>
          <Link to="my/teams">Team</Link>
          <Link to="timeline">Timeline</Link>
          <Link to="overview">Overview</Link>
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
