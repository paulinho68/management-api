'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/
/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', async (faker, i, data) => {
  console.log(data);
  return {
    user_name: faker.name(),
    email: faker.email(),
    password: await Hash.make(faker.string()),
    ...data
  }
})
