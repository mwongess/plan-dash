import { IProject,IProjectsContextType } from "../types/projectTypes";
import React, { ReactNode, createContext, useState } from "react";
import dotenv from "dotenv";
dotenv.config();

const URL = process.env.BASE_URL!; //Backend API


// Custom Hook to access all context stuff
export const PlanDashContext = createContext<IProjectsContextType | undefined>(
  undefined
); 

// Provider
export const PlanDashProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [projects, setProjects] = useState<IProject[]>([]);

  // Create new project
  const newProject = async (project: IProject) => {
    try {
      const res = await fetch(`${URL}` + "/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Update existing project
  const updateProject = (id: string | number) => { };
  
  // Delete a project
  const deleteProject = async (id: string | number) => {
    try {
      const res = await fetch(`${URL + id}`, { method: "DELETE" });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PlanDashContext.Provider
      value={{
        projects,
        newProject,
        setProjects,
        updateProject,
        deleteProject,
      }}
    >
      {children}
    </PlanDashContext.Provider>
  );
};
