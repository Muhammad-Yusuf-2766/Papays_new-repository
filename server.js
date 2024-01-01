const dotenv = require("dotenv");
dotenv.config();

const http = require ('http');
const mongoose = require ("mongoose")

const connectionString = process.env.MONGO_URL;



mongoose.connect(
    connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, goose) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection success");
        // console.log(goose);
        const app = require("./app")
        const server = http.createServer(app);
        let PORT = process.env.PORT || 5001;
        server.listen(PORT, function () {
         console.log(`The server is running succesfully on PORT ${PORT}, http://localhost:${PORT}`);
    })  
    }
});