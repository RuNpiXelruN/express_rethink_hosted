const rdb = require('rethinkdb')
const dbConfig = require('../config/database')

const connection = rdb.connect(dbConfig)
.then(function (connection) {

    module.exports.find = function (tableName, id) {
        return rdb.table(tableName).get(id).run(connection)
        .then(function (result) {
            return result
        })
    }
})
