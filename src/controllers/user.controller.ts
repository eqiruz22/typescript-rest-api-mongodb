import { Response, Request, NextFunction } from 'express'
import { UserRegisterValidation } from '../validation/user.validation'
import { v4 as uuidv4 } from 'uuid'
import { RegisterUserService } from '../services/auth.service'
import { HashPassword } from '../utils/hashing'
export const RegisterUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    req.body.user_id = uuidv4()
    const { error, value } = UserRegisterValidation(req.body)
    value.password = `${await HashPassword(value.password)}`
    const data = await RegisterUserService(value)
    if (error) {
      console.log(error.details[0])
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
  } catch (error) {
    return res.status(500).json({
      status: false,
      statusCode: 500,
      message: 'internal server error',
      error: error
    })
  }
}
