const mongoose = require('mongoose');

const FactureSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
<<<<<<< HEAD
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    email: { type: String, required: true },
    //email: {type: mongoose.Schema.Types.String, ref : 'User', required: true},
=======
    //userId : {type: String, required : true},
    email: { type: String, required: true, unique: true },
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca
    compagnieAerienne: { type: String, required: true },
    aeroportDepart: { type: String, required: true },
    aeroportArrivee: { type: String, required: true },
    dateDepart: { type: Date, required: true },
    heureDepart: { type: String, required: true },
    dateArrivee: { type: Date },
    heureArrivee: { type: String },
    numeroSiege: { type: String },
<<<<<<< HEAD
    adults: { type: Number, default: 0 },
    children: { type: Number, default: 0 },
    classe: {type: String, default: 'Economy'},
=======
    classe: {
        type: String,
        enum: ['Economique', 'Business', 'Première'],
        default: 'Economique'
    },
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca
    montantPaye: { type: Number, required: true },
    devise: { type: String, default: 'USD' },
    taxes: { type: Number, default: 0 },
    fraisSupplementaires: { type: Number, default: 0 },
    instructionsVoyage: { type: String },
    dateCreation: { type: Date, default: Date.now },
<<<<<<< HEAD

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
=======
    //userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca

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
