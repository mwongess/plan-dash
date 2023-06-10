import { FaCircle, FaPlusCircle } from "react-icons/fa";
import Project from "./Project";

const BoardView = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="border-r border-[#393649]">
        <div className="flex items-center justify-between border-b border-[#393649] pr-3 py-3">
          <div className="flex items-center gap-2">
            <p className="text-[#eb3983] rounded-full text-xs ">
              <FaCircle />
            </p>
            <h3>New Task()</h3>
          </div>
          <p className="text-[#eb3983] text-2xl">
            <FaPlusCircle className="" />
          </p>
        </div>
        <div></div>
      </div>
      <div className="border-r border-[#393649]">
        <div className="flex items-center justify-between border-b border-[#393649] p-3 ">
          <div className="flex items-center gap-2">
            <p className="text-[#fab52d] rounded-full text-xs ">
              <FaCircle />
            </p>
            <h3>On Progress()</h3>
          </div>
          <p className="text-[#fab52d] text-2xl">
            <FaPlusCircle />
          </p>
        </div>
      </div>
      <div className="border-r border-[#393649] ">
        <div className="flex items-center justify-between border-b border-[#393649] p-3 ">
          <div className="flex items-center gap-2">
            <p className="text-[#1bd331] rounded-full text-xs ">
              <FaCircle />
            </p>
            <h3>On Review()</h3>
          </div>
          <p className="text-[#1bd331] text-2xl">
            <FaPlusCircle className="" />
          </p>
        </div>
        <p>vhjkl</p>
      </div>
      <div className="">
        <div className="flex items-center justify-between border-b border-[#393649] p-3">
          <div className="flex gap-2 items-center">
            <p className=" rounded-full text-xs ">
              <FaCircle />
            </p>
            <h3>Complete()</h3>
          </div>
          <p className="text-2xl">
            <FaPlusCircle />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoardView;
