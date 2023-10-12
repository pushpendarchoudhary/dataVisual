const express = require("express");
const { getAllData } = require("../controllers/admincontroller");
const router = express.Router(); //the router object allows you to define routes and their associated handlers


router.route("/data").get(getAllData);


module.exports = router;