const mongoose = require('mongoose');


const PromotionSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    email: { type: String, required: true },
    destination : {type: String, required: true},
    montantPromotion: {type: String, required: true},
    devise: {type: String, required: true},
})
const Promotion = mongoose.model('PromotionSchema', PromotionSchema);

module.exports = Promotion;

