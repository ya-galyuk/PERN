const Pool = require("pg").Pool;
const pool = new Pool({
    user: "ya_galyuk",
    password:"password",
    host: "localhost",
    port: 5432,
    database: "pern"
})

module.exports = pool;