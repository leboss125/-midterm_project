"use strict";

const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');

module.exports = (knex) => {

  router.get("/", (req, res) => {
    if(req.session.name && req.session.id && req.session.phone_number){
      return res.redirect('/restaurants')
    }else{
      res.render('index')
    }
  });
  router.post('/',(req,res) =>{
    if(req.session.name && req.session.id && req.session.phone_number){
      return res.send('invalid request')
    }
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
        req.session.phone_number = phone_number;
        req.session.name = username;
        res.redirect('/restaurants');
      }else{
        return res.send('please try again');
      }
    })
    //  .finally(() => knex.destroy());
  })
  return router;
}
