const fs = require('fs')
const cert = new Buffer(fs.readFileSync('./cert.js', "utf8"))

const connection = {
  host: 'aws-us-east-1-portal.9.dblayer.com',
  port: 11431,
  user: 'admin',
  password: 'ygiv68yBH4WtDt5WFvS7Lb9hZM2OdTQDGKmHqIuBvo',
  ssl: {
    ca: cert
  }
}

module.exports = {
  connection: connection
}
