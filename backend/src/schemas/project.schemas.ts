import {IProjectRequest } from '../types/project.types'
import joi from 'joi'

export const ProjectSchema = joi.object<IProjectRequest>({
    title: joi.string().required(),
    description: joi.string().required(),
    scope: joi.string().required
})