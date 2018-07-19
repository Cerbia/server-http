var fs = require('fs');
var formidable = require('formidable');
var filePath = "";

exports.upload = function (request, response) {
    console.log("Rozpoczynam obsługę żądania upload.");
    var form = new formidable.IncomingForm();
    form.parse(request, function(error, fields, files) {
        filePath = 'images/' + files.upload.name;
        fs.renameSync(files.upload.path, filePath);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Rozpoczynam upload!");
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
}

exports.welcome = function (request, response) {
    console.log("Rozpoczynam obsługę żądania welcome.");
    fs.readFile('templates/start.html', 'utf-8', function(err, data) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(data);
        response.end();
    });
}

exports.show = function (request, response) {
    console.log("show function");
    fs.readFile(filePath, "binary", function(error, file) {
        response.writeHead(200, {"Content-Type": "image/png"})
        response.write(file, "binary");
        response.end();
    });
}

exports.error = function (request, response) {
    console.log("Error 404");
    response.write("404");
    response.end();
}