import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  const contacts = await readContacts();
  // contacts.push(updatedContacts);
  const newContacts = [...contacts, ...updatedContacts];
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(newContacts), 'utf-8');
    console.log('Contact added successfully:');
  } catch (err) {
    console.log('Contact not added', err);
  }
};
