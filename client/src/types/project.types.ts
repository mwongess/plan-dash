export interface IProjectRequest {
  title: string;
  description: string;
  platform: string;
  scope: string;
}

export interface IProject {
  project_id: string;
  title: string;
  description: string;
  user_id: string;
  platform: string;
  status: string;
  scope: string;
  isArchived: boolean;
  isFav: boolean;
}

export interface error extends Error{
  message: string
}
export interface IProjectsContextType {
  isLoading: boolean;
  status: string;
  data?: { projects: IProject[]; message: string };
  error: Error | null
  projects: IProject[];
  getProjects: () => Promise<{ projects: IProject[]; message: string }>;
  newProject: (project: IProjectRequest) => Promise<IProjectRequest>;
  updateProject: (project: IProjectRequest, project_id: string) => Promise<string | number>;
  updateStatus: (params: {
    project_id: string;
    status: string;
  }) => Promise<{ project_id: string; status: string }>;
  archiveProject: (project_id: string) => Promise<string>;
  deleteProject: (id: string | number) => Promise<string | number>;
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
}
