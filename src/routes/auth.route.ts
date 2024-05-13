import { Router } from 'express'
import { RegisterUser, CreateSession } from '../controllers/auth.controller'

export const AuthRouter: Router = Router()

AuthRouter.post('/register', RegisterUser)
AuthRouter.post('/login', CreateSession)
