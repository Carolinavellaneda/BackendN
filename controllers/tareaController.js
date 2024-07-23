
// el controlador se conecta con el modelo para realizar las CRUT
const Tarea = require('../models/Tarea');

// funcion para agregar tareas 

exports.agregarTareas = async (req,res) => {

    try {
        let tareas;
        tareas = new Tarea(req.body) //almacena enla variable el try
        await tareas.save();
        res.json({tareas});

    } catch (error) {
        console.log(error);
        res.status(500).send('hay un error al agregar una tarea');
    }
}

exports.mostrarTareas = async (req, res) =>{
    try {

        let tareas = await Tarea.find();
        res.json(tareas);

    } catch (error) {
        console.log(error)
        res.status(500).send('hay un error al mostrar una tarea')
    }

}

// actualizar tareas

exports.actualizaTareas = async (req, res) => {

    try {

        const tareas = await Tarea.findOneAndUpdate(
            {_id: req.params.id}, req.body);
        
        if(!tareas){
            res.status(500).send("hubo un error al consultar ese id");
        }else{
            res.json(tareas);
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send('hay un error al mostrar una tarea')        
    }
}

// mostrar una TAREA

exports.mostrarUnaTarea = async (req, res) => {
    try {
        let tareas = await Tarea.findById(req.params.id);
        if (!tareas) {
            res.status(404).send({ msg: "no se encuentra la tarea con ese ID" });
        }
        res.send(tareas);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar la tarea');
    }
}

//  funcion para elimanar una tarea 

exports.eliminarTarea = async (req, res) => {
    try {
        let tarea = await Tarea.findById(req.params.id);
        if (!tarea) {
            res.status(404).json({ msg: "la tarea no existe" });
            return
        }
        await Tarea.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "la tarea fue eliminada" });

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al eliminar la tarea en la BD');
    }
}
