var http = require('http');
//var fs = require('fs');
var colors = require('colors');

var handlers = require('./handlers')

function start() {
	function onRequest(request, response) {
		console.log("Odebrano zapytanie.");
		response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		//response.write('Hello');

		switch(request.url) {
			case '/':
			case '/start':
				handlers.welcome(request, response);
				break;
			case '/upload':
				handlers.upload(request, response);
				break;
			case '/show':
				handlers.show(request, response);
				break;
			default:
				handlers.error(request, response);
				break;
		}
		/*
		*/
	}
	http.createServer(onRequest).listen(9000);
	console.log("Uruchomiono serwer!".green);
}

/*
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
	
});*/



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
exports.start = start;
