const mongoose = require('mongoose');

const FactureSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    compagnieAerienne: { type: String, required: true },
    numeroVol: { type: String, required: true },
    aeroportDepart: { type: String, required: true },
    aeroportArrivee: { type: String, required: true },
    dateDepart: { type: Date, required: true },
    heureDepart: { type: String, required: true },
    dateArrivee: { type: Date },
    heureArrivee: { type: String },
    numeroSiege: { type: String },
    classe: { type: String },
    montantPaye: { type: Number, required: true },
    devise: { type: String, default: 'USD' },
    taxes: { type: Number, default: 0 },
    fraisSupplementaires: { type: Number, default: 0 },
    instructionsVoyage: { type: String },
    dateCreation: { type: Date, default: Date.now }
});

const FactureBilletAvion = mongoose.model('FactureBilletAvion', FactureSchema);

module.exports = FactureBilletAvion;
