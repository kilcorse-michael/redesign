const express = require("express");
const Contact = require("./models/Contact");
const router = express.Router();

// Define a POST route for form submissions
router.post("/contact", async (req, res) => {
  const {email, subject, message} = req.body;
  console.log("Server test");

  // Create a new Contact document using the form data
  const contact = new Contact({email, subject, message});

  // Save the document to the database
  await contact
      .save()
      .then(() => {
        res.status(200).json({message: "Form submitted successfully"});
        console.log("success");
      })
      .catch((error) => {
        console.error("Error saving form data:", error);
        res
            .status(500)
            .json({message: "An error occurred while submitting the form"});
      });
});

module.exports = router;
