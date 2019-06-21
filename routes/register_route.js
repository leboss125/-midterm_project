"use strict";

const express = require('express');
const router  = express.Router();
const bcrypt= require('bcrypt');


// validate user input
function validateData(username, password1, password2, phonenumber){
    if(username !== '' && password1 === password2 && !isNaN(phonenumber) && password1 !== ''){
        return true;
    }
        return false;
}

module.exports = (knex) => {
  router.get("/", (req, res) => {
  console.log(req.params.id)
    res.render('register')
  });

  //post route for  new user
  router.post('/',(req,res)=>{
     const {username, password1, password2, phonenumber} = req.body;
    console.log(req.body)
    if(validateData(username,password1,password2,phonenumber)){
        const passwordHash = bcrypt.hashSync(password1, 10);
        knex('customers').insert([ 
            {
                username:username,
                password:passwordHash,
                phone_number:phonenumber
            }]).then(result => console.log(result)).finally(() => knex.destroy())
        res.redirect('/')
    }else{
        console.log('you are not login')
        res.redirect('/register')
    }
  });

  return router;
}
