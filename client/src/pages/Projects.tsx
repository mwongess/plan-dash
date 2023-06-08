import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Project from "../components/Project";
import { getProjects } from "../actions/project.actions";
import { IProject } from "../types/project.types";
import { usePlanDashContext } from "../contexts/PlanDashContext";

const Projects = () => {
  const { newProject } = usePlanDashContext()!;
  const queryClient = useQueryClient();
  // Queries
  const { data } = useQuery<IProject[], Error>(["projects"], getProjects);
  
  const mutation = useMutation<IProject, Error, IProject>(
    (project: IProject) => newProject(project),
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["projects"]);
      },
    }
  );
  return data?.map((project: IProject) => <Project project={project} />);
};

export default Projects;
function onSuccess(variables: void): Promise<unknown> {
  throw new Error("Function not implemented.");
}
