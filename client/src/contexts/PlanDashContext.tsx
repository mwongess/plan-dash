import {
  archiveProject,
  deleteProject,
  getProjects,
  newProject,
  updateProject,
  updateStatus,
} from "../actions/project.actions";
import { IProject, IProjectsContextType } from "../types/project.types";
import React, { ReactNode, createContext, useContext, useState } from "react";

export const PlanDashContext = createContext<IProjectsContextType | undefined>(
  undefined
);

export const usePlanDashContext = () => useContext(PlanDashContext)
// Provider
export const PlanDashProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [projects, setProjects] = useState<IProject[]>([]);

  return (
    <PlanDashContext.Provider
      value={{
        projects,
        getProjects,
        newProject,
        setProjects,
        updateStatus,
        updateProject,
        deleteProject,
        archiveProject,
      }}
    >
      {children}
    </PlanDashContext.Provider>
  );
};
