const mongoose = require("mongoose");
const Charts = require("../models/model");
const Errorhandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");

exports.getAllData = catchAsyncErrors(async (req,res,next)=>{
    const charts = await Charts.find();
    res.status(200).json({
        success:true,
        charts
    })
})