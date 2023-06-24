import { FaArchive, FaPlus, FaRegStar, FaTasks } from "react-icons/fa";
import { usePlanDashContext } from "../contexts/PlanDashContext";
import { IProject } from "../types/project.types";
import { Link } from "react-router-dom";

const SideNav = () => {
  const { projects } = usePlanDashContext()!;

  let favorites!: IProject[];
  let archived!: IProject[];

  if (projects) {
    favorites = projects.filter((project) => project.isFav);
    archived = projects.filter((project) => project.isArchived);
  }

  return (
    <div className="h-[95vh] bg-[url('/proje.png')] bg-no-repeat bg-bottom bg-opacity-0">
      <div className=" sm:flex flex-col md:justify-between h-full px-2  ">
        <div>
          <img className="h-[6rem]" src="/logo.png" alt="" />
          <div>
            <h3 className="flex justify-between">
              <span className="flex items-center gap-4">
                <FaRegStar />
                FAVORITES{" "}
              </span>
            </h3>
            <div className="ml-[1.5rem]">
              {favorites &&
                favorites.map((favs) => (
                  <Link
                    to={"projects/" + favs.project_id}
                    className="flex items-center cursor-pointer hover:bg-[#29253d] h-[2.5rem] rounded-[5px]"
                  >
                    <p className="ml-[1.5rem]">{favs.title}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="flex justify-between">
            <span className="flex items-center gap-4">
              <FaTasks />
              ALL PROJECTS{" "}
            </span>
          </h3>
          <div className="">
            {projects &&
              projects.map((project) => (
                <Link
                  to={"projects/" + project.project_id}
                  className="flex items-center cursor-pointer hover:bg-[#29253d] h-[2.5rem] rounded-[5px]"
                >
                  <p className="ml-[1.5rem]">{project.title}</p>
                </Link>
              ))}
          </div>
        </div>
        <div>
          <h3 className="flex gap-4">
            <span className="flex items-center gap-4 border">
              <FaArchive />
            </span>
            ARCHIVED{" "}
          </h3>
          <div className="ml-[1.5rem]">
            {archived &&
              archived.map((project) => (
                <Link
                  to={"projects/" + project.project_id}
                  className="flex items-center cursor-pointer hover:bg-[#29253d] h-[2rem] rounded-[5px]"
                >
                  <p className="ml-[1.5rem]">{project.title}</p>
                </Link>
              ))}
          </div>
        </div>
        <div>
          <Link to="/dashboard/project/new">
            <button className="bg-[#00A97F] py-1 px-2 rounded flex items-center justify-center gap-3 w-full hover:opacity-80">
              <FaPlus />
              New Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
