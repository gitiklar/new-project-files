const express = require("express");
const router = express.Router();
const customersCtrl = require("../controllers/customers-ctrl");

router.get("/customers", customersCtrl.getCustomersOfUser);
router.post("/customer", customersCtrl.editCustomer);

module.exports = router;
