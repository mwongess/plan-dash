import  express, { Application,json } from 'express'
import { startServer } from './lib/boot'

const app:Application = express()
app.use(json())

startServer(app)