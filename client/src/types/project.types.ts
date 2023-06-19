export interface IProject {
    project_id: string | number;
    title: string;
    description: string
    platform: string
    scope: string;
  }


export  interface IProjectsContextType {
    projects: IProject[];
    newProject: (project: IProject) => Promise<IProject>;
    updateProject: (id: string | number) => Promise<string|number>;
    deleteProject: (id: string | number) =>  Promise<string|number>
    setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  }