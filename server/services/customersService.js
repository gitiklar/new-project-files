const path = require("path");
const fs = require("fs");
const xml2js = require("xml2js");
const parser = new xml2js.Parser({ explicitArray: false });

class CustomerService {
  constructor() {
    // this.fillCustomers();
    this.customers = [];
  }

  async fillCustomers() {
    try {
      const customers = await this.getAllCustomersFromFile();
      this.customers = customers;
    } catch (err) {
      console.log(err);
    }
  }

  getAllCustomersFromFile() {
    return new Promise((resolve, reject) => {
      const xml = fs.readFileSync(
        path.join(__dirname, "../data/customers.txt"),
        "utf8"
      );
      parser.parseString(xml, (error, data) => {
        if (error === null) {
          const customers = data?.customers?.customer;
          resolve(customers);
        } else {
          reject(error);
        }
      });
    });
  }

  async getCustomersByUserId(userId) {
    await this.fillCustomers();
    return this.customers.filter((customer) => customer.userId === userId);
  }
}

const customersService = new CustomerService();
module.exports = {
  customersService,
};
