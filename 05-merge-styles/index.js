//node 05-merge-styles/index

const fileSystem = require("fs");
const fs = fileSystem.promises;
const path = require('path');


const src = path.join(__dirname, '../05-merge-styles/styles/');
const dest = path.join(__dirname, '../05-merge-styles/project-dist');


const writeStream = fileSystem.createWriteStream(dest + "/bundle.css");

let data = '';

async function createData(src) { 
   	const fileNames = await fs.readdir(src);
    fileNames.forEach((fileitem) => {
			if (path.parse(src+fileitem).ext == '.css'){
					fs.readFile(src + fileitem, 'utf8')
						.then((item) => {
							data += item+"\n";
							writeStream.write(data, "UTF8");
						}
					);   
			}
            
 		});   
  console.log("файл собран");
  
}

createData(src)