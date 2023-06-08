import { getProjects } from "../actions/project.actions";
import { IProject } from "../types/project.types";
import { useQuery } from "@tanstack/react-query";
import Project from "../components/Project";

const Projects = () => {
  const { data } = useQuery<IProject[], Error>(["projects"], getProjects);

  return data?.map((project: IProject) => <Project project={project} />);
};

export default Projects;
