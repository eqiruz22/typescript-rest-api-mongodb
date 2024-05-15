import { Router } from 'express'
import { RegisterUser, CreateSession, RefreshToken } from '../controllers/auth.controller'

export const AuthRouter: Router = Router()

AuthRouter.post('/register', RegisterUser)
AuthRouter.post('/login', CreateSession)
AuthRouter.post('/refresh-token', RefreshToken)
