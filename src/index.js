const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');

// creamos el servidor
const app= express();
const port = 5000;//CONFIGURAR PUERTO

// enlazar la conexion con la BD
conectarBD();
app.use(cors());
app.use(express.json());

// rutas de proyecto
app.use('/api/tareas', require('../routes/routesTareas'))
app.use('/api/proveedores', require('../routes/routesProveedores'))

// ruta para verificar el servicdor en la web
app.get('/', (req,res) => {
    res.send("hola mundo desde la web");
    
});

app.listen(port,() => {
    console.log('El servidor esta conectado http://localhost:5000/');
});