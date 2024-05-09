import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      unique: true
    },
    name: {
      type: String
    },
    price: {
      type: Number
    }
  },
  { timestamps: true }
)

const ProductModel = mongoose.model('product', ProductSchema)

export default ProductModel
