const { customersService } = require("../services/customersService");

const getCustomersOfUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const customers = await customersService.getCustomersByUserId(userId);
    if (!customers || !customers.length) {
      return res
        .status(404)
        .json({ status: 404, type: "error", message: "customers not found" });
    }
    res.status(200).json({ status: 200, customers });
  } catch (err) {
    res.status(400).json({
      status: 400,
      type: "error",
      message: `Oops, an error occurred  : ${err.message}`,
    });
  }
};

const editCustomer = async (req, res) => {
  try {
    const customer = req.body;
    const newCustomers = await customersService.updateCustomer(customer);
    res.status(200).json({ status: 200, newCustomers });
  } catch (err) {
    res.status(400).json({
      status: 400,
      type: "error",
      message: `Oops, an error occurred  : ${err.message}`,
    });
  }
};

module.exports = {
  getCustomersOfUser,
  editCustomer,
};
