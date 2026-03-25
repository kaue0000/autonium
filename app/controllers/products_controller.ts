import Flavor from '#models/flavor'
import Product from '#models/product'
import { storeProductValidator, updateProductValidator } from '#validators/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
    async index({ }: HttpContext) {
        return await Product.all()
    }
    async show({ params, response }: HttpContext) {
        try {
            return await Product.query()
            .where('id', params.id)
            .preload('flavors')
            .firstOrFail()
        } catch (error) {
            return response.status(404).json({ error: 'Product not found' })
        }
    }
    async store({ request, response }: HttpContext) {
        try {
         const data = await request.validateUsing(storeProductValidator)
         await Product.create(data)

         return { message: 'Product created successfully' }  
        } catch (error) {
            return response.status(404).json({ error: 'Failed to create product' })
        }
    }
    async update({ params, request, response }: HttpContext) {
        const product = await Product.find(params.id)
        if (!product) {
            return response.status(404).json({ error: 'Product not found' })
        }
        try {
            const data = await request.validateUsing(updateProductValidator)
            await product.merge(data).save()

            return { message: 'Product updated successfully' }
        } catch (error) {
            return response.status(404).json({ error: 'Failed to update product' })
        }
    }
    async syncFlavors({ params, request, response }: HttpContext) {
        try {
            const productName = await request.input('product_name')
            const flavorName = await request.input('flavor_name')

            const product = await Product.findOrFail('name', productName)
            const flavor = await Flavor.findOrFail('name', flavorName)

            await product.related('flavors').sync([flavor.id])

            return { message: 'Flavors synced successfully' }
        } catch (error) {
            return response.status(404).json({ error: 'Failed to sync flavors' })
        }
    }
}