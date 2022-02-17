const { busquedaFormularioxDnixCodigoformulario , registrarFormulario } = require('../services/formularioService');

const busquedaFormulario = async (req, res ) => {

    try {
        const { p_dni_alumno , 
                p_tipo_dni_alumno , 
                p_dni_apoderado , 
                p_tipo_dni_apoderado,
                p_motivo }  = req.body;

        const data = await busquedaFormularioxDnixCodigoformulario(p_dni_alumno , 
            p_tipo_dni_alumno , 
            p_dni_apoderado , 
            p_tipo_dni_apoderado,
            p_motivo);
    
    return res.status(200).json({
        ok:true,
        data
    });  
    } catch (error) {
        return res.status(500).json({
            ok:false,
            error
        })
    }
}

const crearFormulario = async ( req , res ) => {

    try {

        const formulario  = req.body;

        const registro = await registrarFormulario(formulario);

        if(registro){
            return res.status(201).json({
                ok:true,
                msg:'Creado exitosamente'
            });
        }else{
            return res.status(500).json({
                ok:true,
                msg:'error'
            });
        }
        
    } catch (error) {
        return res.status(500).json({
            ok:false,
            error
        })
    }
}

module.exports = {
    busquedaFormulario,
    crearFormulario
}
