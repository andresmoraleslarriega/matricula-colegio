const { Router } = require('express');
const { check  } = require('express-validator');
const { validarCampos } = require('../utils/valida-routes')

const { login } = require('../controllers/authController');

const router = Router();

router.post('/login' , [
    check('email' , 'El email es requerido').not().isEmpty(),
    check('password' , 'La contraseña es requerida').not().isEmpty(),
    validarCampos
] , login )

module.exports = router;