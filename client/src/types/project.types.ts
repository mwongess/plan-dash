export interface IProjectRequest {
    title: string;
    description: string
    platform: string
    scope: string;
  }

export interface IProject{
  project_id: string;
  title: string;
  description: string
  userr_id: string
  platform: string
  scope: string;
  isArchived: boolean
  isFav: boolean
}

export  interface IProjectsContextType {
    projects: IProject[];
    getProjects: ()=> Promise<{projects: IProject[], message: string}>;
    newProject: (project: IProjectRequest) => Promise<IProjectRequest>;
    updateProject: (project: IProject) => Promise<string|number>;
    updateStatus: (params: {project_id: string, status: string}) => Promise<{project_id: string, status: string}>
    archiveProject: (project_id: string) => Promise<string>
    deleteProject: (id: string | number) =>  Promise<string|number>
    setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  }