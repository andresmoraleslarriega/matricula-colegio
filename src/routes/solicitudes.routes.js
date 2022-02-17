
const { Router } = require('express');

const {getSolicitudesPendientes, aprobarSolicitudes , rechazarSolicitudes } = require('../controllers/SolicitudesController')
const router = Router();

router.get('/listar-solicitudes-pendientes' , getSolicitudesPendientes)
router.post('/aprobar-solicitud'  , aprobarSolicitudes )
router.post('/rechazar-solicitud' , rechazarSolicitudes )
module.exports = router;
