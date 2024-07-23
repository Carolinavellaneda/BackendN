const express = require('express');
const router = express.Router();
const proveedoresController= require('../controllers/proveedoresController');


// asignar las rutas del crud

router.post('/',proveedoresController.agregarProveedores);
router.get('/',proveedoresController.mostrarProveedores);
router.put('/:id',proveedoresController.actualizaProveedores);
router.get('/:id',proveedoresController.mostrarUnProveedor);
router.delete('/:id',proveedoresController.eliminarProveedor);
module.exports = router;