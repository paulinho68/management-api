const { test, trait } = use('Test/Suite')('Session');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

trait('Test/ApiClient');
trait('DatabaseTransactions');

test('it should return JWT token when session created', async ({ assert, client }) => {
  const sessionPayload = {
    email: 'paulovitor2123@gmail.com',
    password: '123456'
  };

  await client
    .post('/user/create')
    .send(sessionPayload)
    .end()

  const response = await client
    .post('/session/login')
    .send(sessionPayload)
    .end();

  response.assertStatus(200);

  return assert.exists(response.body.token);
})
