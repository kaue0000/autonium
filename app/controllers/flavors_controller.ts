import Flavor from '#models/flavor'
import { storeFlavorValidator, updateFlavorValidator } from '#validators/flavor'
import type { HttpContext } from '@adonisjs/core/http'

export default class FlavorsController {
    async index({ }: HttpContext) {
        return await Flavor.all()
    }
    async show({ params, response }: HttpContext) {
        try {
            return await Flavor.query().where('id', params.id).preload('products').firstOrFail()
        } catch (error) {
            return response.status(404).json({ error: 'Flavor not found' })
        }
    }
    async store({ request, response }: HttpContext) {
        try {
            const data = await request.validateUsing(storeFlavorValidator)
            await Flavor.create(data)

            return { message: 'Flavor created successfully' }  
        } catch (error) {
            return response.status(404).json({ error: 'Failed to create flavor' })
        }
    }
    async update({ params, request, response }: HttpContext) {
        const flavor = await Flavor.find(params.id)
        if (!flavor) {
            return response.status(404).json({ error: 'Flavor not found' })
        }
        try {
            const data = await request.validateUsing(updateFlavorValidator)
            await flavor.merge(data).save()

            return { message: 'Flavor updated successfully' }
        } catch (error) {
            return response.status(404).json({ error: 'Failed to update flavor' })
        }
    }
}