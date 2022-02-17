const { listarSolicitudes , aprobarSolicitud , recharzarSolicitud} = require('../services/solicitudesService')

const getSolicitudesPendientes = async( req , res ) => {

    try {
        const data = await listarSolicitudes();

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

const aprobarSolicitudes = async (req , res ) => {

    const { formularioId } = req.body;
    const data =  await aprobarSolicitud(formularioId)

    return res.status(201).json({
        ok:true,
        data
    })
}

const rechazarSolicitudes = async (req , res ) => {

    const { formularioId } = req.body;

    const data =  await recharzarSolicitud(formularioId)

    return res.status(201).json({
        ok:true,
        data
    })
    
}

module.exports = {
    getSolicitudesPendientes,
    aprobarSolicitudes,
    rechazarSolicitudes
}   