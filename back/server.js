const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Create Express app
const app = express();
const port = 3000;

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB/Atlas
mongoose
  .connect(
    "mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Create a Mongoose schema for the form data
const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

// Create a Mongoose model based on the schema
const Contact = mongoose.model("Contact", contactSchema);

// Define a POST route for form submissions
app.post("/api/contact", (req, res) => {
  const { email, subject, message } = req.body;

  // Create a new Contact document using the form data
  const contact = new Contact({ email, subject, message });

  // Save the document to the database
  contact
    .save()
    .then(() => {
      res.status(201).json({ message: "Form submitted successfully" });
    })
    .catch((error) => {
      console.error("Error saving form data:", error);
      res
        .status(500)
        .json({ message: "An error occurred while submitting the form" });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
