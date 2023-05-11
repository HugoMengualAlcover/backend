const express = require('express');
const continenteCtrl = require('../controllers/continente.controller');
const router = express.Router();


router.get('/', continenteCtrl.getContinentes);
router.get('/:id', continenteCtrl.getContiente);
router.put('/:id', continenteCtrl.updateContinente);
router.delete('/:id', continenteCtrl.deleteContinente);

module.exports = router;