import { Link } from "react-router-dom";
import Projects from "../pages/Projects";
import { FaGripVertical, FaRegStar, FaSearch } from "react-icons/fa";
import { useState } from "react";

const MainSection = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <div className="h-44 bg-[url('/proje.png')] bg-no-repeat bg-right bg-auto">
          <div className="flex justify-between">
            <div className="">
              <div className="flex items-center gap-2">
                <img
                  onClick={() => setShow(!show)}
                  className="h-[2.5rem] rounded-full cursor-pointer hover:border hover:border-[#4099ff]"
                  src="https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png"
                  alt=""
                />
                <h1 className="font-bold text-[28px]">Amos Mwongela</h1>
              </div>
              <p className="ml-[3rem]">Software Engineer | Scrum Master</p>
              {show && (
                <div className="border border-[#393649] rounded p-2 mt-[0.5rem] ml-[1rem]">
                  <p className="cursor-pointer">amosmwongelah@gmail.com</p>
                  <p className="cursor-pointer">User Settings</p>
                  <p className="cursor-pointer text-red-500">Sign Out</p>
                </div>
              )}
            </div>
            <div className="flex text-center">

            <h1 className="text-2xl">{new Date().toDateString()}</h1>
            </div>
            <div className="flex gap-4 text-md cursor-pointer">
              <FaSearch />
              <FaRegStar />
              <FaGripVertical />
            </div>
          </div>
        </div>

        <div className="flex  gap-x-8 border-b border-[#393649] pb-3">
          <Link to="">My Organisations</Link>
          <Link to="">Projects</Link>
          <Link to="">Team</Link>
          <Link to="">Timeline</Link>
          <Link to="">Overview</Link>
        </div>
        <div className="">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
