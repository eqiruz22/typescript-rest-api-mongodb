import { NextFunction, Router, Request, Response } from 'express'
import { createProductValidation } from '../validation/product.validation'
import { logger } from '../utils/logger'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: true,
    statusCode: 200,
    message: 'hello'
  })
})

ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = createProductValidation(req.body)
  if (error) {
    console.error('Err = ', 'product - create ', error.details[0])
    return res.status(422).json({
      status: false,
      statusCode: 422,
      message: error.details[0],
      data: {}
    })
  }
  return res.status(201).json({
    status: true,
    statusCode: 201,
    message: 'Created',
    data: value
  })
})
