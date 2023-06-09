import joi from 'joi'

export const SignUpSchema = joi.object<{name: string, email: string, password:string}>({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).max(15)

})

export const LoginSchema = joi.object<{email: string, password: string}>({
    email: joi.string().email().required(),
    password: joi.string().min(4).max(15).required()
})

