const sql = require('mssql');

const { MATRICULA_DB_CONF } = require('../database/connection');
const logger = require('../server/logger');

const busquedaFormularioxDnixCodigoformulario = async( p_dni_alumno , p_tipo_dni_alumno , p_dni_apoderado , p_tipo_dni_apoderado   ) => {

    try {
        
        logger.info(`Ejecutando busquedaFormularioxDnixCodigoformulario`)
        const pool = await sql.connect(MATRICULA_DB_CONF);

        const result = await pool.request()
            .input('p_dni_alumno', sql.NVarChar, p_dni_alumno)
            .input('p_tipo_dni_alumno' , sql.NVarChar, p_tipo_dni_alumno)
            .input('p_dni_apoderado' , sql.NVarChar, p_dni_apoderado)
            .input('p_tipo_dni_apoderado' , sql.NVarChar , p_tipo_dni_apoderado)
            .execute(`[dbo].[busquedaFormularioxDnixCodigoformulario]`);

            queryResult = result.recordset;
            return queryResult;

    } catch (error) {
        logger.error(`Error al ejecutar BusquedaColegioVacantes`)
        logger.error(error);
    }
}

const registrarFormulario = async ( formulario ) => {

    let creado = null;

    try {
        const { 
            idVacante,
            nombreApoderadoFormulario ,
            paternoApoderadoFormulario , 
            maternoApoderadoFormulario ,
            tipoDocApoderadoFormulario ,
            docApoderadoFormulario ,
            parentezcoApoderadoFormulario ,
            telefonoApoderadoFormulario ,
            correoApoderadoFormulario ,
            documentoSolicitudFormulario ,
            nombreAlumnoFormulario ,
            paternoAlumnoFormulario , 
            maternoAlumnoFormulario ,
            tipoDocAlumnoFormulario ,
            docAlumnoFormulario ,
            fechaNacAlumnoFormulario  } = formulario;

        const pool = await sql.connect(MATRICULA_DB_CONF);
        await pool.request()
            .input('p_idVacante', sql.Int, idVacante)
            .input('p_nombreApoderadoFormulario' , sql.NVarChar, nombreApoderadoFormulario)
            .input('p_paternoApoderadoFormulario' , sql.NVarChar , paternoApoderadoFormulario)
            .input('p_maternoApoderadoFormulario' , sql.NVarChar, maternoApoderadoFormulario)
            .input('p_tipoDocApoderadoFormulario' , sql.NVarChar , tipoDocApoderadoFormulario)        
            .input('p_docApoderadoFormulario' , sql.NVarChar , docApoderadoFormulario)         
            .input('p_parentezcoApoderadoFormulario' , sql.NVarChar , parentezcoApoderadoFormulario)         
            .input('p_telefonoApoderadoFormulario' , sql.NVarChar , telefonoApoderadoFormulario)         
            .input('p_correoApoderadoFormulario' , sql.NVarChar , correoApoderadoFormulario)         
            .input('p_documentoSolicitudFormulario' , sql.NVarChar , documentoSolicitudFormulario)         
            .input('p_nombreAlumnoFormulario' , sql.NVarChar , nombreAlumnoFormulario)         
            .input('p_paternoAlumnoFormulario' , sql.NVarChar , paternoAlumnoFormulario)         
            .input('p_maternoAlumnoFormulario' , sql.NVarChar , maternoAlumnoFormulario)         
            .input('p_tipoDocAlumnoFormulario' , sql.NVarChar , tipoDocAlumnoFormulario)         
            .input('p_docAlumnoFormulario' , sql.NVarChar , docAlumnoFormulario)         
            .input('p_fechaNacAlumnoFormulario' , sql.NVarChar , fechaNacAlumnoFormulario)         
            .execute(`[dbo].[inserFormularioEstudiante]`);

            logger.info(`crearContactenos finalizada con exito`)

            creado = true;

    } catch (error) {
        logger.error(`Error al ejecutar BusquedaColegioVacantes`)
        logger.error(error);

        creado = false;
    }finally{
        return creado;
    }

}

module.exports = {
    busquedaFormularioxDnixCodigoformulario,
    registrarFormulario
}