const mongoose = require('mongoose');
require('dotenv').config();

//conexion de mongoose db

const conectarBD = () =>{
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('Estamos conectados'))
    .catch((err) => console.error(err));

}

module.exports = conectarBD;
     