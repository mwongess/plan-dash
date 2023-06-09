import { IProject } from "../types/project.types";
// import {useContext} from 'react'

const Project: React.FC<{ project: IProject }> = ({ project }) => {
  return (
    <div>
      <div>
        <div>
          <p>SCOPE</p>
        </div>
        <div>...</div>
      </div>
      <div>
        <h3>Title</h3>
        <p>Description</p>
      </div>
      <div>
        <div>Images</div>
        <div>COUNT</div>
      </div>
    </div>
  );
};

export default Project;
