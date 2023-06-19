import { IProject } from "../types/project.types";

// import dotenv from "dotenv";
// dotenv.config();

const URL = 'http://localhost:3000/projects/'; //Backend API

// START FETCHING PROJECTS
export const getProjects = async (): Promise<{projects: IProject[]}> => {
  const res = await fetch(URL);
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await res.json();
  return data;
};
// END

//START NEW PROJECT
export const newProject = async (project: IProject): Promise<IProject> => {
  const res = await fetch(`${URL + "new"}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });
  const data = await res.json();
  return data;
};
//END

//START UPDATE PROJECT
export const updateProject = async (project: IProject) => {
  return ''
};
//END

//START DELETE PROJECT
export const deleteProject = async (id: string | number) => {
  const res = await fetch(`${URL + id}`, { 
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
   });
  const data = await res.json();
  return data;
};
//END
