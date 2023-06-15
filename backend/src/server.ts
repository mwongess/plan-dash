import { projectsRouter } from './routes/projects.router'
import  express, { Application,json } from 'express'
import { userRouter } from './routes/user.routes'
import { startServer } from './lib/boot'

const app:Application = express()
app.use(json())


app.use('/auth', userRouter)
app.use('/projects', projectsRouter)

startServer(app)