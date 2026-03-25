import vine from '@vinejs/vine'

export const storeFlavorValidator = vine.compile(
    vine.object({
        name: vine.string(),
    })
)

export const updateFlavorValidator = vine.compile(
    vine.object({
        name: vine.string().optional(),
    })
)