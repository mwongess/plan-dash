import { ArchiveProject, AssignProject, DeleteProject, GetProject, GetProjects, NewProject, UpdateStatus } from "../controllers/project.controllers";
import { VerifyToken } from "../middlewares/verifytoken";
import { Router } from "express";

export const projectsRouter = Router()

projectsRouter.get('/',VerifyToken, GetProjects)
projectsRouter.post('/new', VerifyToken,NewProject)
projectsRouter.get('/:project_id', GetProject)
projectsRouter.patch("/:project_id/archive", ArchiveProject)
projectsRouter.delete('/:project_id',VerifyToken, DeleteProject)
projectsRouter.patch("/:project_id/status/:status",VerifyToken,UpdateStatus)
projectsRouter.patch("/:project_id/assign/to/:user_id",AssignProject)