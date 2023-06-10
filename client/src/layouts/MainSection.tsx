import { Link } from "react-router-dom";
import Projects from "../pages/Projects";

const MainSection = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <div className="">
          <h1 className="text-xl">{new Date().toDateString()}</h1>
        </div>
        <div className="flex  gap-x-6 border-b border-[#393649] pb-3">
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
