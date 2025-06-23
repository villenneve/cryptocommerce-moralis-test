const express = require("express");
const router = express.Router();
const { getWalletBalance } = require("../controllers/walletController");

router.get("/wallet-balance/:address", getWalletBalance);

module.exports = router;
