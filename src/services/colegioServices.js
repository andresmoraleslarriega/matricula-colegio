const sql = require('mssql');
const { MATRICULA_DB_CONF } = require('../database/connection');
const logger = require('../server/logger');

const busquedaColegioVacantes = async ( p_distritoColegio, p_provinciaColegio, p_departamentoColegio, p_nivel, p_grado ) => {

    try {
       logger.info(`Ejecutando busquedaColegioVacantes`)
       const pool = await sql.connect(MATRICULA_DB_CONF);

       const result = await pool.request()
       .input('p_distritoColegio', sql.NVarChar, p_distritoColegio)
       .input('p_provinciaColegio', sql.NVarChar, p_provinciaColegio)
       .input('p_departamentoColegio', sql.NVarChar, p_departamentoColegio)
       .input('p_nivel', sql.NVarChar, p_nivel)
       .input('p_grado', sql.NVarChar, p_grado)
       .execute(`[dbo].[busquedaColegioVacantes]`);
       
       logger.info(`BusquedaColegioVacantes finalizada con exito`)
       queryResult = result.recordset;
       return queryResult;

    } catch (error) {
      logger.error(`Error al ejecutar BusquedaColegioVacantes`)
      logger.error(error);
    }

}

const obtenerUbicacionColegio = async () => {

  try {
      
      logger.info(`Ejecutando obtenerUbicacionColegio`)
      const pool = await sql.connect(MATRICULA_DB_CONF);
      const result = await pool.request()
      .execute(`[dbo].[obtenerUbicacionColegio]`);
      
      logger.info(`obtenerUbicacionColegio finalizada con exito`)
      queryResult = result.recordset;
      return queryResult;

  } catch (error) {
      logger.error(`Error al ejecutar BusquedaColegioVacantes`)
      logger.error(error);
  }


}

const crearSeccion_Colegio = async( formulario ) => {

  try {

    const {
          idColegio,
          p_nivel,
          p_grado,
          p_seccion,
          p_turno,
          p_vacante
      } = formulario;
      console.log("formulario" , formulario)
      logger.info(`Ejecutando crearSeccion_Colegio`)
      const pool = await sql.connect(MATRICULA_DB_CONF);
      const result = await pool.request()

      .input('idColegio', sql.Int, Number(idColegio))
      .input('p_nivel', sql.NVarChar, p_nivel)
      .input('p_grado', sql.NVarChar, p_grado)
      .input('p_seccion', sql.NVarChar, p_seccion)
      .input('p_turno', sql.NVarChar, p_turno)
      .input('p_vacante', sql.Int, p_vacante)

      .execute(`[dbo].[CrearSeccionColegio]`);
      
      logger.info(`crearSeccion_Colegio finalizada con exito`)
      queryResult = result.recordset;
      return queryResult;

  } catch (error) {
      logger.error(`Error al ejecutar crearSeccion_Colegio`)
      logger.error(error);
  }
}

const obtenerColegios = async() => {

  try {
      
      logger.info(`Ejecutando obtenerColegios`)
      console.log('churalovers')
      const pool = await sql.connect(MATRICULA_DB_CONF);
      const result = await pool.request()
      .execute(`[dbo].[listarColegio]`);
      
      logger.info(`obtenerColegios finalizada con exito`)
      queryResult = result.recordset;
      return queryResult;

  } catch (error) {
      logger.error(`Error al ejecutar obtenerColegios`)
      logger.error(error);
  }
  
}

module.exports = {
  busquedaColegioVacantes,
  obtenerUbicacionColegio,
  crearSeccion_Colegio,
  obtenerColegios
}

