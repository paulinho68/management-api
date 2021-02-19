const { test, trait } = use('Test/Suite')('Session');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

trait('Test/ApiClient');

test('it should return JWT token when session created', async ({ assert, client }) => {
  const user = await User.create({
    name: 'Paulo Vitor',
    email: 'paulovitor2123@gmail.com',
    password: '123456'
  });

  const response = await client
  .post('/session')
  .send({
    email: 'paulovitor2123@gmail.com',
    password: '123456'
  })
  .end();

  response.assertStatus(200);

  return assert.exists(response.body.token);
})
