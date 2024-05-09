import { logger } from '../utils/logger'
import ProductModel from '../models/product.model'
import ProductInterface from '../types/product.type'

export const GetProductService = async () => {
  try {
    const data = await ProductModel.find()
    return data
  } catch (error: any) {
    logger.info('Cannot get data from database')
    logger.error(error)
  }
}

export const GetProductID = async (id: string) => {
  try {
    const data = await ProductModel.findOne({ product_id: id })
    if (data) {
      return data
    }
    return {}
  } catch (error: any) {
    logger.info('Cannot get single data from database')
    logger.error(error)
  }
}

export const CreateProductService = async (value: ProductInterface) => {
  try {
    await ProductModel.create(value)
    return 'success create new product'
  } catch (error) {
    logger.info('Cannot create data product')
    logger.error(error)
  }
}

export const UpdateProductService = async (id: string, value: ProductInterface) => {
  try {
    const check = await GetProductID(id)
    if (check) {
      const data = await ProductModel.findOneAndUpdate(
        {
          product_id: id
        },
        {
          $set: value
        }
      )
      if (data) {
        return 'update success'
      }
    }
    throw new Error('Product not found')
  } catch (error) {
    logger.info('Cannot update data product')
    logger.error(error)
    throw error
  }
}

export const DeleteProductService = async (id: string) => {
  try {
    const check = await GetProductID(id)
    if (check) {
      const data = await ProductModel.findOneAndDelete({ product_id: id })
      if (data) {
        return 'delete success'
      }
    }
    throw new Error('Product not found')
  } catch (error) {
    logger.info('Cannot update data product')
    logger.error(error)
    throw error
  }
}
