const express = require('express');
const router = express.Router();
const facture = require('../models/facture');
const auth = require('../middleware/authmiddleware')
const factureCtrl = require('../controllers/facture')

//auth.authenticate,
router.post('/create',factureCtrl.createFacture );
router.get('/getFacture', factureCtrl.getFactureByUser);

module.exports = router;