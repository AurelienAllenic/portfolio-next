'use client';

import React, { useState } from 'react';
import handleFormSubmission from '@app/actionForm';
import './styleCForm.scss';

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target as HTMLFormElement);
      await handleFormSubmission(formData);
      setIsSubmitted(true);
      setError(null); // Reset any previous errors
    } catch (err) {
      handleFormError(err);
    }
  };

  // Handle error logic
  const handleFormError = (err: unknown) => {
    if (err instanceof Error) {
      setError(err.message || 'There was an error with your submission. Please try again.');
    } else {
      setError('There was an error with your submission. Please try again.');
    }
    setIsSubmitted(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Contactez-nous</h1>
        <div>
          <input type="text" id="nom" name="nom" placeholder='Nom' required />
        </div>
        <div>
          <input type="email" id="mail" name="mail" placeholder='Email' required />
        </div>
        <div>
          <textarea id="message" name="message" placeholder='Votre message' required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>

      {isSubmitted && <p className="success-message">
        Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs
        </p>}
      {error && <p className="error-message">{error}</p>}
    </>
  );
};

export default ContactPage;
