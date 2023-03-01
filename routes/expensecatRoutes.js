const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
    db.Expense_categories.findAll().then((cat) => res.send(cat));
});

router.post("/new", (req, res) => {
    db.Expense_categories.create({ nombre: req.body.nombre }).then(
        (submittedExpensecat) => res.send(submittedExpensecat)
    );
});

router.put("/edit", (req, res) => {
    db.Expense_master.update(req.body, {
        where: {
            ExpenseId: req.body.ExpenseId,
        },
    }).then(() => res.send("successfully Updated"));
});

router.delete("/delete/:id", (req, res) => {
    db.Expense_master.destroy({
        where: {
            ExpenseId: req.params.id,
        },
    }).then(() => res.send("success"));
});

module.exports = router;
