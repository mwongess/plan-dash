import { log } from "console";
import { IProject, IProjectRequest } from "../types/project.types";
import { getLoggedInUser } from "./auth.actions";

const URL = "http://localhost:3000/projects/"; //Backend API

const token = getLoggedInUser();

// START FETCHING PROJECTS
export const getProjects = async () => {
  try {
    const token = getLoggedInUser();
    if (token) {
      const res = await fetch(URL, {
        method: "GET",
        headers: {
          token: token,
        },
      });
      const data = await res.json();
      if (data.error) {
        if(data.error = "jwt expired"){
          throw new Error("Your session expired,please login again!");

        }
        throw new Error(data.error);
      }
      return data;
    }
  } catch (error: any) {
    if (error == "TypeError: Failed to fetch") {
      throw new Error("Server cant be reached!");
    }
    throw new Error(error);
  }
};
// END

//START NEW PROJECT
export const newProject = async (
  project: IProjectRequest
): Promise<IProjectRequest> => {
  const res = await fetch(`${URL + "new"}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify(project),
  });
  const data = await res.json();
  return data;
};
//END

//START UPDATE PROJECT
export const updateProject = async (project: IProjectRequest, project_id: string) => {
  const res = await fetch("http://localhost:3000/projects", {
    method: "PATCH",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(project)

})
  return "";
};
//END

// START UPDATE STATUS
export const updateStatus = async (params: {
  project_id: string;
  status: string;
}): Promise<{ project_id: string; status: string }> => {
  const res = await fetch(
    `${URL + params.project_id + "/status/" + params.status}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    }
  );
  const data = await res.json();
  return data;
};
// END
// START ARCHIVE PROJECT
export const archiveProject = async (project_id: string) => {
  const res = await fetch(`${URL + project_id + "/archive/"}`, {
    method: "PATCH",
  });
  const data = await res.json();
  return data;
};
// END

//START DELETE PROJECT
export const deleteProject = async (id: string | number) => {
  const res = await fetch(`${URL + id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  });
  const data = await res.json();
  return data;
};
//END
