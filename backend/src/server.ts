import  express, { Application,json } from 'express'
import { startServer } from './lib/boot'
import { LoginExistingUser, SignupNewUser } from './controllers/user.controllers'

const app:Application = express()
app.use(json())

app.post('/signup', SignupNewUser)
app.post('/login', LoginExistingUser)

startServer(app)