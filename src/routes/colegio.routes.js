const { Router } = require('express');
const { check  } = require('express-validator');
const { validarCampos } = require('../utils/valida-routes')

const {buscarColegioVacantes , listarColegios} = require('../controllers/colegioController')
const router = Router();

router.post('/busqueda_colegio_vacantes' , [
    check('p_distritoColegio' , 'El distrito es requerido').not().isEmpty(),
    check('p_provinciaColegio' , 'La provincia es requerida').not().isEmpty(),
    check('p_departamentoColegio' , 'El departamento es requerido').not().isEmpty(),
    check('p_nivel' , 'El nivel es requerido').not().isEmpty(),
    check('p_grado' , 'El grado es requerido').not().isEmpty(),
    validarCampos
], buscarColegioVacantes);

router.get('/listar-colegios' , listarColegios )


module.exports = router;