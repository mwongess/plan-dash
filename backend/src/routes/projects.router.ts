import { DeleteProject, GetProject, GetProjects, NewProject } from "../controllers/project.controllers";
import { VerifyToken } from "../middlewares/verifytoken";
import { Router } from "express";

export const projectsRouter = Router()

projectsRouter.get('/',GetProjects)
projectsRouter.post('/', NewProject)
projectsRouter.get('/:id', GetProject)
projectsRouter.delete('/:id', DeleteProject)