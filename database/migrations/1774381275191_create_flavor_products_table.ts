import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'flavor_products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE')
      table.integer('flavor_id').unsigned().references('id').inTable('flavors').onDelete('CASCADE')
      
      table.unique(['product_id', 'flavor_id'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}