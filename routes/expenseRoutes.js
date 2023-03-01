const express = require("express");
const router = express.Router();
const db = require("../models");


router.get("/", (req, res)=>{
    db.Expense_master.findAll().then((expense)=>res.send(expense))
})
router.post("/new", (req, res)=>{
    db.Expense_master.create(req.body).then((submittedExpense)=> res.send(submittedExpense))
})
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