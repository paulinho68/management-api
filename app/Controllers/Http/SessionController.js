'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

const Mail = use('Mail');
class SessionController {
  async store({ request, auth }) {
    const { email, password } = request.only([
      'email',
      'password'
    ]);

    const { token } = await auth.attempt(email, password);


    return { message: "You're logged!", token }

  }

  async forgotPassword({ request }) {
    const { email } = request.only(['email']);
    const user = await User.findByOrFail('email', email);

    await Mail.send('emails.forgotpassword', user.toJSON(), (message) => {
      message
        .to(user.email)
        .from('paulovitor2123@hotmail.com')
        .subject('Forgot Password')
    })

    return { message: "Email sent successfully" }
  }

}

module.exports = SessionController
