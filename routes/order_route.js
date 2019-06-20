  "use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:id", (req, res) => {
    res.render("order");
  });

  router.post("/:id", (req, res) => {
    res.redirect("/");
  });


  return router;
}
