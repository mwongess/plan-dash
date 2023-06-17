import {IProject } from '../types/project.types'
import joi from 'joi'

export const ProjectSchema = joi.object<IProject>({
    title: joi.string().required(),
    description: joi.string().required(),
    scope: joi.string().required
})