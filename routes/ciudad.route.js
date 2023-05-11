const express = require('express');
const ciudadCtrl = require('../controllers/ciudad.controller');
const router = express.Router();


router.get('/', ciudadCtrl.getCiudades);
router.get('/:id', ciudadCtrl.getCiudad);
router.put('/:id', ciudadCtrl.updateCiudad);
router.delete('/:id', ciudadCtrl.deleteCiudad);

module.exports = router;