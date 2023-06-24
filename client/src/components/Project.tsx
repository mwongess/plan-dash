import { FaArchive, FaBatteryHalf, FaTrash, FaUserCheck } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePlanDashContext } from "../contexts/PlanDashContext";
import { VscKebabVertical } from "react-icons/vsc";
import { useState } from "react";
import { IProject } from "../types/project.types";

const Project: React.FC<{ project: IProject }> = ({ project }) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  
  const toggleMoreDetails = () => {
    setShowMoreDetails((prevState) => !prevState);
  };

  const queryClient = useQueryClient();
  const { archiveProject, updateStatus, deleteProject } = usePlanDashContext()!;

  const deleteProjectMutation = useMutation({
    mutationFn: (id: string | number) => deleteProject(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: (data: { project_id: string; status: string }) =>
      updateStatus(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
    },
  });

  const archiveProjectMutation = useMutation({
    mutationFn: (project_id: string) => archiveProject(project_id),
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
    },
  });

  return (
    <div className="relative">
      <div className="m-3 bg-[#29253d] rounded-lg">
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
            <p className="" onClick={toggleMoreDetails}>
              <VscKebabVertical className="cursor-pointer" />
            </p>
          </div>
          <div>
            <h4 className="my-2 font-bold">{project.title}</h4>
            <p>{project.description}</p>
          </div>
        </div>

        <div className=" border-t border-[#393649] p-2 cursor-pointer">
          <p className="flex items-center">
            + 
            Add Subtask
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
            <p
              onClick={() => {
                archiveProjectMutation.mutate(project.project_id),
                  setShowMoreDetails(false);
              }}
              className="cursor-pointer flex items-center gap-[0.5rem]"
            >
              <FaArchive /> Archive Project
            </p>
            <p className="cursor-pointer flex items-center gap-[0.5rem]">
              <FaBatteryHalf /> Update Status
            </p>
            <select
              onChange={(e) => {
                updateStatusMutation.mutate({
                  project_id: project.project_id,
                  status: e.target.value,
                } as unknown as { project_id: string; status: string }),
                  setShowMoreDetails(false);
              }}
              className="bg-transparent border rounded w-fit "
              name="status"
            >
              <option className="bg-black">Status</option>
              <option className="bg-black" value="Pending">
                Pending
              </option>

              <option className="bg-black" value="On Review">
                On Review
              </option>
              <option className="bg-black" value="Completed">
                Completed
              </option>
            </select>
            <hr />
            <p
              onClick={() =>
                deleteProjectMutation.mutate(project.project_id as string)
              }
              className="cursor-pointer flex items-center gap-[0.5rem] text-[red]"
            >
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
