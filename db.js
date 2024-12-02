const mongoose = require("mongoose");
const dbURL = "mongodb://localhost:27017/election"


mongoose.connect(dbURL);


const db = mongoose.connection;


//events
db.on('connected', () => {
    console.log("MongoDB connection successful");
});

db.on('error', (err) => {
    console.log("MongoDB connection error", err);
});

db.on('disconnected', () => {
    console.log("MongoDB connection disconnected")
});

module.exports = db;