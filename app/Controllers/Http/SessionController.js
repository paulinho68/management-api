'use strict'

class SessionController {
  async store({ request, auth}){
    const {email, password} = request.only([
      'email',
      'password'
    ])

    const {token} = await auth.attempt(email,password);


    return {message: "You're logged!",token}

  }

}

module.exports = SessionController