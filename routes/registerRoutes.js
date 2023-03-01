const express = require("express");
const router = express.Router();
const db = require("../models");

// All users register
router.get("/", (req, res) => {
    db.Register.findAll().then((users) => res.send(users));
});

// Insert new client register
router.post("/new", (req, res) => {
    db.Register.create(req.body).then((user) => res.send(user));
});

// Delete client register
router.delete("/delete/:id", (req, res) => {
    db.Register.destroy({
        where: {
          id: req.params.id,
        },
    }).then(() => res.send("success"));
});


// edit client
router.put("/edit", (req, res) => {
   
        db.Register.update(req.body, {
            where: {
                id: req.body.id,
            },
        }).then(() => res.send("successfully Updated"));

});


module.exports = router;
 