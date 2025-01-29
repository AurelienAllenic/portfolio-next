'use client';

import { useActionState } from 'react';
import { useState, useEffect, startTransition } from 'react';
import handleFormSubmission from '@app/actionForm';
import './styleCForm.scss';

export type ContactFormState = {
  nom: { value: string; errors?: string[] };
  mail: { value: string; errors?: string[] };
  message: { value: string; errors?: string[] };
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    mail: '',
    message: '',
  });

  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    handleFormSubmission,
    { nom: { value: formData.nom, errors: [] }, mail: { value: formData.mail, errors: [] }, message: { value: formData.message, errors: [] } }
  );

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormSuccess, setIsFormSuccess] = useState(false); // State for success message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nom || !formData.mail || !formData.message) {
      alert("Tous les champs doivent être remplis.");
      return;
    }

    startTransition(() => {
      const formDataObj = new FormData(e.target as HTMLFormElement);
      formAction(formDataObj); // Dispatch form data asynchronously
    });
  };

  // Reset form only when submission is successful
  useEffect(() => {
    if (!isPending && !state.nom.errors && !state.mail.errors && !state.message.errors && isFormSubmitted) {
      setFormData({ nom: '', mail: '', message: '' });
      setIsFormSubmitted(false);
      setIsFormSuccess(true); // Set success message flag
    }
  }, [isPending, state, isFormSubmitted]);

  // Mark form as successfully submitted after the action
  useEffect(() => {
    if (!isPending && !state.nom.errors && !state.mail.errors && !state.message.errors) {
      setIsFormSubmitted(true); // Set the flag when submission is successful
    }
  }, [isPending, state]);

  // Reset success message after a short delay
  useEffect(() => {
    if (isFormSuccess) {
      setTimeout(() => {
        setIsFormSuccess(false); // Reset success message after 3 seconds
      }, 3000);
    }
  }, [isFormSuccess]);

  return (
    <form onSubmit={handleSubmit} id='contact-form'>
      <h1>Contactez-nous</h1>

      {/* Display success message if the form is submitted successfully */}
      {isFormSuccess && <p className="success-message">Le formulaire a été envoyé avec succès !</p>}

      <div>
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="Nom"
          required
        />
        {state.nom.errors && state.nom.errors.length > 0 && 
          state.nom.errors.map((error, index) => <p key={index} className="error-message">{error}</p>)}
      </div>
      <div>
        <input
          type="email"
          name="mail"
          value={formData.mail}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        {state.mail.errors && state.mail.errors.length > 0 && 
          state.mail.errors.map((error, index) => <p key={index} className="error-message">{error}</p>)}
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          required
        ></textarea>
        {state.message.errors && state.message.errors.length > 0 && 
          state.message.errors.map((error, index) => <p key={index} className="error-message">{error}</p>)}
      </div>
      <button type="submit" disabled={isPending}>{isPending ? 'En cours...' : 'Envoyer'}</button>
    </form>
  );
};

export default ContactPage;
