const bcyrpt = require('bcryptjs')

const hashPassword = (password) => bcyrpt.hashSync(password, 10)
const compareHash = (password, hashed) => bcyrpt.compareSync(password, hashed)

module.exports = {
  hashPassword,
  compareHash
}