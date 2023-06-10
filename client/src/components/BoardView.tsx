import { FaCircle, FaPlusCircle } from "react-icons/fa";
import { VscKebabVertical } from "react-icons/vsc";
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
            <FaPlusCircle className="cursor-pointer" />
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
            <FaPlusCircle  className="cursor-pointer"/>
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
            <FaPlusCircle className="cursor-pointer" />
          </p>
        </div>
        <div className="m-3 p-3 bg-[#29253d] rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <p className="bg-[#243e3a] text-[#1e7b35] p-1 px-2 w-fit rounded-full text-center ">Webiste</p>
              <p className="bg-[#4099ff] p-1 px-2 w-fit rounded-full text-center">Design</p>
            </div>
            <p>
              <VscKebabVertical />
            </p>
          </div>
          <div >
            <h4 className="my-2 font-bold">Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              ducimus saepe cumque quis similique ut pariatur deserunt a
              blanditiis accusantium error, debitis, quia fugiat natus tempore
              nemo nostrum placeat voluptatum.
            </p>
          </div>
          <div></div>
        </div>
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
            <FaPlusCircle className="cursor-pointer"/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoardView;
