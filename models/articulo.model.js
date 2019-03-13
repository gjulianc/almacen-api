var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var articuloSchema = new mongoose.Schema({
    referencia: String,
    nombre: String,
    ubicacion: String,
    stockActual: Number,
    stockMinimo: { type: Number, min: 0 },
    stockMaximo: Number,
    descripcion: String,
    img: String,
    familia: {type: Schema.Types.ObjectId, ref: 'Familias', required: true}
});

module.exports = mongoose.model('Articulos', articuloSchema);