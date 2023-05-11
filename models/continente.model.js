const mongoose = require('mongoose');
const {Schema} = mongoose;

const continenteSchema = new Schema({
    nombreContinente: {type: String, required: true},
    paises:
    [
        {
            nombre: {type: String, required: true},
            bandera: {type: String, required: true},
            ciudades:
            [
                {
                    nombre: {type: String, required: true},
                    ciudadId: {type: String, required: true},
                }
            ]
        }
    ],
});
module.exports = mongoose.model('continente',continenteSchema,'continentes');