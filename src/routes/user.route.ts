import { Router } from 'express'
import { RegisterUser } from '../controllers/user.controller'

export const UserRoute: Router = Router()

UserRoute.post('/register', RegisterUser)
