const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareaController');


// asignar las rutas del crud

router.post('/',tareasController.agregarTareas);
router.get('/',tareasController.mostrarTareas);
router.put('/:id',tareasController.actualizaTareas);
router.get('/:id',tareasController.mostrarUnaTarea);
router.delete('/:id',tareasController.eliminarTarea);
module.exports = router;