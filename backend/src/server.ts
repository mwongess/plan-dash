import { projectsRouter } from './routes/projects.router'
import  express, { Application,json } from 'express'
import { userRouter } from './routes/user.routes'
import { startServer } from './lib/boot'
import cors from 'cors'

const app:Application = express()
app.use(cors())
app.use(json())


app.use('/auth', userRouter)
app.use('/projects', projectsRouter)

startServer(app)