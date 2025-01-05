import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  const array = [];
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(array), 'utf-8');
    console.log('Сontacts deleted');
  } catch (err) {
    console.log('Сontacts not deleted ', err);
  }
};

removeAllContacts();
