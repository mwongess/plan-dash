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
      return res.status(500).json({ error: error.details[0].message });
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
    if (!recordset[0]) {
      return res.json({ message: "No projects found" });
    }
    res.status(200).json(recordset);
  } catch (error: any) {
    res.json({ error: error.message });
  }
};

export const GetProject = async (req: Request, res: Response) => {
  try {
    const { project_id } = req.params;
    const { recordset } = await db.executeProcedure("GetProject", {
      project_id,
    });
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
    const { recordset } = await db.executeProcedure("GetProject", {
      project_id,
    });
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
    const respo = await db.executeQuery(
      "SELECT * FROM users WHERE user_id = @user_id",
      { user_id }
    );
    if (!respo.recordset[0]) {
      return res.json({ message: "User with that id doesn't exist" });
    }
    const { recordset } = await db.executeProcedure("GetProject", {
      project_id,
    });
    if (!recordset[0]) {
      return res.status(404).json({ message: "Project not found" });
    }
    await db.executeProcedure("AssignProject", { user_id, project_id });
    res.status(200).json({ message: `Project has been assigned to ${respo.recordset[0].name}` });
  } catch (error: any) {
    res.json(error.message);
  }
};
