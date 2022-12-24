const express = require("express");
const router = express.Router();
const customersCtrl = require("../controllers/customers-ctrl");

router.get("/customers", customersCtrl.getCustomersOfUser);

module.exports = router;
