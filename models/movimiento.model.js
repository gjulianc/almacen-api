var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var movimientoSchema = new mongoose.Schema({
    fecha: Date,
    articulo: { type: Schema.Types.ObjectId, ref: 'Articulos', required: true},
    cantidad: Number,
    nAlbaran: String,
    tipo: {
        type: String,
        enum: ['ENTRADA', 'SALIDA'],
        default: 'ENTRADA'
    }
});

module.exports = mongoose.model('Movimientos', movimientoSchema);