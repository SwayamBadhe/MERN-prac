const fs = require('fs').promises;

const filePath = 'example.txt';

const readFileAndModify = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data);
    const modifiedData = data.toUpperCase();
    fs.writeFile(filePath, modifiedData);
    console.log('The file has been saved!');
  } catch (error) {
    console.error(error);
  }
};

readFileAndModify(filePath);
