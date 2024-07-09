const bcrypt = require('bcrypt');
const User = require('../models/Users');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {jwtSecret} = require('../config');
FactureBilletAvion = require('../models/facture');

exports.signIn = (req, res, next) =>{
    console.log('Données POST reçues :', req.body);
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User ({
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                password : hash,
            });
            user.save()
                .then(() => res.status(200).json({ message: 'User created successfully' }))
                .catch(error => res.status(400).json({ error: error.message })); // Renvoyer l'erreur message plutôt que juste l'erreur
        })
        .catch(error => res.status(500).json({ error: error.message })); // Gérer les erreurs internes du serveur
};


exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Identifiant ou mot de passe incorrect' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ message: 'Identifiant ou mot de passe incorrect' });
        }

        const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
        // Stocker le token dans un cookie ou dans le stockage local du navigateur
        //  stocker le token dans un cookie
        res.cookie('jwt', token, { httpOnly: true });

        // Renvoyer le token et les informations de l'utilisateur dans la réponse
        res.json({ user, token });

    } catch (error) {
        console.error('Erreur lors de l\'authentification:', error);
        res.status(500).json({ message: 'Une erreur est survenue lors de l\'authentification' });
    }
};


exports.logout = (req, res) => {
    res.clearCookie('jwt');
    res.status(200).json({ message: 'Déconnexion réussie' });
};


exports.userFind = async (req, res, next) =>{
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user info:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.findFacture = async (req, res, next) =>{
    try {
        const factures = await FactureBilletAvion.find({ userId: req.user._id }).populate('userId');
        res.status(200).json(factures);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

