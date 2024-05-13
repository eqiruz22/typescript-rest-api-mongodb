import { Response, Request, NextFunction } from 'express'
import { CreateSessionValidation, UserRegisterValidation } from '../validation/user.validation'
import { v4 as uuidv4 } from 'uuid'
import { FindUserByEmail, RegisterUserService } from '../services/auth.service'
import { HashPassword, MatchPassword } from '../utils/hashing'
import { signJWT } from '../utils/jwt'
export const RegisterUser = async (req: Request, res: Response, next: NextFunction) => {
  req.body.user_id = uuidv4()
  const { error, value } = UserRegisterValidation(req.body)
  try {
    value.password = `${await HashPassword(value.password)}`
    const data = await RegisterUserService(value)
    if (error) {
      console.log(error)
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
      message: 'success',
      data: data
    })
  } catch (error: any) {
    return res.status(500).json({
      status: false,
      statusCode: 500,
      message: 'internal server error',
      error: error instanceof Error
    })
  }
}

export const CreateSession = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  const { error, value } = CreateSessionValidation(req.body)
  if (error) {
    return res.status(422).json({
      status: false,
      statusCode: 422,
      message: error.details[0],
      data: {}
    })
  }
  try {
    const user: any = await FindUserByEmail(value.email)
    const isValid = await MatchPassword(value.password, user.password)
    if (!isValid) {
      return res.status(401).json({
        status: false,
        statusCode: 401,
        message: 'Invalid email or password',
        data: {}
      })
    }
    const accessToken = signJWT({ ...user }, { expiresIn: '1d' })
    return res.status(200).json({
      status: true,
      statusCode: 200,
      message: 'Login success',
      data: { accessToken }
    })
  } catch (error: any) {
    console.log(error)
    if (error.message === 'Invalid email or password') {
      return res.status(401).json({
        status: false,
        statusCode: 401,
        message: error.message,
        data: {}
      })
    }
    return res.status(500).json({
      status: false,
      statusCode: 500,
      message: 'internal server error',
      error: error
    })
  }
}
