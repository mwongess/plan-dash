import { IProject } from "../types/project.types";

import dotenv from "dotenv";
dotenv.config();

const URL = process.env.BASE_URL!; //Backend API

export const newProject = async (project: IProject) => {
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
export const updateProject = (id: string | number) => {};

// Delete a project
export const deleteProject = async (id: string | number) => {
  try {
    const res = await fetch(`${URL + id}`, { method: "DELETE" });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
