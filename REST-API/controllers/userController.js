const {User} = require('../models')
const {compareHash} = require('../helpers/bcrypt')
const {createToken} = require('../helpers/jwt')

class Controller {
  static async register(req, res, next) {
    try {
      const {email, password} = req.body
      if(!email) throw {name: "Email required"}
      if(!password) throw {name: "Password required"}

      await User.create({email, password})
      
      res.status(201).json({message: "new user added"})
    } catch (error) {
      next(error)
    }
  }

  static async login(req,res,next) {
    try {
      const {email, password} = req.body
      if(!email) throw {name: "Email required"}
      if(!password) throw {name: "Password required"}

      const user = await User.findOne({where: {email}})
      if(!user) throw {name: "Invalid email/password"}

      const comparePass = compareHash(password, user.password)
      if(!comparePass) throw {name: "Invalid email/password"}

      const payload = {id: user.id, email: user.email}
      const access_token = createToken(payload)

      res.status(200).json({access_token})
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller