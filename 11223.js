  //if (req.url == '/fileupload')
    var http = require('http');
    var formidable = require('formidable');
    var fs = require('fs');
    var mv = require('mv');

    http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
        
        var oldpath = files.filetoupload[0].filepath;
        var newpath = 'C:/Users/dsanc/node11223/' + files.filetoupload.originalFilename;
        mv(oldpath, newpath, function (err) {
            if (err) throw err;
            else {
            res.write('se ha movido ;-) !');
            res.end();
            }
        });
        
        });
    } else if (req.url == '/daniel'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1> hola buenas </h1>");
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
    else if (req.url == '/alfonso'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1> Hala Madrid!!! </h1>");
        return res.end();
    }
}).listen(8080);