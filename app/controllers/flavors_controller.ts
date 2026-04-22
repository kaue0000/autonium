import Flavor from '#models/flavor'
import { storeFlavorValidator } from '#validators/flavor'
import { HttpContext } from '@adonisjs/core/http'

export default class FlavorsController {
    async index({}: HttpContext){
        return await Flavor.all()
    }
    async show({ params, response }: HttpContext){
        try{
        return await Flavor.query().where('id', params.id).preload('products').firstOrFail()
        } catch(error){
            return response.status(404).json({ error: 'Product not found.' })
        }
        }
    async store({ request, response }: HttpContext){
        try {
            const flavorData = await request.validateUsing(storeFlavorValidator)

            await Flavor.create(flavorData)

            return response.status(200).send('Flavor has been created.')
        } catch (error) {
            return response.status(400).send('Product cannot be created.')
        }
    }
    async update({}: HttpContext){
        
    }
    async delete({}: HttpContext){
        
    }
}