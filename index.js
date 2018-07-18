var http = require('http');
var fs = require('fs');
var colors = require('colors');
var StatMode = require('stat-mode');

/*
fs.stat('./cat.jpg', function(err, stats){
	var statMode = new StatMode(stats);
	console.log(statMode.toString());
})
*/
var server = http.createServer();
server.on('request', function(request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8");
	if(request.method==='GET' && request.url==='/hello') {
		fs.readFile('index.html', 'utf-8', function(err,data) {
			response.write(data);
			response.end();
		});
	} else {
		response.statusCode =  404;
		response.write('<img src="https://i.kym-cdn.com/photos/images/original/000/178/254/c86.jpg" alt="404">');
		response.end();
	}
	
});
server.listen(9000);

/*
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
*/
