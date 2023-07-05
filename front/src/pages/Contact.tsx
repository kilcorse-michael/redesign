import React, { useState } from "react";
import Header from "../components/Header";

interface ContactFormValues {
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const contactData: ContactFormValues = {
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      // Handle form submission logic, e.g., send data to the server or API
      await submitContactForm(contactData);

      // Reset the form and show success message
      event.currentTarget.reset();
      setSubmissionSuccess(true);
      setSubmissionError("");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionError("An error occurred while submitting the form.");
      setSubmissionSuccess(false);
    }
  };

  const submitContactForm = async (contactData: ContactFormValues) => {
    // Perform form submission logic here, such as sending data to the server or API
    // You can use libraries like Axios or fetch for making HTTP requests
    // Example:
    // const response = await axios.post('/api/contact', contactData);
    // Handle the response as needed
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
          <form onSubmit={handleSubmit} className="space-y-8">
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
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
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
