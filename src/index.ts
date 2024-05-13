import express, { Application, NextFunction, Request, Response } from 'express'
import { routes } from './routes'
import { logger } from './utils/logger'
import bodyParser from 'body-parser'
import cors from 'cors'
import './utils/connectionDB'
import deserializedToken from './middleware/deserializedToken'
const app: Application = express()
const port: Number = 8081

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})
app.use(deserializedToken)
routes(app)
app.listen(port, () => {
  logger.info(`server running on port ${port}`)
})
