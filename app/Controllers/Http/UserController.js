'use strict'

const User = use('App/Models/User');

class UserController {
  async store({ request }) {
    const { email, password } = request.only([
      'email',
      'password'
    ])

    const user = User.create({
      email,
      password
    });


    return user;

  }
}

module.exports = UserController
