const mongoose = require('mongoose');
const {Schema} = mongoose;

const ciudadSchema = new Schema({
pais: {type: String, required: true},
name: {type: String, required: true},
urlCiudad: {type: String, required: true},
descripcion: {type: String, required: true},
activities: 
[
    {
        nombreActividad: {type: String, required: true, default: null},
        urlActividad: {type: String, required: true, default: null},
        descripcion: {type: String, required: true, default: null},
        precio: {type: String, required: true, default: null}
    }
]
});

module.exports = mongoose.model('ciudad',ciudadSchema,'ciudades');