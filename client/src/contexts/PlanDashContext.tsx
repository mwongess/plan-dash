import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IProject, IProjectsContextType } from "../types/project.types";
import { useQuery } from "@tanstack/react-query";
import {
  archiveProject,
  deleteProject,
  getProjects,
  newProject,
  updateProject,
  updateStatus,
} from "../actions/project.actions";
import { getLoggedInUser } from "../actions/auth.actions";

export const PlanDashContext = createContext<IProjectsContextType | undefined>(
  undefined
);

export const usePlanDashContext = () => useContext(PlanDashContext);

// Provider
export const PlanDashProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const token = getLoggedInUser();
  let { isLoading, status, data, error } = useQuery<
    { projects: IProject[]; message: string },
    Error
  >({
    queryKey: ["projects"],
    queryFn:  getProjects
   
  });

  useEffect(() => {
    if (data) {
      setProjects(data.projects);
    }
  }, [data]);

  return (
    <PlanDashContext.Provider
      value={{
        isLoading,
        status,
        error,
        data,
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
