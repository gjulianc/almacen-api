
var fs = require('fs');
var path = require('path');

exports.getImages = function (req, res) {

        var tipo = req.params.tipo;
        var img = req.params.img;

        var pathFile = `./server/uploads/${ tipo }/${ img }`;
        console.log(pathFile);
        if (!fs.existsSync(pathFile)) {
            pathFile = './assets/no-img.jpg'
        }

        res.sendFile(path.resolve(pathFile));
}