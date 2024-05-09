import { NextFunction, Router, Request, Response } from 'express'

export const HealthRouter: Router = Router()

HealthRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: true,
    statusCode: 200,
    message: 'hello'
  })
})
