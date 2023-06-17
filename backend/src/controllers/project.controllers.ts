import { ProjectSchema } from "../schemas/project.schemas";
import { IProjectRequest } from "../types/project.types";
import { Connection } from "../helpers/db.helpers";
import { Request, Response } from "express";
import { v4 as uuid } from "uuid";

const db = new Connection();

export const NewProject = (req: IProjectRequest, res: Response) => {
  try {
    const project_id = uuid();
    const { title, description, scope } = req.body;
    const { error, value } = ProjectSchema.validate(req.body);
    if (error) {
      res.status(500).json({ error: error.details[0].message });
    }
    db.executeProcedure("NewProject", {
      project_id,
      title,
      description,
      scope,
    });
    res.status(200).json({ message: "Project created successfully" });
  } catch (error) {
    res.json({ error: error });
  }
};
export const GetProjects = async (req: Request, res: Response) => {
  try {
    const { recordset } = await db.executeProcedure("GetProjects");
    res.status(200).json(recordset);
  } catch (error: any) {
    res.json({ error: error.message });
  }
};

export const GetProject = async (req: Request, res: Response) => {
  try {
    const { project_id } = req.params;
    const { recordset } = await db.executeProcedure("GetProject", { project_id });
    if (!recordset[0]) {
      res.status(404).json({ message: "Project not found" });
    } else {
      res.status(200).json(recordset);
    }
  } catch (error: any) {
    res.json({ error: error.message });
  }
};
export const DeleteProject = async (req: Request, res: Response) => {
  try {
    const { project_id } = req.params;
    const { recordset } = await db.executeProcedure("GetProject", { project_id });
    if (!recordset[0]) {
      return res.status(404).json({ message: "Project not found" });
    }
    await db.executeProcedure("DeleteProject", { project_id });
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {}
};

export const AssignProject = async (req: Request, res: Response) => {
  try {
    const { user_id, project_id } = req.params;
    const { recordset } = await db.executeProcedure("GetProject", {
      project_id,
    });
    if (!recordset[0]) {
      return res.status(404).json({ message: "Project not found" });
    }
    await db.executeProcedure("AssignProject", { user_id, project_id });
    res.json(200).json({ message: "Project updated successfully" });
  } catch (error) {
    res.json(error);
  }
};
