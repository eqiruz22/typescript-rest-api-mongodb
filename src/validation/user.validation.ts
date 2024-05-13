import Joi from 'joi'
import UserInterface from '../types/user.type'

export const UserRegisterValidation = (payload: UserInterface) => {
  const schema = Joi.object({
    user_id: Joi.string().required(),
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    password: Joi.string().min(5).required(),
    role: Joi.string().allow('', null)
  })
  return schema.validate(payload)
}

export const CreateSessionValidation = (payload: UserInterface) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
  })
  return schema.validate(payload)
}
