//node 03-files-in-folder/index

const path = require('path');
const fs = require('fs')

console.log('Cписок файлов');

fs.readdir(path.join(__dirname, '/secret-folder'), (error, fileNames) => {
  if (error) throw error;
  fileNames.forEach(item => {
    fs.stat(path.resolve(path.join(__dirname, '/secret-folder'), item), (error, stat) => {
      if (error) throw error;
      if (stat.isFile()) {
        console.log('Имя файла: ' + path.parse(item).name + ' Расширение файла: ' + path.parse(item).ext.slice(1) + ' Размер файла: '  + (stat.size*0.0009766).toFixed(3) + 'kb');
      }
    });  
  });
});
