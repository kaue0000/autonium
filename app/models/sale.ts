import { column, BaseModel, manyToMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Product from './product.ts'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Sale extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare dateHour: DateTime

    @column()
    declare description: string

    @column()
    declare paymentMethod: 'PIX' | 'DINHEIRO'

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime
    
    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @manyToMany(() => Product, {
        pivotTable: 'product_sales',
        pivotColumns: ['unit_price', 'amount'],
        pivotTimestamps: true,
    })
    declare products: ManyToMany<typeof Product>
}