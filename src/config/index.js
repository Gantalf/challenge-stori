require('dotenv').config();

const config = {
  host: process.env.HOST_NAME,
  port: process.env.PORT,
  user_email: process.env.USER_EMAIL,
  pass: process.env.PASS
}

module.exports = { config }