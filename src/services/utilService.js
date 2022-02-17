const sql = require('mssql');

const { MATRICULA_DB_CONF } = require('../database/connection');
const logger = require('../server/logger');

const obtenerDepartamentos = async() => {

    try {
        
        logger.info(`Ejecutando obtenerDepartamentos`)
        const pool = await sql.connect(MATRICULA_DB_CONF);
        const result = await pool.request()
        .execute(`[dbo].[obtenerDepartamentoColegio]`);
        
        logger.info(`obtenerDepartamentos finalizada con exito`)
        queryResult = result.recordset;
        return queryResult;

    } catch (error) {
        logger.error(`Error al ejecutar obtenerDepartamentos`)
        logger.error(error);
    }
}

const obtenerProvinciaxDeprtamento = async( departamento) => {

    try {
        
        logger.info(`Ejecutando obtenerProvinciaColegioColegio`)
        const pool = await sql.connect(MATRICULA_DB_CONF);
        const result = await pool.request()
        .input('p_departamentoColegio', sql.NVarChar, departamento)
        .execute(`[dbo].[obtenerProvinciaColegioColegio]`);
        
        logger.info(`obtenerProvinciaColegioColegio finalizada con exito`)
        queryResult = result.recordset;
        return queryResult;

    } catch (error) {
        logger.error(`Error al ejecutar obtenerDepartamentos`)
        logger.error(error);
    }
}

const obtenerDistritoxProvincia = async( provincia) => {

    try {
        
        logger.info(`Ejecutando obtenerDistritoColegioColegio`)
        const pool = await sql.connect(MATRICULA_DB_CONF);
        const result = await pool.request()
        .input('p_provinciaColegio', sql.NVarChar, provincia)
        .execute(`[dbo].[obtenerDistritoColegioColegio]`);
        
        logger.info(`obtenerDistritoColegioColegio finalizada con exito`)
        queryResult = result.recordset;
        return queryResult;

    } catch (error) {
        logger.error(`Error al ejecutar obtenerDepartamentos`)
        logger.error(error);
    }
}

const insertarContactenos = async (p_nombres, p_numero , p_correo , p_mensaje , p_motivo) => {

    let creado = null;

    try {
        const pool = await sql.connect(MATRICULA_DB_CONF);
         await pool.request()
        .input('p_nombres', sql.NVarChar, p_nombres)
        .input('p_numero' , sql.NVarChar, p_numero)
        .input('p_motivo' , sql.NVarChar , p_motivo)
        .input('p_correo' , sql.NVarChar, p_correo)
        .input('p_mensaje' , sql.NVarChar , p_mensaje)         
        .execute(`[dbo].[insertContactenos]`);

        logger.info(`crearContactenos finalizada con exito`)
  
        creado = true;

    } catch (error) {
        logger.error(`Error al ejecutar crearContactenos`)
         logger.error(error);
         creado = false;
    } finally {

        return creado;

    }
}

module.exports = {
    obtenerDepartamentos,
    obtenerProvinciaxDeprtamento,   
    obtenerDistritoxProvincia,
    insertarContactenos
}