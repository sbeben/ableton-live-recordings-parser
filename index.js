const {lstatSync, copyFileSync} = require('fs');
const path = require('path');
const { readdir } = require('fs/promises');

const startPath = "C:\\Users\\Username\\Documents\\Ableton\\Live Recordings";
const destination = "C:\\rec\\";
const filter = (file) => path.extname(file) === '.wav' &&
		(file.includes('Audio') ||
		file.includes('Freeze'));

const writeRecordings = (files, start_path, destination) => {
	files.forEach(nestedFile => 
		copyFileSync(path.resolve(start_path, nestedFile), path.resolve(destination, nestedFile)));
};

const getRecordings = async function (start_path, destination, filter) {
	const files = await readdir(start_path);
	const directories = files.filter(file => 
		lstatSync(path.resolve(start_path, file)).isDirectory());
	const nestedFiles = files.filter(file => 
		lstatSync(path.resolve(start_path, file)).isFile() && filter(file)		
	);
	writeRecordings(nestedFiles, start_path, destination);
	if (directories.length > 0) {
		return directories.forEach(directory => {
			getRecordings(path.resolve(start_path, directory), destination, filter);
		});
	}	
};

getRecordings(startPath, destination, filter);
