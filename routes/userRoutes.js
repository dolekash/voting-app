const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
    try {
        const resposne = await User.create(req.body);
        res.status(200).json(resposne);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const resposne = await User.find({});
        res.status(200).json(resposne);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;