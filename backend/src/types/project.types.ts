export interface IProject {
  project_id: string;
  title: string;
  description: string;
  scope: string;
}

export interface IProjectRequest {
  body: {
    title: string;
    description: string;
    scope: string;
  };
}
