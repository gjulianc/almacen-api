var fileUpload = require('express-fileupload');
var articuloCtrl = require('../controllers/articulo.controller');
var fs = require('fs');

// default options


exports.uploadFile = function (req, res) {

    var id = req.params.id;

    if (!req.files) {
        return res.status(400).json({
            ok: false,
            mensaje: 'No existen ficheros para subir.',
            errors: {
                mensaje: 'Debe seleccionar una imagen'
            }
        });
    }

    var archivo = req.files.imagen;
    var nombreCortado = archivo.name.split('.');
    var extensionArchivo = nombreCortado[nombreCortado.length - 1];

    var extensionesValidas = ['png', 'jpg', 'gif', 'jpeg'];

    if (extensionesValidas.indexOf(extensionArchivo) < 0) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Extensión no válida',
            errors: {
                message: 'La extension debe ser ' + extensionesValidas.join(', ')
            }
        });
    }

    // nombre de archivo personalizado id + random
    var nombreArchivo = `${id }-${ new Date().getMilliseconds() }.${extensionArchivo}`;

    //Mover el fichero a un path
    var path = `./uploads/${nombreArchivo}`;

    archivo.mv(path, err => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error moviendo fichero',
                errors: err
            });
        }

        subirPorTipo(tipo, id, nombreArchivo, res);
    });
};

function subirPorTipo(id, nombreArchivo, res) {


    articuloCtrl.getArticulo(id, articuloDB)
        .then(articuloDB => {

            var pathViejo = './uploads/' + articuloDB.img;

            if (fs.existsSync(pathViejo)) {

                fs.unlink(pathViejo);
            }

            articuloDB.img = nombreArchivo;

            return articuloCtrl.actualizaArticulo(articuloDB)
                .then( () => {
                    res.status(200).json({
                        ok: true,
                        mensaje: 'Imagen del articulo actualizada',
                        articulo: articuloDB
                    });
            }).catch( () => {
                res.status(400).json({
                    ok: false,
                    mensaje: 'Error al salvar cambios'
                });
            });
        }).catch(() => {
            res.status(400).json({
                ok: false,
                mensaje: 'articulo no encontrado'
            });
        });
}