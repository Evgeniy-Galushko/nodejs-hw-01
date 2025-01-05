import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  const numberOfContacts = contacts.length;
  return numberOfContacts;
};

console.log(await countContacts());
