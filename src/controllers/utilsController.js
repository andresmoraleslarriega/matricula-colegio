
const {obtenerDepartamentos , obtenerProvinciaxDeprtamento, obtenerDistritoxProvincia , insertarContactenos} = require('../services/utilService');
const { obtenerUbicacionColegio , crearSeccion_Colegio } = require('../services/colegioServices');

const getDepartamentos = async (req, res ) => {

    try {
    
        const data = await obtenerDepartamentos();

        return res.status(200).json({
            ok:true,
            data
        });  
    } catch (error) {
        console.log("error",error)
        return res.status(500).json({
            ok:false,
            error
        })
    }
}

const getProvincias = async (req, res ) => {

    try {
        const { departamento } = req.body;

        const data = await obtenerProvinciaxDeprtamento(departamento);

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

const getDistritos= async (req, res ) => {

    try {

        const { provincia } = req.body;
    
        const data = await obtenerDistritoxProvincia(provincia);

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

const crearContactenos = async (req , res ) => {

    try {
        const { p_nombres , p_numero, p_correo, p_mensaje }  = req.body;

        const creado = await insertarContactenos(p_nombres , p_numero , p_correo , p_mensaje )
    
        if(creado){
            return res.status(201).json({
                ok:true,
                msg:'Contacto registrado correctamente'
            });
        }else{
            return res.status(500).json({
                ok:true,
                msg:'Error al registrar el contacto'
            });
        }
    
    } catch (error) {
        return res.status(500).json({
            ok:false,
            error
        })

    }

}

const getUbigeo = async (req , res ) => {


    try {
        const data = await obtenerUbicacionColegio();

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

const crearSalon = async (req , res ) => {

    try {

        const data = await crearSeccion_Colegio(req.body)

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
    getDepartamentos,
    getProvincias,
    getDistritos,

    crearContactenos,
    getUbigeo,
    crearSalon
}



