import 'dotenv/config'
import fs from 'fs'
import path from 'path'

const privateKey = fs.readFileSync(path.join(__dirname, '../../private.key'), 'utf8')
const publicKey = fs.readFileSync(path.join(__dirname, '../../public.key'), 'utf8')

const CONFIG = {
  db: process.env.DB,
  jwt_public: privateKey,
  jwt_private: publicKey
}

export default CONFIG
