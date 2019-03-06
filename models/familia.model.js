var mongoose = require('mongoose');

var familiaSchema = new mongoose.Schema({
    nombre: String
});

module.exports = mongoose.model('Familias', familiaSchema);