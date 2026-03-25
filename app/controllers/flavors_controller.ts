import Flavor from '#models/flavor'
import { storeFlavorValidator, updateFlavorValidator } from '#validators/flavor'
import type { HttpContext } from '@adonisjs/core/http'

export default class FlavorsController {
    async index({ }: HttpContext) {
        return await Flavor.all()
    }
    async show({ params }: HttpContext) {
        const flavor = await Flavor.find(params.id)
        if (!flavor) {
            return { error: 'Flavor not found' }
        }
        return flavor.related('products')
    }
    async store({ request }: HttpContext) {
        try {
            const data = await request.validateUsing(storeFlavorValidator)
            await Flavor.create(data)

            return { message: 'Flavor created successfully' }  
        } catch (error) {
            return { error: 'Failed to create flavor' }
        }
    }
    async update({ params, request }: HttpContext) {
        const flavor = await Flavor.find(params.id)
        if (!flavor) {
            return { error: 'Flavor not found' }
        }
        try {
            const data = await request.validateUsing(updateFlavorValidator)
            await flavor.merge(data).save()

            return { message: 'Flavor updated successfully' }
        } catch (error) {
            return { error: 'Failed to update flavor' }
        }
    }
}