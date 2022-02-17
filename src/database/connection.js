
const MATRICULA_DB_CONF = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    driver: 'tedious',
    options: {
        encrypt: true,
        database: 'dbname'
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}


module.exports = {
    MATRICULA_DB_CONF,
} 