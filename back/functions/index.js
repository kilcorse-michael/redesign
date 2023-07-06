/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
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
        },
    )
    .then(() => {
      console.log("Connected to MongoDB");
      const app = express();
      const port = process.env.PORT || 3000;
      app.use(express.json()); // new
      app.use(bodyParser.urlencoded({extended: false}));
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
