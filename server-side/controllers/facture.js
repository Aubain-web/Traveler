const FactureBillet = require('../models/facture');


exports.createFacture = async (req, res) => {
    try {
        const nouvelleFacture = new FactureBillet({
            userId: req.user._id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            compagnieAerienne: req.body.compagnieAerienne,
            aeroportDepart: req.body.aeroportDepart,
            aeroportArrivee: req.body.aeroportArrivee,
            dateDepart: req.body.dateDepart,
            heureDepart: req.body.heureDepart,
            dateArrivee: req.body.dateArrivee,
            heureArrivee: req.body.heureArrivee,
            numeroSiege: req.body.numeroSiege,
            classe: req.body.classe,
            montantPaye: req.body.montantPaye,
            devise: req.body.devise,
            taxes: req.body.taxes,
            fraisSupplementaires: req.body.fraisSupplementaires,
            instructionsVoyage: req.body.instructionsVoyage,
            compagnieAerienneRetour: req.body.compagnieAerienneRetour,
            aeroportDepartRetour: req.body.aeroportDepartRetour,
            aeroportArriveeRetour: req.body.aeroportArriveeRetour,
            dateDepartRetour: req.body.dateDepartRetour,
            heureDepartRetour: req.body.heureDepartRetour,
            dateArriveeRetour: req.body.dateArriveeRetour,
            heureArriveeRetour: req.body.heureArriveeRetour,
            dureeAller: req.body.dureeAller,
            dureeRetour: req.body.dureeRetour,
        });
        await nouvelleFacture.save();
        res.status(200).json({ message: 'Facture created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getFactureByUser = async (req, res) =>{
    try {
        const userId = req.user._id;
        const factures = await FactureBillet.find({ user: userId });

        res.status(200).json(factures);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}