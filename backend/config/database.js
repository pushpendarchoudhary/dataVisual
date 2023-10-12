const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path: "backend/config/config.env"});
const connectDatabase = ()=> {
    mongoose.connect(process.env.ATLAS_URL, {useNewUrlParser:true,useUnifiedTopology:true}).then((data) => {
        console.log('MongoDb connected with server ' + data.connection.host);
    
    });
    

}
module.exports = connectDatabase;