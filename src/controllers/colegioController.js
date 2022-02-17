
const {  busquedaColegioVacantes , obtenerColegios } = require('../services/colegioServices');

const buscarColegioVacantes = async(req , res ) => {

    try {
        const { p_distritoColegio  , p_provinciaColegio , p_departamentoColegio , p_nivel , p_grado  } = req.body;
    
        const data = await busquedaColegioVacantes(p_distritoColegio , p_provinciaColegio , p_departamentoColegio , p_nivel , p_grado )
        
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

const listarColegios = async (req , res ) => {
 
    try {

        const data = await obtenerColegios()

        return res.status(201).json({
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

module.exports = {
    buscarColegioVacantes,
    listarColegios
}