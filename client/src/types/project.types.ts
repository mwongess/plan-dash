export interface IProject {
    id: string | number;
    title: string;
    description: string
    platform: string
    scope: string;
    user_id: string
    isArchived: string
    isFav: string
  }


export  interface IProjectsContextType {
    projects: IProject[];
    newProject: (project: IProject) => Promise<IProject>;
    updateProject: (id: string | number) => Promise<string|number>;
    deleteProject: (id: string | number) =>  Promise<string|number>
    setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  }