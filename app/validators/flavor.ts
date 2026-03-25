import vine from '@vinejs/vine'

export const storeFlavorValidator = vine.compile(
    vine.object({
        name: vine.string().toUpperCase(),
    })
)

export const updateFlavorValidator = vine.compile(
    vine.object({
        name: vine.string().toUpperCase().optional(),
    })
)