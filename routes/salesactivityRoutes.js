const express = require("express");
const router = express.Router();
const db = require("../models");

// All Sales Activity Data
router.get("/", (req, res) => {
    db.Sales_Activity.findAll().then((sales) => res.send(sales));
});

// Insert Year Sales Activity
router.post("/new", (req, res) => {
    db.Sales_Activity.create(req.body).then((sales) => res.send(sales));
});

// Insert Per Day Sales Activity
router.put("/day", (req, res) => {
    db.Sales_Activity.update(req.body, {
        where: {
            Sales_id: req.body.Sales_id,
        },
    }).then((sales) => res.send(sales));
});

module.exports = router;
