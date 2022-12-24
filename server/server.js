const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "./.env") });

const userRouter = require("./routes/user-router");
const customersRouter = require("./routes/customers-router");

const checkAccessToken = require("./middlewares/checkAccessToken");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: ["http://localhost:3000"], useCredentials: true }));
app.use(checkAccessToken);

app.use("/api", userRouter);
app.use("/api", customersRouter);

app.listen(PORT, () => {
  console.log("Server is listening on Port:", PORT);
});
