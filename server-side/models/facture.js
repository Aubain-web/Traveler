const mongoose = require('mongoose');

const FactureSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    //userId : {type: String, required : true},
    email: { type: String, required: true, unique: true },
    compagnieAerienne: { type: String, required: true },
    aeroportDepart: { type: String, required: true },
    aeroportArrivee: { type: String, required: true },
    dateDepart: { type: Date, required: true },
    heureDepart: { type: String, required: true },
    dateArrivee: { type: Date },
    heureArrivee: { type: String },
    numeroSiege: { type: String },
    classe: {
        type: String,
        enum: ['Economique', 'Business', 'Première'],
        default: 'Economique'
    },
    montantPaye: { type: Number, required: true },
    devise: { type: String, default: 'USD' },
    taxes: { type: Number, default: 0 },
    fraisSupplementaires: { type: Number, default: 0 },
    instructionsVoyage: { type: String },
    dateCreation: { type: Date, default: Date.now },
    //userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    // informations pour le vol retour
    compagnieAerienneRetour: { type: String },
    aeroportDepartRetour: { type: String },
    aeroportArriveeRetour: { type: String },
    dateDepartRetour: { type: Date },
    heureDepartRetour: { type: String },
    dateArriveeRetour: { type: Date },
    heureArriveeRetour: { type: String },

    // Durée des vols
    dureeAller: { type: String },
    dureeRetour: { type: String }
});
const FactureBilletAvion = mongoose.model('FactureBilletAvion', FactureSchema);

module.exports = FactureBilletAvion;
