var fs = require('fs');
var colors = require('colors');
var StatMode = require('stat-mode');

/*
fs.stat('./cat.jpg', function(err, stats){
	var statMode = new StatMode(stats);
	console.log(statMode.toString());
})
*/

fs.readdir('.', function(err, files) {
	var str = "";
	files.forEach(function(item) {
		str+=item+'\n';
	});
	fs.writeFile('file.txt', str, function(err) {
		if(err) { 
			throw err; 
		}
		fs.readFile('file.txt', 'utf-8', function(err,data) {
			console.log(data);
		});
	});
}); 
