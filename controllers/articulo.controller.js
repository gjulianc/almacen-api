

var Articulo = require('../models/articulo.model');

exports.getArticulos = function(req, res) {
    
    Articulo.find({} )
    .populate('familia')
    .exec(
        (err, articulos) => {
            if (err) {
                res.status(400).json(err);
            }
    
            res.json(articulos);
        });
};

exports.getArticulo = function(req, res) {

    Articulo.findOne({_id: req.params.id} )
    .populate('familia')
    .exec( ( err, articulo) => {
        if (err) {
            res.status(400).json(err);
        }

        res.json(articulo);
    });
};

exports.crearArticulo = function(req, res) {
    var nuevoArticulo = new Articulo(req.body);
    nuevoArticulo.save( (err, articulodb) => {

        if (err) {
            res.status(400).json(err);
        }

        res.json(articulodb);
    });
};

exports.actualizaArticulo = function(req, res) {
   
    Articulo.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, articulo) => {
       
        if (err) {
            res.status(400).json(err);
        }

        res.json(articulo);
    });
};

exports.eliminaArticulo = function(req, res) {

    Articulo.findByIdAndRemove(req.params.id, (err, articulo) => {
        
        if (err) {
            res.status(400).json(err);
        }

        res.json(articulo);
    });
};


