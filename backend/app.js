const express = require("express"); //this line imports the express module and assigns it to the 'express' variable
const app= express();
const cookieParser = require("cookie-parser"); 
const bodyParser = require("body-parser");
const path = require("path");

const errorMiddleware = require("./middleware/error");


app.use(express.json({
   limit:'50mb'
})); 
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

const admin = require("./routes/adminRoutes.js"); 


app.use("/api/v1",admin);

app.use(errorMiddleware); 

module.exports = app;