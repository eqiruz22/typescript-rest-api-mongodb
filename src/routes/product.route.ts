import { Router } from 'express'
import { CreateProduct, DeleteProduct, GetProduct, GetProducts, UpdateProduct } from '../controllers/product.controller'
import { requireUser } from '../middleware/auth'

export const ProductRouter: Router = Router()

ProductRouter.get('/', requireUser, GetProducts)
ProductRouter.get('/:id', GetProduct)
ProductRouter.post('/', CreateProduct)
ProductRouter.patch('/:id', UpdateProduct)
ProductRouter.delete('/:id', DeleteProduct)
