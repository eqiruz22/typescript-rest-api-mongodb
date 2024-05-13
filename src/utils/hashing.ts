import bcrypt from 'bcrypt'
import { logger } from './logger'

export const HashPassword = async (password: string) => {
  try {
    const hash = await bcrypt.hash(password, 10)
    return hash
  } catch (error) {
    logger.error(error)
  }
}

export const MatchPassword = async (password: string, checkPassword: string) => {
  try {
    const match = await bcrypt.compare(password, checkPassword)
    if (match) {
      return match
    }
    throw new Error('Password not match')
  } catch (error) {
    logger.error(error)
  }
}
