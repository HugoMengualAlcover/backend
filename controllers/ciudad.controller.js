const Ciudad = require('../models/ciudad.model');

const ciudadCtrl = {};

// Función que devuelve todas las ciudades
ciudadCtrl.getCiudades = async (req, res) => {
    const ciudades = await Ciudad.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
};

// Función que devuelve una ciudad dada un id
ciudadCtrl.getCiudad = async (req, res) => {
    const ciudad = await Ciudad.findById(req.params.id)
        .then((data) =>
{
    if(data!=null) res.json(data)
    else res.json({status: 'La ciudad no existe!'})
})
.catch(err => console.log(err));
}


// Función para actualizar una ciudad con el id y la ciudad con los nuevos datos
ciudadCtrl.updateCiudad = async (req, res) => {

    const ciudad = req.body;
    await Ciudad.findByIdAndUpdate(
        req.params.id,
        {$set: ciudad},
        {new: true})
    .then((data) =>
        {
        if(data!=null) res.json({status: 'La ciudad ha sido actualizada',data})
        
        else res.json({status: 'La ciudad no existe!'})
        }
    )
    .catch(err => res.send(err.message));
}

    // Función para borrar una ciudad dada un id
ciudadCtrl.deleteCiudad = async (req, res) => {
    await Ciudad.findByIdAndDelete(req.params.id)
    .then((data) =>
        {
        if(data!=null) res.json({status: 'La Ciudad ha sido borrado'})
        
        else res.json({status: 'La ciudad no existe!'})
        })
    .catch(err => res.send(err.message));
    }

    module.exports = ciudadCtrl;