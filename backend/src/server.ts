import  express, { Application } from 'express'
import { startServer } from './lib/boot'

const app:Application = express()

startServer(app)