import * as yup from "yup";

export const projectSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    platform: yup.string().required(),
    scope: yup.string().required(),
})