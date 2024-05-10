import { logger } from '../utils/logger'
import UserModel from '../models/user.model'
import UserInterface from '../types/user.type'

export const RegisterUserService = async (value: UserInterface) => {
  try {
    await UserModel.create(value)
    return 'Success register user'
  } catch (error) {
    logger.info('Cannot register user')
    logger.error(error)
  }
}
