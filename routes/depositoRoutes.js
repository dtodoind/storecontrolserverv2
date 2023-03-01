const express = require("express");
const router = express.Router();
const db = require("../models");

// All Deposito Data
router.get("/", (req, res) => {
    db.Deposito.findAll().then((deposito) => res.send(deposito));
});

// Insert Deposito
router.post("/new", (req, res) => {
    db.Deposito.create(req.body).then((deposito) => res.send(deposito));
});

// Add Employee List
router.put("/employee", (req, res) => {
    db.Deposito.update(
        {
            Employee_list: req.body.Employee_list,
        },
        {
            where: {
                Deposito_id: req.body.Deposito_id,
            },
        }
    ).then(() => res.send("success"));
});

// Remove specific Deposito
router.delete("/delete/:id", (req, res) => {
    db.Deposito.destroy({
        where: {
            Deposito_id: req.params.id,
        },
    }).then(() => res.send("success"));
});

module.exports = router;
