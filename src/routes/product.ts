import { NextFunction, Router, Request, Response } from 'express'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: true,
    statusCode: 200,
    message: 'hello'
  })
})

ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  const { name, email } = req.body
  const data = { name, email }
  return res.status(201).json({
    status: true,
    statusCode: 201,
    message: 'Created',
    data: data
  })
})
