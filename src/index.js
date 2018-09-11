import express from 'express';
import constants from './config/constants'

const app = express();

app.listen(constants.PORT, err => {
  if (err)
    throw err;
  else {
    console.log(`Server running on port: ${constants.PORT} \n---\n Running on ${process.env.NODE_ENV} \n---\n Make something great!`)
  }  

});