const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const bodyParser = require("body-parser");
const cors = require('cors')

// Create Express app
const app = express();
const port = 3000;

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);

// Connect to MongoDB/Atlas
mongoose
  .connect(
    "mongodb+srv://dbUserPrime:0qgmwilMF9azhwCm@cluster0.vkkgk.mongodb.net/portfolioResponses?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    const app = express()
		app.use(express.json()) // new
		app.use("/api", routes)

    // Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });





