import  express, { Application,json } from 'express'
import { startServer } from './lib/boot'
import { LoginExistingUser, SignupNewUser } from './controllers/user.controllers'
import { userRouter } from './routes/user.routes'
import { projectsRouter } from './routes/projects.router'

const app:Application = express()
app.use(json())


app.use('/auth', userRouter)
app.use('/projects', projectsRouter)

startServer(app)