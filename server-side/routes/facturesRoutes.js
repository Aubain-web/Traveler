const express = require('express');
const router = express.Router();
const facture = require('../models/facture');
const auth = require('../middleware/auth');
const factureCtrl = require('../controllers/facture')


router.post('/create',auth,factureCtrl.createFacture );
router.get('/getFacture', auth, factureCtrl.getFactureByUser);