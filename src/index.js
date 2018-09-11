import express from "express";
import constants from "./config/constants";
import "./config/database";
import middlewareConfig from "./config/middleware";

const app = express();
middlewareConfig(app);

app.listen(constants.PORT, err => {
  if (err) throw err;
  else {
    console.log(
      `Server running on port: ${constants.PORT} \n---\n Running on ${
        process.env.NODE_ENV
      } \n---\n Make something great!`
    );
  }
});
