//node 02-write-file/index


const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const output = fs.createWriteStream(path.join(__dirname, 'destination.txt'));


stdout.write('Вводи свой текст, человек:\n');


stdin.on('data', data => {
    const dataStringified = data.toString().trim();
    if (dataStringified == 'exit'){ 
        stdout.write('Запись завершена, выход по команде "exit"');
        process.exit(); 
    } 
    output.write(dataStringified+'\n');
    
   
});

process.on("SIGINT", function () {
    process.stdout.write('Запись завершена, выход по команде "Ctrl+C"');
    process.exit();
  });

