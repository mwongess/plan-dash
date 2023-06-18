import { VscKebabVertical } from "react-icons/vsc";
import { IProject } from "../types/project.types";
// import {useContext} from 'react'

const Project: React.FC = () => {
  return (
    <div className="relative">
      <div className="m-3 p-3 bg-[#29253d] rounded-lg ">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <p className="bg-[#243e3a] text-[#1e7b35] p-1 px-2 w-fit rounded-full text-center ">
              Webiste
            </p>
            <p className="bg-[#4099ff] p-1 px-2 w-fit rounded-full text-center">
              Design
            </p>
          </div>
          <p>
            <VscKebabVertical className="cursor-pointer"/>
          </p>
        </div>
        <div>
          <h4 className="my-2 font-bold">Lorem ipsum dolor sit amet.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            ducimus saepe cumque quis similique ut pariatur deserunt a
            blanditiis accusantium error, debitis, quia fugiat natus tempore
            nemo nostrum placeat voluptatum.
          </p>
        </div>
      </div>

      <div className="absolute top-0 left-0 mt-[2.5rem] flex  p-4 w-full  h-[fit-content] rounded">
        <div className="w-[40%]"></div>
        <div className="flex flex-col items-center gap-[0.5rem] bg-[#1c2333] min-w-[60%] p-3 rounded-[7px] text-center">
          <p className="cursor-pointer">Task Someone</p>
          <p className="cursor-pointer">Archive Project</p>
          <p className="cursor-pointer">Update Status</p>
          <select className="bg-transparent border rounded w-fit " name="" id="">
            <option className="bg-black" value="">
              Pending
            </option>
            <option className="bg-black" value="">
              Completed
            </option>
            <option className="bg-black" value="">
              On Review
            </option>
          </select>
          <p className="cursor-pointer">Delete Project</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
