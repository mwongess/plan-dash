import React, { ReactNode, createContext, useState } from "react";

export interface IProject {
  scope: string;
  title: string;
}
interface IProjectsContextType {
  projects: IProject[];
  newProject: (project: IProject) => void;
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
}

export const PlanDashContext = createContext<IProjectsContextType | undefined>(
  undefined
);

export const PlanDashProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const newProject = (project: IProject) => {};
  const updateProject = (id: string) => {};
  const deleteProject = (id: string): void => {};

  return (
    <PlanDashContext.Provider value={{ projects, newProject, setProjects }}>
      {children}
    </PlanDashContext.Provider>
  );
};
