const { Router } = require('express');
const { check  } = require('express-validator');
const { busquedaFormulario , crearFormulario } = require('../controllers/ForularioController'); 
const { validarCampos } = require('../utils/valida-routes')

const router = Router();

router.post('/busqueda_formulario' , [
    check('p_dni_alumno' , 'El Dni es requerido').not().isEmpty(),
    check('p_tipo_dni_alumno' , 'El tipo de dni alumno es requerido').not().isEmpty(),
    check('p_dni_apoderado' , 'El dni del apoderado es requerido').not().isEmpty(),
    check('p_tipo_dni_apoderado' , 'El tipo de dni apoderado es requerido').not().isEmpty(),
    validarCampos
] ,busquedaFormulario );

router.post('/registrar_formulario' , crearFormulario )



module.exports = router;

