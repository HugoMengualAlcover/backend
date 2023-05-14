const Continente = require('../models/continente.model');
const continenteCtrl = {};

// Función que devuelve todas las ciudades
continenteCtrl.getContinentes = async (req, res) => {
    const continentes = await Continente.find()
        .then((data
        ) => {
            const objectWithArray = { data: data };
            res.json(objectWithArray);
        })
        .catch((err) => console.error(err));
};

// Función que devuelve una ciudad dada un id
continenteCtrl.getContiente = async (req, res) => {
    const continente = await Continente.findById(req.params.id)
        .then((data) => {
    if(data!=null) res.json(data)
    else res.json({status: 'El continente no existe!'})
    })
.catch(err => console.log(err));
}


// Función para actualizar una ciudad con el id y la ciudad con los nuevos datos
continenteCtrl.updateContinente = async (req, res) => {
    const continente = req.body;
    await Continente.findByIdAndUpdate(
        req.params.id,
        {$set: continente},
        {new: true})
    .then((data) =>
        {
        if(data!=null) res.json({message: 'El continente ha sido actualizada',data})
        else res.json({message: 'El continente no existe!'})
        }
    )
    .catch(err => res.send(err.message));
};

    // Función para borrar una película dada un id
continenteCtrl.deleteContinente = async (req, res) =>{
        await Continente.findByIdAndDelete(req.params.id)
            .then((data) =>{
                if (data!=null){
                    res.json(
                        {message: 'La ciudad ha sido eliminada'}
                    )
                }else {
                    res.json({message: "La ciudad no existe"})
                }
            })
            .catch(err => res.send(err.message));
    }
    module.exports = continenteCtrl;