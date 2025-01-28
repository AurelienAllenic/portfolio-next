'use server'

import db from '@app/frameworks/db'

export const handleFormSubmission = async (formData: FormData) => {
  const nom = formData.get('nom')
  const mail = formData.get('mail')
  const message = formData.get('message')
  console.log(nom, mail, message)
  if (typeof nom !== 'string' || typeof mail !== 'string' || typeof message !== 'string') {
    throw new Error('Invalid form data');
  }

  // Create a new form submission in the database
  await db.contact.create({
    data: {
      nom,
      mail,
      message
    }
  })

  // No revalidation path is needed here anymore
}

export default handleFormSubmission