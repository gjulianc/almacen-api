var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var movimientoSchema = new mongoose.Schema({
    fecha: Number,
    articulo: { type: Schema.Types.ObjectId, ref: 'Articulos', required: true},
    cantidad: Number,
    nAlbaran: String,
    tipo: {
        type: Number,
        enum: [0, 1],
        default: 0
    }
});

module.exports = mongoose.model('Movimientos', movimientoSchema);