import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";

interface ContactFormValues {
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const contactData: ContactFormValues = formData;

    try {
      // Handle form submission logic, e.g., send data to the server or API
      console.log(contactData);
      await submitContactForm(contactData);

      // Reset the form and show success message
      setSubmissionSuccess(true);
      setSubmissionError("");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionError("An error occurred while submitting the form.");
      setSubmissionSuccess(false);
    }
  };

  const submitContactForm = async (contactData: ContactFormValues) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/contact",
        contactData
      );

      if (response.status === 200) {
        const data = response.data;
        console.log(data.message);
      } else {
        // Error submitting the form
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error;
    }
  };

  const handleChange: React.FormEventHandler<HTMLFormElement> = (event) => {
    const { name, value } = event.target as HTMLInputElement;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <Header />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl text-center text-gray-900 dark:text-white">
            Say Hello!
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Want to start a conversation? Request my resume? Reach out! I'm
            currently available for hire and would love to hear about any
            opportunity or project that I would be a fit for. Thank you!
          </p>
          <form
            onSubmit={handleSubmit}
            onChange={handleChange}
            className="space-y-8"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="youremail@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#ff0178] border-black border-b-2 p-2 text-4xl w-96 rounded-md text-white"
            >
              SEND
            </button>
          </form>
          {/* Show success message */}
          {submissionSuccess && (
            <p className="text-green-500">Form submitted successfully!</p>
          )}
          {/* Show submission error */}
          {submissionError && <p className="text-red-500">{submissionError}</p>}
        </div>
      </section>
    </>
  );
};

export default Contact;
