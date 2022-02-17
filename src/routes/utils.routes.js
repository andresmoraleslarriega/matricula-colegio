const { Router } = require('express');
const { check  } = require('express-validator');
const { validarCampos } = require('../utils/valida-routes')
const { getDepartamentos, getProvincias, getDistritos , crearContactenos , getUbigeo , crearSalon } = require('../controllers/utilsController');

const router = Router();

router.get('/listar-departamentos', getDepartamentos)
router.post('/listar-provincias', getProvincias)
router.post('/listar-distritos', getDistritos)
router.post('/crear_contactenos' ,  [
    check('p_motivo' , 'El motivo es requerido').not().isEmpty(),
    check('p_nombres' , 'Los nombres son requeridos').not().isEmpty(),
    check('p_numero' , 'El numero es requerido').not().isEmpty(),
    check('p_correo' , 'El correo es requerido').not().isEmpty(),
    check('p_mensaje' , 'El mensaje es requerido').not().isEmpty(),
    validarCampos
], crearContactenos)

router.get('/getUbigeo' , getUbigeo )
router.post('/crear-salon' , crearSalon );


module.exports = router;