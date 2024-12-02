const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");

const bodyParse = require("body-parser");
app.use(bodyParse.json());

app.get("/", (req, res) => {
  res.send("Life is 42");
});

//Import the router files
const userRoutes = require("./routes/userRoutes");

//use the routes
app.use("/users", userRoutes);


app.listen(port, () => {
  console.log(`server running on ${port}`);
});
