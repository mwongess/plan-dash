import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePlanDashContext } from "../contexts/PlanDashContext";
import { IProject } from "../types/project.types";

const NewProjectForm = () => {
    const { newProject } = usePlanDashContext()!;
    const queryClient = useQueryClient();

    const mutation = useMutation<IProject, Error, IProject>(
        (project: IProject) => newProject(project),
        {
          onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(["projects"]);
          },
        }
      );
  return (
    <div>NewProjectForm</div>
  )
}

export default NewProjectForm