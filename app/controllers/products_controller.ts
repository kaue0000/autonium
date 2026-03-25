import Product from '#models/product'
import { storeProductValidator } from '#validators/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
    async index({ }: HttpContext) {
        return await Product.all()
    }
    async show({ params }: HttpContext) {
        const product = await Product.find(params.id)
        if (!product) {
            return { error: 'Product not found' }
        }
        return product.related('flavors')
    }
    async store({ request }: HttpContext) {
        try {
         const data = await request.validateUsing(storeProductValidator)
         await Product.create(data)

         return { message: 'Product created successfully' }  
        } catch (error) {
            return { error: 'Failed to create product' }
        }
    }
    async update({ params, request }: HttpContext) {
        const product = await Product.find(params.id)
        if (!product) {
            return { error: 'Product not found' }
        }
        try {
            const data = await request.validateUsing(storeProductValidator)
            await product.merge(data).save()

            return { message: 'Product updated successfully' }
        } catch (error) {
            return { error: 'Failed to update product' }
        }
    }
}