import { logger } from '../utils/logger'
import UserModel from '../models/user.model'
import UserInterface from '../types/user.type'

export const RegisterUserService = async (value: UserInterface) => {
  try {
    const check = await UserModel.findOne({ email: value.email })
    if (check) {
      throw new Error('Email already register')
    }
    await UserModel.create(value)
    return 'Success register user'
  } catch (error) {
    logger.info('Cannot register user')
    logger.error(error)
    throw error
  }
}

export const FindUserByEmail = async (email: string) => {
  try {
    const data = await UserModel.findOne({ email: email })
    if (!data) {
      throw new Error('Invalid email or password')
    }
    return data
  } catch (error) {
    logger.info('Cannot find email')
    logger.error(error)
    throw error
  }
}
