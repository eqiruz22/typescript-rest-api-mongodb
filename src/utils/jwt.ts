import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

const privateKey = fs.readFileSync(path.join(__dirname, '../../private.key'), 'utf8')
const publicKey = fs.readFileSync(path.join(__dirname, '../../public.key'), 'utf8')
export const signJWT = (payload: Object, options?: jwt.SignOptions | undefined) => {
  const data = jwt.sign(payload, privateKey, {
    ...(options && options),
    algorithm: 'RS256'
  })
  return data
}

export const verifyJWT = (token: string) => {
  try {
    const decoded = jwt.verify(token, publicKey)
    return {
      valid: true,
      expired: false,
      decoded
    }
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === 'jwt is expired or invalid',
      decoded: null
    }
  }
}
