import { FaArchive, FaBatteryHalf, FaTrash, FaUserCheck } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { VscKebabVertical } from "react-icons/vsc";
import { useState } from "react";
import { IProject } from "../types/project.types";
import { deleteProject } from "../actions/project.actions";
// import {useContext} from 'react'

const Project: React.FC<{project: IProject  }> = ({project}) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const toggleMoreDetails = () => {
    setShowMoreDetails((prevState) => !prevState);
  };
  const queryClient = useQueryClient();

  const deleteProjectMutation = useMutation({
    mutationFn: (id: string) => deleteProject(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
    },
  });

  return (
    <div className="relative">
      <div className="m-3 p-3 bg-[#29253d] rounded-lg ">
        <div className="flex justify-between items-center ">
          <div className="flex gap-4">
            <p className="bg-[#243e3a] text-[#1e7b35] p-1 px-2 w-fit rounded-full text-center ">
              {project.platform}
            </p>
            <p className="bg-[#4099ff] p-1 px-2 w-fit rounded-full text-center">
              {project.scope}
            </p>
          </div>
          <p className="" onClick={toggleMoreDetails}>
            <VscKebabVertical className="cursor-pointer" />
          </p>
        </div>
        <div>
          <h4 className="my-2 font-bold">{project.title}</h4>
          <p>
            {project.description}
          </p>
        </div>
      </div>
      {showMoreDetails && (
        <div className="absolute top-0 left-0 z-[100] mt-[2rem] flex  p-4 w-full  h-[fit-content] rounded">
          <div className="w-[20%]"></div>
          <div className="flex flex-col items-center gap-[0.5rem] bg-[#1c2333] min-w-[80%] p-3 rounded-[7px] text-center">
            <p className="cursor-pointer flex items-center gap-[0.5rem] ">
              <FaUserCheck />
              Task Someone
            </p>
            <p className="cursor-pointer flex items-center gap-[0.5rem]">
              <FaArchive /> Archive Project
            </p>
            <p className="cursor-pointer flex items-center gap-[0.5rem]">
              <FaBatteryHalf /> Update Status
            </p>
            <select
              className="bg-transparent border rounded w-fit "
              name=""
              id=""
            >
              <option className="bg-black" value="">
                Pending
              </option>
              <option className="bg-black" value="">
                Completed
              </option>
              <option className="bg-black" value="">
                On Review
              </option>
            </select>
            <hr />
            <p onClick={()=>deleteProjectMutation.mutate(project.project_id)} className="cursor-pointer flex items-center gap-[0.5rem] text-[red]">
              <FaTrash />
              Delete Project
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
