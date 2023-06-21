import { AssignProject, DeleteProject, GetProject, GetProjects, NewProject, UpdateStatus } from "../controllers/project.controllers";
import { VerifyToken } from "../middlewares/verifytoken";
import { Router } from "express";

export const projectsRouter = Router()

projectsRouter.get('/',GetProjects)
projectsRouter.post('/new', NewProject)
projectsRouter.delete('/:project_id', DeleteProject)
projectsRouter.get('/:project_id', GetProject)
projectsRouter.patch("/:project_id/status/:status",UpdateStatus)
projectsRouter.patch("/:project_id/assign/to/:user_id",AssignProject)