const dotenv = require("dotenv");
const express = require("express");

class AppController {
  constructor() {
    this.express = express();

    this.dotenv();
    this.middlewares();
    this.routes();
  }

  dotenv() {
    dotenv.config({
      path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
    });
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new AppController().express;
