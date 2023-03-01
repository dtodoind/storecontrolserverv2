const express = require("express");
const router = express.Router();
const db = require("../models");
// prettier-ignore
// All Employee Data
router.get("/", (req, res) => {
    db.Employee_master.findAll({
        include: [{model: db.Deposito, as: 'deposito'}]
    }).then((order) => res.send(order));
});

// prettier-ignore
// Insert Employee
router.post("/new", (req, res) => {
    db.Employee_master.create(req.body).then((submittedEmployee) => res.send(submittedEmployee));
});

module.exports = router;
