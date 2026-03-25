import vine from '@vinejs/vine'

export const storeProductValidator = vine.compile(
    vine.object({
        name: vine.string().toUpperCase(),
        description: vine.string().toUpperCase().optional(),
        price: vine.number().positive(),
    })
)

export const updateProductValidator = vine.compile(
    vine.object({
        name: vine.string().toUpperCase().optional(),
        description: vine.string().toUpperCase().optional(),
        price: vine.number().positive().optional(),
    })
)