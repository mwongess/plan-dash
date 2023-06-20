export interface IProject {
    project_id: string | number;
    title: string;
    description: string
    platform: string
    scope: string;
  }


export  interface IProjectsContextType {
    projects: IProject[];
    getProjects: ()=> Promise<{projects: IProject[]}>;
    newProject: (project: IProject) => Promise<IProject>;
    updateProject: (project: IProject) => Promise<string|number>;
    deleteProject: (id: string | number) =>  Promise<string|number>
    setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  }