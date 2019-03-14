

var articuloCtrl = require ( '../controllers/articulo.controller' );
var Movimiento   = require ( '../models/movimiento.model'         );

exports.getMovimientos = function(req, res) {
    
    Movimiento.find({} )
    .populate('articulo')
    .exec( (err, movimientos) => {
        if (err) {
            res.status(400).json(err);
        }
    
        res.json(movimientos);
    });
};

exports.getMovimiento = function(req, res) {
    Movimiento.findOne({_id: req.params.id} )
    .populate('articulo')
    .exec( ( err, movimiento ) => {
        if (err) {
            res.status(400).json(err);
        }

        res.json(movimiento);
    });
};

exports.crearMovimiento = function(req, res) {
    var nuevoMovimiento = new Movimiento(req.body);
    nuevoMovimiento.save( (err, movimientodb) => {

        if (err) {
            res.status(400).json(err);
        }

        res.json(movimientodb);
    });
};

exports.actualizaMovimiento = function(req, res) {
   
    Movimiento.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, movimiento) => {
       
        if (err) {
            res.status(400).json(err);
        }

        res.json(movimiento);
    });
};

exports.eliminaMovimiento = function(req, res) {

    Movimiento.findByIdAndRemove(req.params.id, (err, movimiento) => {
        
        if (err) {
            res.status(400).json(err);
        }
        
        res.json(movimiento);
    });
};

