const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');
users.use(cors());

// required parameter for hashing the data
process.env.SECRET_KEY = 'secret';

users.post('/register', (req,res) => {
  const today = new Date();
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.pasword,
    created: today
  }

  User.findOne({
    email: req.body.email
  })
  .then(user => {
    if(!user) {
      bcrypt.hash(req.body.password, 10, (error,hash) =>  {
        userData.password = hash
        User.create(userData)
        .then(user => {
          res.json({status: user.email + " Registered"})
        })
        .catch(err => {
          res.send('error: ' + err)
        })
      })
    } else {
      res.json({error: 'User already exists'})
    }
  })
  .catch(err => {
    res.send('error: ' + err);
  });
});

module.exports = users;
