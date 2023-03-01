const express = require("express");
const router = express.Router();
const db = require("../models");

// All Product Data
router.get("/", (req, res) => {
    db.Products_data.findAll({
        include: [{ model: db.Deposito, as: "deposito" }],
    }).then((product) => res.send(product));
});

// Insert Product
router.post("/new", (req, res) => {
    db.Products_data.create(req.body).then((submittedProduct) =>
        res.send(submittedProduct)
    );
});

// Update Product
router.put("/edit", (req, res) => {
    db.Products_data.update(req.body, {
        where: {
            Product_id: req.body.Product_id,
        },
    }).then(() => res.send("successfully Updated"));
});

// Update Product Quantity
router.put("/quantity", (req, res) => {
    db.Products_data.update(
        {
            Stock: req.body.Stock,
        },
        {
            where: {
                Product_id: req.body.Product_id,
            },
        }
    ).then(() => res.send("success"));
});

// Update Product Images
router.put("/images", (req, res) => {
    db.Products_data.update(
        {
            Image: req.body.Image,
        },
        {
            where: {
                Product_id: req.body.Product_id,
            },
        }
    ).then(() => res.send("success"));
});

// Delete Product
router.delete("/delete/:id", (req, res) => {
    db.Products_data.destroy({
        where: {
            Product_id: req.params.id,
        },
    }).then(() => res.send("success"));
});

// Update Product
// router.put("/edit", (req, res) => {
//     db.Product.update(req.body, {
//         where: {
//             Product_id: req.body.Product_id,
//         },
//     }).then(() => res.send("success"));
// });

module.exports = router;
