const Pool = require('pg').Pool
require('dotenv').config()

// const devConfig = {
//     user: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//     database: process.env.PG_DATABASE
// }

const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const proConfig = {
    connectionString: process.env.DATABASE_URL // heroku addons
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    sslmode= 'require'
    // connectionString: process.env.NODE_ENV === "production" ? proConfig : devConfig,
    // ssl: {
    //     rejectUnauthorized: false
    // },
    // sslmode: process.env.NODE_ENV === "production" ? "require" : "disable"
});

module.exports = pool