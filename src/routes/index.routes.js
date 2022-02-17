const { Router } = require('express');
const { getDepartamentos, getProvincias, getDistritos , crearContactenos , getUbigeo , crearSalon } = require('../controllers/utilsController');

const router = Router();

router.use('/auth', require('./auth.routes'));
router.use('/colegio' , require('./colegio.routes'));
router.use('/formulario' , require('./formulario.routes'));
router.use('/solicitud' , require('./solicitudes.routes'));
router.use('/utils' , require('./utils.routes'));

module.exports = router;
