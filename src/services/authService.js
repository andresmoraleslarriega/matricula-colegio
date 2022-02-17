
const sql = require('mssql');
const { MATRICULA_DB_CONF } = require('../database/connection');
const logger = require('../server/logger');

const validaLogin = async  (email , password) => {


    try {
        
        const pool = await sql.connect(MATRICULA_DB_CONF);

        const result = await pool.request()
        .input('email', sql.NVarChar, email)
        .input('password', sql.NVarChar, password)
        .execute(`[dbo].[login]`);
        
        logger.info(`validaLogin finalizada con exito`)
        queryResult = result.recordset;
        return queryResult;

    } catch (error) {
        logger.error(`Error al ejecutar validaLogin`)
        logger.error(error);
    }

}

module.exports = {
    validaLogin
}