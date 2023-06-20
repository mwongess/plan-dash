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
  platform: string
  scope: string;
}

export  interface IProjectsContextType {
    projects: IProject[];
    getProjects: ()=> Promise<{projects: IProject[]}>;
    newProject: (project: IProjectRequest) => Promise<IProjectRequest>;
    updateProject: (project: IProject) => Promise<string|number>;
    deleteProject: (id: string | number) =>  Promise<string|number>
    setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  }