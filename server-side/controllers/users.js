const bcrypt = require('bcrypt');
const User = require('../models/Users');
const webtoken = require('jsonwebtoken');

exports.signIn = (req, res, next) =>{
    bcrypt.hash(req.body.password, 10)

    .then(hash => {
        const user = new User ({
            fisrtName : req.body.fisrtName,
            lastName : req.body.lastName,
            email : req.body.email,
            password : hash,
        });
        user.save()
        .then(() => res.status(200).json({message : 'utilisateur créé'}))
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
                if (!valid){
                    res.status(401).json({message : 'pair identifiant/password incorrecte'})
                }else{
                    res.status(200).json({
                        userId : user._id,
                        token : webtoken.sign(
                            {userId : user._id},
                            'RANDOM_TOKEN_TICKET',
                            {expiresIn : '24h'}
                        ),
                    });
                }
            })
        }
    })
    .catch(error => res.status(500).json({error}));
};

