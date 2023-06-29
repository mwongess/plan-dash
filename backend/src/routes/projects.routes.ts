import { ArchiveProject, AssignProject, DeleteProject, GetProject, GetProjects, NewProject, UpdateProject, UpdateStatus } from "../controllers/project.controllers";
import { VerifyToken } from "../middlewares/verifytoken";
import { Router } from "express";

export const projectsRouter = Router()

projectsRouter.get('/',VerifyToken, GetProjects)
projectsRouter.post('/new', VerifyToken,NewProject)
projectsRouter.get('/:project_id', VerifyToken,GetProject)
projectsRouter.delete('/:project_id',VerifyToken, DeleteProject)
projectsRouter.patch("/:project_id/assign/to/:user_id",AssignProject)
projectsRouter.patch("/:project_id/update", VerifyToken, UpdateProject)
projectsRouter.patch("/:project_id/archive", VerifyToken,ArchiveProject)
projectsRouter.patch("/:project_id/status/:status",VerifyToken,UpdateStatus)