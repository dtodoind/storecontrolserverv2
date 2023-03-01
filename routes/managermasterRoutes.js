const express = require("express");
const router = express.Router();
const db = require("../models");

// All Deposito Data
router.get("/", (req, res) => {
    db.Manager_master.findAll().then((manager) => res.send(manager));
});

// Insert Deposito
router.post("/new", (req, res) => {
    db.Manager_master.create(req.body).then((manager) => res.send(manager));
});

module.exports = router;
