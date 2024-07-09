const PromotionVoyage = require('../models/promotion');

// Créer une nouvelle promotion
exports.createPromotion = async (req, res) => {
    try {
        const nouvellePromotion = new PromotionVoyage({
            userId: req.user.userId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            destination: req.body.destination,
            montantPromotion: req.body.montantPromotion,
            devise: req.body.devise,
        });
        await nouvellePromotion.save();
        console.log('Promotion :', nouvellePromotion);
        res.status(200).json({ message: 'Promotion created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtenir toutes les promotions pour un utilisateur spécifique
exports.getPromotions = async (req, res) => {
    try {
        const userId = req.user._id;
        const promotions = await PromotionVoyage.find({ userId: userId });

        res.status(200).json(promotions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer une promotion
exports.deletePromotion = async (req, res) => {
    try {
        const promotionId = req.params.id;
        await PromotionVoyage.deleteOne({ _id: promotionId });
        res.status(200).json({ message: 'Promotion deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mettre à jour une promotion
exports.updatePromotion = async (req, res) => {
    try {
        const promotion = await PromotionVoyage.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!promotion) {
            return res.status(404).send({ message: 'Promotion not found' });
        }
        res.status(200).send(promotion);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};
