const Proveedores = require('../models/Proveedores');

// funcion para agregar provedores 

exports.agregarProveedores = async (req,res) => {

    try {
        let proveedores;
        proveedores = new Proveedores(req.body) //almacena enla variable el try
        await proveedores.save();
        res.json({proveedores});

    } catch (error) {
        console.log(error);
        res.status(500).send('hay un error al agregar el proveedor');
    }
}


exports.mostrarProveedores = async (req, res) =>{
    try {

        let proveedores = await Proveedores.find();
        res.json(proveedores);

    } catch (error) {
        console.log(error)
        res.status(500).send('hay un error al mostrar los proveedores')
    }

}


// actualizar proveedore

exports.actualizaProveedores = async (req, res) => {

    try {

        const proveedores = await Proveedores.findOneAndUpdate(
            {_id: req.params.id}, req.body);
        
        if(!proveedores){
            res.status(500).send("hubo un error al consultar ese id");
        }else{
            res.json(proveedores);
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send('hay un error al mostrar una tarea')        
    }
}


// mostrar un proveedor

exports.mostrarUnProveedor = async (req, res) => {
    try {
        let proveedores = await Proveedores.findById(req.params.id);
        if (!proveedores) {
            res.status(404).send({ msg: "no se encuentra el Id" });
        }
        res.send(proveedores);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar el proveedor');
    }
}

//  funcion para elimanar el proveedor

exports.eliminarProveedor = async (req, res) => {
    try {
        let provedores = await Proveedores.findById(req.params.id);
        if (!provedores) {
            res.status(404).json({ msg: "el proveedor no existe" });
            return
        }
        await Proveedores.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "el proveedor fue eliminado" });

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al eliminar el proveedor en la BD');
    }
}


