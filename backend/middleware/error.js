const Errorhandler = require("../utils/errorhandler");
module.exports = (err,req,res,next)=>{

    err.statusCode = err.statusCode || 500; 
    err.message = err.message || "internal server error";
    // wrong mongodb id error
    if(err.name === "castError"){
        const message = "resource not found Invalid:"+ err.path;
        err = new Errorhandler(message,400);
    }
    // mongoose duplicate key error
    if(err.code===11000){
        const message = "Duplicate "+Object.keys(err.keyValue)+" Entered";
        err = new Errorhandler(message,400);
    }

    // wrong JWT error 
    if(err.name === "JasonWebTokenError"){
        const message = "JSON Web Token is invalid, Try again " ;
        err = new Errorhandler(message, 400);
    }
    // JWT Expire error
    if(err.name === "TokenExpiredError"){
        const message = "JSON Web Token is Expired, Try again " ;
        err = new Errorhandler(message, 400);
    }
    res.status(err.statusCode).json({
        success:false,
        message:err.message,
    })
}