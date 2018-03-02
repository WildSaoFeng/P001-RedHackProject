const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        cypherkey: req.body.cypherkey,
        bless: req.body.bless,
        number: req.body.number,
        password: req.body.password
    });
    console.log(newUser);

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success:false,msg:'Failed to register user'});
        } else{
            res.json({success:true,msg:'User registered'});
        }
    });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const usertoken = req.body.token;

    User.getUserByToken(usertoken, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({success: false, msg: 'Incorrect Token! '});
        }
        // Bug Fixed 1 : user.toJSON() from user, because plain text is needed
        const token = jwt.sign(user.toJSON(), config.secret, {
            expiresIn: 604800 // 1 week
        });

        res.json({
            success: true,
            // Bug Fixed 3 : 'bearer ' from 'JWT ', later is legacy and 4.0 version updated
            token: 'bearer ' + token,
            user: {
                id: user._id,
                name: user.name,
                cypherkey: user.cypherkey,
                bless: user.bless,
                number: user.number,
                password: user.password
            }
        });
    });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}),(req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;