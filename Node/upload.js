var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var nodemailer = require('nodemailer');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldPath = files.filetoupload.filepath;
            var newPath = 'C:\\Users\\canad\\Documents\\' + files.filetoupload.originalFilename;
            fs.rename(oldPath, newPath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    }
    else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
    

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'canadianfaller7@gmail.com',
            pass: 'Mahal_Palangga_taka7'
        }
    });
    
    var mailOptions = {
        from: 'canadianfaller7@gmail.com',
        to: 'terranadams@gmail.com',
        subject: 'Sending email using Node.js',
        text: 'I wrote this email coding'
    };
    
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email send: ' + info.response);
        }
    });
    
}).listen(8080);