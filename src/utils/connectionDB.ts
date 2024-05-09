import mongoose from 'mongoose'
import CONFIG from '../config/environment'
import { logger } from './logger'

mongoose
  .connect(`${CONFIG.db}`)
  .then(() => {
    logger.info('Connected to database')
  })
  .catch((err) => {
    logger.error('cannot connect to db')
    logger.error(err)
    process.exit(1)
  })
