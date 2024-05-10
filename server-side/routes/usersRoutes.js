const express = require('express');
const User = require("../models/Users");
const router = express.Router();
const userCtrl = require('../controllers/users')


router.post('/signIn', userCtrl.signIn);
router.post('/login', userCtrl.login);
router.get('/:userId', userCtrl.userFind);
router.get('/findFactures', userCtrl.findFacture)

/*router.post('/loginPg', async(req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        if (password !== user.password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});*/

/*router.post('/signIn', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const user = await User.create({ firstName, lastName, email, password });
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});*/

module.exports = router;