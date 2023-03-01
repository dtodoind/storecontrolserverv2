const express = require("express");
const router = express.Router();
const db = require("../models");

// All Category Data
router.get("/", (req, res) => {
    db.Categories.findAll().then((category) => res.send(category));
});

// Insert Category
router.post("/new", (req, res) => {
    db.Categories.create(req.body).then((submittedProduct) =>
        res.send(submittedProduct)
    );
});

// Delete Category
router.delete("/delete/:id", (req, res) => {
    db.Categories.destroy({
        where: {
            Category_id: req.params.id,
        },
    }).then(() => res.send("success"));
});

module.exports = router;
