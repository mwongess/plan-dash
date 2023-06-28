import { FaUserCheck, FaArchive, FaBatteryHalf, FaTrash } from "react-icons/fa";
import { IProject } from "../../types/project.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePlanDashContext } from "../../contexts/PlanDashContext";

const MoreOptions: React.FC<{
  project: IProject;
  setShowMoreOptions: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ project, setShowMoreOptions }) => {
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
   
    <div className="absolute top-0 left-0 z-[100] mt-[2rem] flex  p-4 w-full  h-[fit-content] rounded">
      <div className="w-[20%]"></div>
      <div className="flex flex-col items-center gap-[0.5rem] bg-[#1c2333] min-w-[80%] p-3 rounded-[7px] text-center">
        <p className="cursor-pointer flex items-center gap-[0.5rem] ">
          <FaUserCheck />
          Task Someone
        </p>
        <p
          onClick={() => {
            archiveProjectMutation.mutate(project.project_id);
              setShowMoreOptions(false);
          }}
          className="cursor-pointer flex items-center gap-[0.5rem]"
        >
          <FaArchive /> Archive Project
        </p>
        <p className="cursor-pointer flex items-center gap-[0.5rem]">
          <FaBatteryHalf />{" "}
          <select
            onChange={(e) => {
              updateStatusMutation.mutate({
                project_id: project.project_id,
                status: e.target.value,
              } as unknown as { project_id: string; status: string }),
                setShowMoreOptions(false);
            }}
            className="bg-transparent border rounded w-fit "
            name="status"
          >
            <option className="bg-black">Status</option>
            <option className="bg-black" value="Pending">
              On Progress
            </option>

            <option className="bg-black" value="On Review">
              On Review
            </option>
            <option className="bg-black" value="Completed">
              Completed
            </option>
          </select>
        </p>

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
  );
};

export default MoreOptions;
