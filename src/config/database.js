import mongoose from "mongoose";
import constants from "./constants";

//Remove the warning with promises
mongoose.Promise = global.Promise;

//Connect the db with the url provided
try {
  mongoose.connect(constants.MONGO_URL);
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL);
}
mongoose.connection
  .once("open", () => console.log("MongoDB Running"))
  .on("error", e => {
    console.log("mongo not running")
    throw e;
  });
