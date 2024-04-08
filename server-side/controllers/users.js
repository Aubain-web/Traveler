const bcrypt = require('bcrypt');
const User = require('../models/Users');
const webtoken = require('jsonwebtoken');

exports.signIn = (req, res, next) =>{
    bcrypt.hash(req.body.password, 10)

    .then(hash => {
        const user = new User ({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            password : hash,
        });
        user.save()
        .then(() => res.status(200).json({message : 'User created successfully'}))
        .catch(error => res.status(400).json({error}));
    }).catch(error => res.status(500).json({error}));

};

exports.login = (req, res, next) => {
    User.findOne({email : req.body.email})

    .then(user => {
        if(user === null){
            res.status(401).json({message : 'pair identfiant/password incorrecte'});
        }else{
            bcrypt.compare(req.body.password, user.password)
            .then (valide => {
                if (!valide){
                    res.status(401).json({message : 'pair identifiant/password incorrecte'})
                }else{
                    res.status(200).json({
                        userId : user._id,
                        token : webtoken.sign(
                            {userId : user._id},
                            'RANDOM_TOKEN_TICKET',
                            {expiresIn : '30m'}
                        ),
                    });
                }
            })
        }
    })
    .catch(error => res.status(500).json({error}));
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

