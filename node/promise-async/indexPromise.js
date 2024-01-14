const fs = require('fs');

const filePath = 'example.txt';

const readFileandModify = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      //   console.log(data);

      const modifiedData = data.toUpperCase();

      fs.writeFile(filePath, modifiedData, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');

        fs.readFile(filePath, 'utf-8', (err, data) => {
          if (err) throw err;
          //   console.log(data);
        });
      });
      resolve('File successfully modified and saved!');
    });
  });
};

readFileandModify(filePath).then((data) => console.log(data));
