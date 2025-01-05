import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  const length = contacts.length;
  const newContacts = contacts.slice(0, length - 1);
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(newContacts), 'utf-8');
    console.log('The last contact has been removed.');
  } catch (err) {
    console.log('The last contact is not removed', err);
  }
};

removeLastContact();
