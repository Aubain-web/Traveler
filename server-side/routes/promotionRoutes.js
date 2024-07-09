const auth = require("../middleware/authmiddleware");
const promotioCTRL = require("../controllers/promotion");
const express = require('express');
const router = express.Router();

router.post('/create',auth.authenticate,promotioCTRL.createPromotion );
router.get('/getFacture',auth.authenticate, promotioCTRL.getPromotions);
router.put('/:id',auth.authenticate, promotioCTRL.deletePromotion);
router.delete('/:id',auth.authenticate, promotioCTRL.updatePromotion);

module.exports = router;