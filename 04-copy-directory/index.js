//node 04-copy-directory/index

const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '../04-copy-directory/files') ;
const dest = path.join(__dirname, '../04-copy-directory/files-copy');

function copyDir(dest) {
		fs.rmdir(dest, () => {});//Удаляем старую папку, если есть
		fs.mkdir(dest, {recursive: true}, (error) => {if (error) throw error;}); //Создаем новую папку
		createFiles(src, dest);
		console.log('папка скопирована')
};


function createFiles(src, dest) { //copy files

	fs.readdir(src, {	withFileTypes: true}, (error, fileNames) => {
		
		fileNames.forEach(fileitem => {//для каждого файла в папке
			
			if (fileitem.isDirectory()) {//если внутри еще одна папка рекурсивно копируем ее, предварительно создав
				fs.mkdir(`${dest}/${fileitem.name}`, {recursive: true}, (error) => {if (error) throw error;});
				createFiles(`${src}/${fileitem.name}`, `${dest}/${fileitem.name}`, (error) => {if (error) throw error});
			} else {
			fs.copyFile(`${src}/${fileitem.name}`, `${dest}/${fileitem.name}`, (error) => {if (error) throw error});//просто копируем файл
			}
		})
		
	});

}

copyDir(dest)