import { Application, Router } from 'express'
import { HealthRouter } from './health'
import { ProductRouter } from './product'

const route: Array<[string, Router]> = [
  ['/product', ProductRouter],
  ['/health', HealthRouter]
]

export const routes = (app: Application) => {
  route.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}
