const express = require('express');
const router = express.Router();
const facture = require('../models/facture');
const auth = require('../middleware/authmiddleware')
const factureCtrl = require('../controllers/facture')

//auth.authenticate,
router.post('/create',auth.authenticate,factureCtrl.createFacture );
router.get('/getFacture',auth.authenticate, factureCtrl.getFactureByUser);

module.exports = router;