import { NextFunction, Request, Response } from 'express'
import { createProductValidation, productIdValidation, updateProductValidation } from '../validation/product.validation'
import {
  CreateProductService,
  DeleteProductService,
  GetProductID,
  GetProductService,
  UpdateProductService
} from '../services/product.service'
import { v4 as uuidv4 } from 'uuid'
export const GetProducts = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const data = await GetProductService()
    return res.status(200).json({
      status: true,
      statusCode: 200,
      message: 'hello',
      data: data
    })
  } catch (error: any) {
    console.log(error)
    return res.status(500).json({
      status: true,
      statusCode: 500,
      message: 'error',
      error: error
    })
  }
}
export const CreateProduct = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    req.body.product_id = uuidv4()
    const { error, value } = createProductValidation(req.body)
    const data = await CreateProductService(value)
    if (error) {
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
      data: data
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status: true,
      statusCode: 500,
      message: 'error',
      error: error
    })
  }
}

export const GetProduct = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const { id } = req.params
    const { error: idError } = productIdValidation.validate(id)
    if (idError) {
      return res.status(422).json({
        status: false,
        statusCode: 422,
        message: idError.details[0],
        data: {}
      })
    }
    const data = await GetProductID(id)
    if (!data) {
      return res.status(404).json({
        status: true,
        statusCode: 404,
        message: 'Not found',
        data: null
      })
    }
    return res.status(200).json({
      status: true,
      statusCode: 200,
      message: 'hello',
      data: data
    })
  } catch (error) {
    return res.status(500).json({
      status: false,
      statusCode: 500,
      message: 'internal server error',
      error: error
    })
  }
}

export const UpdateProduct = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const { id } = req.params
    const { error: idError } = productIdValidation.validate(id)
    if (idError) {
      return res.status(422).json({
        status: false,
        statusCode: 422,
        message: idError.details[0],
        data: {}
      })
    }
    const { error, value } = updateProductValidation(req.body)
    const data = await UpdateProductService(id, value)
    if (error) {
      return res.status(422).json({
        status: false,
        statusCode: 422,
        message: error.details[0],
        data: {}
      })
    }
    return res.status(200).json({
      status: true,
      statusCode: 200,
      message: 'Updated',
      data: data
    })
  } catch (error: any) {
    if (error.message === 'Product not found') {
      return res.status(404).json({
        status: false,
        statusCode: 404,
        message: 'Product not found',
        data: {}
      })
    }
    console.log(error)
    return res.status(500).json({
      status: false,
      statusCode: 500,
      message: 'Internal server error',
      error: error.message
    })
  }
}

export const DeleteProduct = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const { id } = req.params
    const { error: idError } = productIdValidation.validate(id)
    if (idError) {
      return res.status(422).json({
        status: false,
        statusCode: 422,
        message: idError.details[0],
        data: {}
      })
    }
    const data = await DeleteProductService(id)
    return res.status(200).json({
      status: true,
      statusCode: 200,
      message: 'Deleted',
      data: data
    })
  } catch (error: any) {
    if (error.message === 'Product not found') {
      return res.status(404).json({
        status: false,
        statusCode: 404,
        message: 'Product not found',
        data: {}
      })
    }
    console.log(error)
    return res.status(500).json({
      status: false,
      statusCode: 500,
      message: 'Internal server error',
      error: error.message
    })
  }
}
