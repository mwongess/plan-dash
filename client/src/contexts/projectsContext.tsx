import React, { ReactNode, createContext, useState } from "react";

export interface IProject {
  scope: string;
  title: string;
}
interface IProjectsContextType {
  projects: IProject[]
  newProject: (project: IProject)=> void
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>
}


export const ProjectsContext = createContext<IProjectsContextType | undefined>(
  undefined
);

export const ProjectsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [projects, setProjects] = useState<IProject[]>([{scope: 'Web',title: 'kjhgvbk'}]);
  const newProject = (project: IProject )=>{

  }
  return (
    <ProjectsContext.Provider value={{ projects, newProject,setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
