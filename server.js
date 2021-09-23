const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Define Routes
app.use("/api/mbc/", require("./routes/api/mbc"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folders with express
  app.use(express.static("client/build"));
  // means if any route besides the above api specified routes then..
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//look for environment variable to get the port || port 5000 locally
// const PORT = process.env.PORT || 5000;
// const HOST_ADDRESS = process.env.HOST_ADDRESS || "127.0.0.1";

module.exports = app;
