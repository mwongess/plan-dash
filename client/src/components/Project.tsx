import { VscKebabVertical } from "react-icons/vsc";
import { IProject } from "../types/project.types";
// import {useContext} from 'react'

const Project: React.FC<{ project: IProject }> = ({ project }) => {
  return (
    <div className="m-3 p-3 bg-[#29253d] rounded-lg">
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
          <VscKebabVertical />
        </p>
      </div>
      <div>
        <h4 className="my-2 font-bold">Lorem ipsum dolor sit amet.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ducimus
          saepe cumque quis similique ut pariatur deserunt a blanditiis
          accusantium error, debitis, quia fugiat natus tempore nemo nostrum
          placeat voluptatum.
        </p>
      </div>
    </div>
  );
};

export default Project;
