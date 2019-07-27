const express = requoire("express");

const mongoose = require("mongoose");
const routes = require("./routes/api");
const app = express();
const PORT = process.env.Port || 3001;


// define middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// static assets
if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

//add routes, both API and view 
app.use(routes);

// connect to the MONGO DB
mongoose.connect(process.env.MONGOD.URI || "mongodb://localhost/reactgooglebooks");

// start the API server
app.listen(PoORT, function(){
    console.log(`API server now listening on PORT ${PORT}!`);
});