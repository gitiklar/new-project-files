const path = require("path");
const fs = require("fs");
const xml2js = require("xml2js");
const parser = new xml2js.Parser({ explicitArray: false });
const js2xmlparser = require("js2xmlparser");

class CustomerService {
  constructor() {
    // this.fillCustomers();
    this.customersPath = "../data/customers.txt";
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
        path.join(__dirname, this.customersPath),
        "utf8"
      );
      parser.parseString(xml, (error, data) => {
        if (error === null) {
          const customers = data?.customer?.customer;
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

  async updateCustomer(customer) {
    await this.fillCustomers();
    const indexToUpdate = this.customers.findIndex(
      (item) => item.id === customer.id
    );
    this.customers[indexToUpdate] = {
      ...this.customers[indexToUpdate],
      ...customer,
    };
    const xml = js2xmlparser.parse("customer", this.customers);
    fs.writeFile(path.join(__dirname, this.customersPath), xml, (err) => {
      if (err) throw err;
      console.log(`Updated XML is written to a new file.`);
    });
    return await this.getCustomersByUserId(customer.id);
  }
}

const customersService = new CustomerService();
module.exports = {
  customersService,
};
