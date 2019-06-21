"use strict";

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


// validate user input
function validateData(username, password1, password2, phonenumber) {
  if (username !== '' && password1 === password2 && !isNaN(phonenumber) && password1 !== '') {
    return true;
  }
  return false;
}

module.exports = (knex) => {
  router.get("/", (req, res) => {
    res.render('register')
  });

  //post route for  new user
  router.post('/', (req, res) => {
    const {
      username,
      password1,
      password2,
      phonenumber
    } = req.body;

    if (validateData(username, password1, password2, phonenumber)) {
      const passwordHash = bcrypt.hashSync(password1, 10);
      knex.select("username")
        .from("customers")
        .where("username", username)
        .then(userNameList => {
          if (userNameList.length === 0) {
            return knex('customers')
              .insert([{
                username:username,
                password:passwordHash,
                phone_number:phonenumber
              }])
              .then((newUserId) => {
                res.send('account created');
              });
          }
          res.send('username all ready exist');
          return;
        });

    }
  });
  return router;
}
