'use client';

import React, { useState } from 'react';
import handleFormSubmission from '@app/actionForm';
import "./styleCForm.scss"

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target as HTMLFormElement);
      await handleFormSubmission(formData); // assuming this returns a promise
      setIsSubmitted(true);
      setError(null); // clear any previous error
        } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'There was an error with your submission. Please try again.');
      } else {
        setError('There was an error with your submission. Please try again.');
      }
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom:</label>
          <input type="text" id="nom" name="nom" required />
        </div>
        <div>
          <label htmlFor="mail">Mail:</label>
          <input type="mail" id="mail" name="mail" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

      {isSubmitted && <p className="success-message">Your request has been sent successfully!</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ContactPage;
