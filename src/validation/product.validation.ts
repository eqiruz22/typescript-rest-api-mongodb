import Joi from 'joi'
import ProductInterface from '../types/product.type'

export const createProductValidation = (payload: ProductInterface) => {
  const schema = Joi.object({
    product_id: Joi.string().required(),
    name: Joi.string().required(),
    price: Joi.number().allow('', null)
  })
  return schema.validate(payload)
}

export const updateProductValidation = (payload: ProductInterface) => {
  const schema = Joi.object({
    name: Joi.string().allow('', null),
    price: Joi.number().allow('', null)
  })
  return schema.validate(payload)
}

export const productIdValidation = Joi.string().length(36).required()
