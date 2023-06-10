import { Link } from "react-router-dom";
import Projects from "../pages/Projects";
import { FaGripVertical, FaRegStar, FaSearch } from "react-icons/fa";

const MainSection = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between h-28">
          <h1 className="text-2xl">{new Date().toDateString()}</h1>
          <div className="flex gap-4 text-sm">
            <FaSearch />
            <FaRegStar />
            <FaGripVertical />
          </div>
        </div>
        <div className="flex  gap-x-8 border-b border-[#393649] pb-3">
          <Link to="">Discussion</Link>
          <Link to="">Tasks</Link>
          <Link to="">Timeline</Link>
          <Link to="">File</Link>
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
