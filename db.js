const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.PGUSER || "postgres",
    password: process.env.PGPASSWORD || "pp12345",
    host: process.env.PGHOST || "localhost",
    port: process.env.PGPORT || 5432,
    database: process.env.PGDATABASE || "perntodo"
})

module.exports = pool