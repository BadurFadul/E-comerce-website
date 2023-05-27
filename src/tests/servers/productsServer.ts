import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { product1, product2, product3, product4 } from '../data/product'
import { CreateProduct } from '../../types/CreateProduct'
import { Products } from '../../types/Products'
import { UpdateProduct } from '../../types/UpdateProduct.'
import ProductArray from '../data/product'
import categories from '../data/categories'

const productserver = setupServer(
  // Describe the requests to mock.
  rest.get('https://api.escuelajs.co/api/v1/products', (req, res, ctx) => {
    return res(
      ctx.json([
        product1, product2, product3, product4
      ]
      ),
    )
  }),
  
  rest.post("https://api.escuelajs.co/api/v1/products/", async (req, res, ctx) => {
    const newProduct = await req.json() as CreateProduct
    const category = categories.find(c => c.id === newProduct.categoryId)
    let product: Products|null = null
    const error: string[] = []
    if (!category) {
      error.push("category does not exist")
  } else {
      product = {
          title: newProduct.title,
          price: newProduct.price,
          category: category,
          description: newProduct.description,
          images: newProduct.images,
          id: 1
      }
  }

   return res(
    ctx.json(product)
   )
  }),

  rest.put('https://api.escuelajs.co/api/v1/products/:id', (req, res, ctx) => {
    const productId = Number(req.params.id)
    const updatedProductData = req.json() as UpdateProduct
    const productToUpdate = ProductArray.find(p => p.id === productId)
    
    if (!productToUpdate) {
      return res(ctx.status(404), ctx.json({ error: "Product not found" }))
    }

    // Update the fields if they are provided in the request
    if (updatedProductData.title !== undefined) {
      productToUpdate.title = updatedProductData.title
    }
    if (updatedProductData.price !== undefined) {
      productToUpdate.price = updatedProductData.price
    }

    return res(ctx.json(productToUpdate))
}),

  rest.delete('https://api.escuelajs.co/api/v1/products/:id', async (req, res, ctx) => {
    const id = Number(req.params.id)
    const productToDelete = ProductArray.find( p => p.id === id)

    if(!productToDelete){
      return res(
        ctx.status(404),
        ctx.json({ message: 'Product not found' })
      )
    }
    const updateedproduct = ProductArray.filter(p => p.id !== id)

    return res(
        ctx.json(updateedproduct)
    )
}),
  
)

export default productserver