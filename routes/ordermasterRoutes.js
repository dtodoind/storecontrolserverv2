const express = require("express");
const router = express.Router();
const db = require("../models");
// prettier-ignore
// All Order Data
router.get("/", (req, res) => {
    db.Order_master.findAll({
        include: [{model: db.Order_product, as: 'order_product'}]
    }).then((order) => res.send(order));
});

// prettier-ignore
// Insert order master
router.post("/new", (req, res) => {
    db.Order_master.create(req.body).then((submittedOrder) => res.send(submittedOrder));
});

// Update Order Master
router.put("/price", (req, res) => {
    db.Order_master.update(
        {
            Total_price: req.body.Total_price,
        },
        {
            where: {
                Order_id: req.body.Order_id,
            },
        }
    ).then(() => res.send("success"));
});
// Update Order Master
router.put("/update", (req, res) => {
    console.log(req.body);
    db.Order_master.update(
        req.body,
        // {
        //     Total_price: req.body.Total_price,
        // },
        {
            where: {
                Order_id: req.body.Order_id,
            },
        }
    ).then((order) => res.send(order));
});

// Update Order Status
router.put("/status", (req, res) => {
    db.Order_master.update(
        {
            Order_status: req.body.Order_status,
        },
        {
            where: {
                Order_id: req.body.Order_id,
            },
        }
    ).then(() => res.send("success"));
});

// Delete Order Master
router.delete("/delete/:id", (req, res) => {
    db.Order_master.destroy({
        where: {
            Order_id: req.params.id,
        },
    }).then(() => res.send("success"));
});

module.exports = router;
