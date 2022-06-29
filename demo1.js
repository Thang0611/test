						
//serve-mp3.js
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200,{"Content-Type":"video/mp4"})
	fs.exists('video.mp4',function(exist){
        if (exist){
            var rstream= fs.createReadStream('video.mp4')
            rstream.pipe(res)
        }
        else {
            res.send("ERROR")
            res.end()
        }
    })
    
}).listen(3000);