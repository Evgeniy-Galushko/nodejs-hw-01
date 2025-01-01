import fs from 'node:fs/promises';

(async () => {
  const data = 'Привет Noda!';
  try {
    await fs.writeFile('src/test.txt', data, 'utf8');
    console.log('Данные успешно добавлены.');
  } catch (error) {
    console.error(error);
  }
})();

(async () => {
  const data = 'Привет Пользователь!';
  try {
    await fs.appendFile('src/test.txt', data, 'utf8');
    console.log('Данные успешно добавлены.');
  } catch (error) {
    console.error(error);
  }
})();

(async () => {
  try {
    const data = await fs.readFile('src/test.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();

(async () => {
  try {
    const files = await fs.readdir('./src/scripts');
    console.log('Список файлов и каталогов:', files);
  } catch (err) {
    console.error('Ошибка получения списка файлов и каталогов:', err);
  }
})();
