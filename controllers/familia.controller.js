

var Familia = require('../models/familia.model');

exports.getFamilias = function(req, res) {
    
    Familia.find({}, (err, familias) => {
        if (err) {
            res.status(400).json(err);
        }

        res.json(familias);
    });
};

exports.getFamilia = function(req, res) {
    Familia.findOne({_id: req.params.id}, ( err, familia ) => {
        if (err) {
            res.status(400).json(err);
        }

        res.json(familia);
    });
};

exports.crearFamilia = function(req, res) {
    var nuevaFamilia = new Familia(req.body);
    nuevaFamilia.save( (err, familiadb) => {

        if (err) {
            res.status(400).json(err);
        }

        res.json(familiadb);
    });
};

exports.actualizaFamilia = function(req, res) {
   
    Familia.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, familia) => {
       
        if (err) {
            res.status(400).json(err);
        }

        res.json(familia);
    });
};

exports.eliminaFamilia = function(req, res) {

    Familia.findByIdAndRemove(req.params.id, (err, familia) => {
        
        if (err) {
            res.status(400).json(err);
        }

        res.json(familia);
    });
};


