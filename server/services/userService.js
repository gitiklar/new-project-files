const path = require("path");
const fs = require("fs");
const xml2js = require("xml2js");
const parser = new xml2js.Parser({ explicitArray: false });

class UserService {
  constructor() {
    // this.fillUsers();
    this.users = [];
    this.usersPath = "../data/users.txt";
  }

  async fillUsers() {
    try {
      const users = await this.getUsersFromFile();
      this.users = users;
    } catch (err) {
      console.log(err);
    }
  }

  getUsersFromFile() {
    return new Promise((resolve, reject) => {
      const xml = fs.readFileSync(path.join(__dirname, this.usersPath), "utf8");
      parser.parseString(xml, (error, data) => {
        if (error === null) {
          const users = data?.user?.user;
          resolve(users);
        } else {
          reject(error);
        }
      });
    });
  }

  async findUserByEmail(email) {
    await this.fillUsers();
    return this.users.find((user) => user.email === email);
  }

  async findUserByUserId(userId) {
    await this.fillUsers();
    return this.users.find((user) => user.id === userId);
  }
}

const userService = new UserService();
module.exports = {
  userService,
};
