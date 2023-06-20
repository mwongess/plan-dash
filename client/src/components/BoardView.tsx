import { usePlanDashContext } from "../contexts/PlanDashContext";
import { FaCircle, FaPlusCircle } from "react-icons/fa";
import { IProject } from "../types/project.types";
import { useQuery} from "@tanstack/react-query";
import Project from "./Project";

const BoardView = () => {
  const {getProjects} = usePlanDashContext()!
  const { data } = useQuery<{ projects: IProject[] }, Error>(
    ["projects"],
    getProjects
  );

  return (
    <>
      <div className="grid grid-cols-4">
        <div className="border-r border-[#393649]">
          <div className="flex items-center justify-between border-b border-[#393649] pr-3 py-3">
            <div className="flex items-center gap-2">
              <p className="text-[#eb3983] rounded-full text-xs ">
                <FaCircle />
              </p>
              <h3>New Task(0)</h3>
            </div>
            <p className="text-[#eb3983] text-2xl">
              <FaPlusCircle className="cursor-pointer" />
            </p>
          </div>
          <div>
            {data?.projects &&
              data?.projects.map((proj) => <Project project={proj} />)}
          </div>
        </div>
        <div className="border-r border-[#393649]">
          <div className="flex items-center justify-between border-b border-[#393649] p-3 ">
            <div className="flex items-center gap-2">
              <p className="text-[#fab52d] rounded-full text-xs ">
                <FaCircle />
              </p>
              <h3>On Progress(13)</h3>
            </div>
            <p className="text-[#fab52d] text-2xl">
              <FaPlusCircle className="cursor-pointer" />
            </p>
          </div>
          <div>
            {data?.projects &&
              data?.projects.map((proj) => <Project project={proj} />)}
          </div>
        </div>
        <div className="border-r border-[#393649] ">
          <div className="flex items-center justify-between border-b border-[#393649] p-3 ">
            <div className="flex items-center gap-2">
              <p className="text-[#1bd331] rounded-full text-xs ">
                <FaCircle />
              </p>
              <h3>On Review(43)</h3>
            </div>
            <p className="text-[#1bd331] text-2xl">
              <FaPlusCircle className="cursor-pointer" />
            </p>
          </div>
          <div>
            {data?.projects &&
              data?.projects.map((proj) => <Project project={proj} />)}
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-between border-b border-[#393649] p-3">
            <div className="flex gap-2 items-center">
              <p className=" rounded-full text-xs ">
                <FaCircle />
              </p>
              <h3>Complete(78)</h3>
            </div>
            <p className="text-2xl">
              <FaPlusCircle className="cursor-pointer" />
            </p>
          </div>
          <div>
            {data?.projects &&
              data?.projects.map((proj) => <Project project={proj} />)}
          </div>
        </div>
      </div>
      {data?.message as string && (
        <div className="flex flex-col justify-center items-center h-[10rem] p-3  border-[1.5px] border-[#dc3545] rounded">

          <h1 className="text-2xl">No Found Projects⚠️</h1>
        </div>
      )}
    </>
  );
};

export default BoardView;
