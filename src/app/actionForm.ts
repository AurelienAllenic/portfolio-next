'use server'

import db from '@app/frameworks/db'

export type ContactFormState = {
  nom: { value: string; errors?: string[] };
  mail: { value: string; errors?: string[] };
  message: { value: string; errors?: string[] };
};

export const handleFormSubmission = async (
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> => {
  const nom = formData.get('nom') as string;
  const mail = formData.get('mail') as string;
  const message = formData.get('message') as string;

  const errors: ContactFormState = {
    nom: { value: nom, errors: [] },
    mail: { value: mail, errors: [] },
    message: { value: message, errors: [] },
  };

  if (!nom) errors.nom.errors?.push('Le nom est requis.');
  if (!mail || !mail.includes('@')) errors.mail.errors?.push('Email invalide.');
  if (!message || message.length < 10) errors.message.errors?.push('Le message doit contenir au moins 10 caractères.');

  if (errors.nom.errors?.length || errors.mail.errors?.length || errors.message.errors?.length) {
    return errors;
  }

  await db.contact.create({
    data: { nom, mail, message },
  });

  return { nom: { value: '' }, mail: { value: '' }, message: { value: '' } };
};

export default handleFormSubmission;
