
const app = require("./app");
const connectDatabase = require("./config/database"); 

process.on("uncaughtException",(err)=>{
    console.log("error : "+ err.message);
    console.log("shutting down the server due to uncaught exception");
    process.exit(1);
});

connectDatabase();

app.on('error',(err)=>{
    console.error('unhandled error:',err);
});

const server = app.listen(process.env.PORT, () => {
        console.log('server is working on http://localhost:' + process.env.PORT); // 'process.env.PORT' is used dynamically set the port number for the server. The 'app.listen()' method starts the server and listents on the specified port.once the server is up and running the provided callback function is executed which in this case logs a message to the console indicating that the server is working and specifies the URL where it can be accessed
}); 

process.on("unhandledRejection",(err)=>{
    console.log("error : " + err.message);
    console.log("shutting down the server due to unhandled Promise rejection");
    server.close(()=>{
        process.exit(1)
    });
});