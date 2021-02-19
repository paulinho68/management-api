'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name', 60)
      table.string('user_name', 50)
      table.string('depto', 50)
      table.string('cargo', 50)
      table.string('email', 60).notNullable().unique()
      table.string('super_user', 1)
      table.string('password', 60).notNullable()
      table.string('cod_vend', 6)
      table.string('cod_emp', 2)
      table.string('type_account', 1)
      table.string('phone', 50)
      table.string('representacao', 100)
      table.date('last_time_logged')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
