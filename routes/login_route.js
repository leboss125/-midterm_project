"use strict";

const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');

module.exports = (knex) => {

  router.get("/", (req, res) => {
    res.render('index')
  });

  router.post('/',(req,res) =>{
    const {username, password} = req.body;
    knex("customers").select('*').where('username',username)
    .then(result =>{
      // array from database 
      const dbResultArray = result;
      // getting the user
      const user = result[0];
      // if user exost and password match
      if(dbResultArray.length !== 0  && bcrypt.compareSync(password, user.password)){
        const {id, phone_number} = user;
        req.session.id = id;
        req.session.id = phone_number;
        res.redirect('/restaurants');
      }else{
        return res.send('please try again');
      }
    })
     .finally(() => knex.destroy());
  })
  return router;
}
