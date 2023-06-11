import { FaListOl, FaTable, FaToriiGate } from "react-icons/fa";
import { getProjects } from "../actions/project.actions";
import { IProject } from "../types/project.types";
import { useQuery } from "@tanstack/react-query";
import { Link, Outlet } from "react-router-dom";

const Projects = () => {
  const { data } = useQuery<IProject[], Error>(["projects"], getProjects);

  // return data?.map((project: IProject) => <Project project={project} />);
  return (
    <div>
      <div className="flex  gap-x-8 border-b border-[#393649] pb-3">
        <Link
          to=""
          className="flex items-center gap-2 bg-[#2b283d] rounded p-1 hover:opacity-80"
        >
          <FaToriiGate />
          Board
        </Link>
        <Link
          to="table"
          className="flex items-center gap-2 bg-[#2b283d] rounded p-1  hover:opacity-80"
        >
          <FaTable />
          Table
        </Link>
        <Link
          to="list"
          className="flex items-center gap-2 bg-[#2b283d] rounded p-1  hover:opacity-80"
        >
          <FaListOl />
          List View
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Projects;
