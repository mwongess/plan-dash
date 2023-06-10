import { Link } from "react-router-dom";
import Projects from "../pages/Projects";
import { FaGripVertical, FaRegStar, FaSearch } from "react-icons/fa";

const MainSection = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <div className=" h-28">
          <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-2">
              <img
                className="h-8 rounded-full"
                src="https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png"
                alt=""
              />
              <h1 className="font-bold text-[28px]">Amos Mwongela</h1>
            </div>
            <p>Software Engineer | Scrum Master</p>
          </div>
            <h1 className="text-2xl">{new Date().toDateString()}</h1>
            <div className="flex gap-4 text-sm cursor-pointer">
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
