import { getProjects } from "../actions/project.actions";
import { IProject } from "../types/project.types";
import { useQuery } from "@tanstack/react-query";
import Project from "../components/Project";
import { Link, Outlet } from "react-router-dom";

const Projects = () => {
  const { data } = useQuery<IProject[], Error>(["projects"], getProjects);

  // return data?.map((project: IProject) => <Project project={project} />);
  return (
    <div>
      <div>
        <Link to="">Board</Link>
        <Link to="">Table</Link>
        <Link to="">List View</Link>
      </div>
      <div>
        {/* <Outlet/> */}
      </div>
    </div>
  );
};

export default Projects;
