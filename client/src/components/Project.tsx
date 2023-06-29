import { VscKebabVertical } from "react-icons/vsc";
import { IProject } from "../types/project.types";
import MoreOptions from "./Cards/MoreOptions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Project: React.FC<{ project: IProject }> = ({ project }) => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const navigate = useNavigate()
  const toggleMoreOptions = () => {
    setShowMoreOptions((prevState) => !prevState);
  };

  const seeMoreProjectDetails = (project: IProject)=> {
    navigate("project/"+ project.project_id +'/details')
  }
 

  return (
    <div className="relative  project" draggable >
      <div className="m-3 bg-[#585892] rounded-lg">
        <div className=" p-3   ">
          <div className="flex justify-between items-center ">
            <div className="flex gap-4">
              <p
                className={
                  (project.platform == "App"
                    ? " bg-[#243e3a] text-[#1e7b35] "
                    : " bg-[#fb9500]") +
                  " p-1 px-2 w-fit rounded-full text-center "
                }
              >
                {project.platform}
              </p>
              <p
                className={
                  (project.scope == "Backend"
                    ? "bg-[#f862bb] "
                    : project.scope == "Planning"
                    ? "bg-[#f862bb] "
                    : "") +
                  "bg-[#4099ff] p-1 px-2 w-fit rounded-full text-center"
                }
              >
                {project.scope}
              </p>
            </div>
            <p className="" onClick={toggleMoreOptions}>
              <VscKebabVertical className="cursor-pointer" />
            </p>
          </div>
          <div className="cursor-pointer" onClick={()=>seeMoreProjectDetails(project)}>
            <h4 className="my-2 font-bold">{project.title}</h4>
            <p>{project.description}</p>
          </div>
        </div>

        <div className=" border-t border-[#393649] p-2 cursor-pointer">
          <p className="flex items-center">+ Add Subtask</p>
        </div>
      </div>
      {showMoreOptions && (
        <MoreOptions
          project={project}
          setShowMoreOptions={setShowMoreOptions}
        />
      )}
    </div>
  );
};

export default Project;
