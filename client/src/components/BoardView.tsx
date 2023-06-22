import { usePlanDashContext } from "../contexts/PlanDashContext";
import { FaCircle, FaPlusCircle } from "react-icons/fa";
import Project from "./Project";
import Loading from "./Loading/Loading";
import Error from "./Error";
import { Link } from "react-router-dom";
import NoProjects from "./NoProjects";

const BoardView = () => {
  const {data,isLoading,status } = usePlanDashContext()!;

  
  if (isLoading) {
    return <Loading height="mt-[6rem] h-[5rem]" />;
  }
  if (status === "error") {
    return <Error message="Server Can't Be Reached!!" />;
  }
  return (
    <>
      <div className="grid grid-cols-4">
        <div className="border-r border-[#393649]">
          <div className="flex items-center justify-between border-b border-[#393649] pr-3 py-3">
            <div className="flex items-center gap-2">
              <p className="text-[#eb3983] rounded-full text-xs ">
                <FaCircle />
              </p>
              <h3>
                New Task (
                {data?.projects
                  ? data.projects.filter((proj) => proj.status == "new").length
                  : 0}
                )
              </h3>
            </div>
            <Link
              to="/dashboard/project/new"
              className="text-[#eb3983] text-2xl"
            >
              <FaPlusCircle className="cursor-pointer" />
            </Link>
          </div>
          <div>
            {data?.projects &&
              data?.projects.map(
                (proj) => proj.status === "new" && <Project project={proj} />
              )}
          </div>
        </div>
        <div className="border-r border-[#393649]">
          <div className="flex items-center justify-between border-b border-[#393649] p-3 ">
            <div className="flex items-center gap-2">
              <p className="text-[#fab52d] rounded-full text-xs ">
                <FaCircle />
              </p>
              <h3>
                On Progress (
                {data?.projects
                  ? data.projects.filter((proj) => proj.status == "Pending")
                      .length
                  : 0}
                )
              </h3>
            </div>
            <Link
              to="/dashboard/project/new"
              className="text-[#fab52d] text-2xl"
            >
              <FaPlusCircle className="cursor-pointer" />
            </Link>
          </div>
          <div>
            {data?.projects &&
              data?.projects.map(
                (proj) =>
                  proj.status === "Pending" && <Project project={proj} />
              )}
          </div>
        </div>
        <div className="border-r border-[#393649] ">
          <div className="flex items-center justify-between border-b border-[#393649] p-3 ">
            <div className="flex items-center gap-2">
              <p className="text-[#1bd331] rounded-full text-xs ">
                <FaCircle />
              </p>
              <h3>
                On Review (
                {data?.projects
                  ? data.projects.filter((proj) => proj.status == "On Review")
                      .length
                  : 0}
                )
              </h3>
            </div>
            <Link
              to="/dashboard/project/new"
              className="text-[#1bd331] text-2xl"
            >
              <FaPlusCircle className="cursor-pointer" />
            </Link>
          </div>
          <div>
            {data?.projects &&
              data?.projects.map(
                (proj) =>
                  proj.status === "On Review" && <Project project={proj} />
              )}
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-between border-b border-[#393649] p-3">
            <div className="flex gap-2 items-center">
              <p className=" rounded-full text-xs ">
                <FaCircle />
              </p>
              <h3>
                Complete (
                {data?.projects
                  ? data.projects.filter((proj) => proj.status == "Completed")
                      .length
                  : 0}
                )
              </h3>
            </div>
            <Link to="/dashboard/project/new" className="text-2xl">
              <FaPlusCircle className="cursor-pointer" />
            </Link>
          </div>
          <div>
            {data?.projects &&
              data?.projects.map(
                (proj) =>
                  proj.status === "Completed" && <Project project={proj} />
              )}
          </div>
        </div>
      </div>
      {(data?.message as string) && <NoProjects />}
    </>
  );
};

export default BoardView;
