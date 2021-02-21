const { test, trait } = use('Test/Suite')('Session');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

const Mail = use('Mail');

trait('Test/ApiClient');
trait('DatabaseTransactions');

test('it should send an email with reset password instructions', async ({ assert, client }) => {
  Mail.fake();

  const forgotPayload = {
    email: 'paulovitor2123@gmail.com',
  };

  await Factory
    .model('App/Models/User')
    .create(forgotPayload)

  const response = await client
    .post('/session/forgot')
    .send(forgotPayload)
    .end();

  response.assertStatus(200);

  const recentEmail = Mail.pullRecent()

  assert.equal(recentEmail.message.to[0].address, forgotPayload.email)

  Mail.restore()
})
