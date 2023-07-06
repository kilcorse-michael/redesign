const express = require("express");
const mongoose = require("mongoose");
const routes = require("./functions/routes");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

// Connect to MongoDB/Atlas
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vkkgk.mongodb.net/portfolioResponses?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    const app = express();
    const port = 3000;
    app.use(express.json()); // new
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());
    app.use("/api", routes);

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
