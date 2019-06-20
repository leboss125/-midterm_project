"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/:id/order", (req, res) => {
  console.log(req.params.id)
    res.render('register')
  });

  return router;
}
