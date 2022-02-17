const sql = require('mssql');

const { MATRICULA_DB_CONF } = require('../database/connection');
const logger = require('../server/logger');

const listarSolicitudes = async ( ) => {

    try {
        
        logger.info(`Ejecutando listarSolicitudes`)
        const pool = await sql.connect(MATRICULA_DB_CONF);
        const result = await pool.request()
        .execute(`[dbo].[listarFormularioPendiente]`);
        
        logger.info(`listarSolicitudes finalizada con exito`)
        queryResult = result.recordset;
        return queryResult;

    } catch (error) {
        logger.error(`Error al ejecutar listarSolicitudes`)
        logger.error(error);
    }
}

const aprobarSolicitud = async ( formularioId) => {

    try {
        
        logger.info(`Ejecutando aprobarSolicitud`)
        const pool = await sql.connect(MATRICULA_DB_CONF);
        const result = await pool.request()
        .input('p_idFormulario', sql.Int, formularioId)
        .execute(`[dbo].[insertMatricula]`);
        
        logger.info(`aprobarSolicitud finalizada con exito`)
        queryResult = result.recordset;
        return queryResult;

    } catch (error) {
        logger.error(`Error al ejecutar aprobarSolicitud`)
        logger.error(error);
    }

}

const recharzarSolicitud = async ( formularioId) => {

    try {
        
        logger.info(`Ejecutando recharzarSolicitud`)
        const pool = await sql.connect(MATRICULA_DB_CONF);
        const result = await pool.request()
        .input('p_idFormulario', sql.Int, formularioId)
        .execute(`[dbo].[insertDesaprobadoMatricula]`);
        
        logger.info(`recharzarSolicitud finalizada con exito`)
        queryResult = result.recordset;
        return queryResult;

    } catch (error) {
        logger.error(`Error al ejecutar recharzarSolicitud`)
        logger.error(error);
    }
}

module.exports = {
    listarSolicitudes,
    aprobarSolicitud,
    recharzarSolicitud
}