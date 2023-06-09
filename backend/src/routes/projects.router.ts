import { Router } from "express";
import { DeleteProject, GetProject, GetProjects, NewProject } from "../controllers/project.controllers";

export const projectsRouter = Router()

projectsRouter.get('/', GetProjects)
projectsRouter.get('/:id', GetProject)
projectsRouter.post('/', NewProject)
projectsRouter.delete('/:id', DeleteProject)