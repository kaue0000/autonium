import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'product_sales'

  //PIVOT TABLE

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('flavor_product_id').references('flavor_products.id').onDelete('CASCADE')
      table.integer('sale_id').references('sales.id').onDelete('CASCADE')
      table.decimal('unit_price', 10, 2).notNullable()
      table.integer('amount').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}