const { version } = require("os");
const mongoose = require ('mongoose');

/// este modelo debe hacerse igual a lo que tenga la BD

const proveedoresSchema = mongoose.Schema({


nombre:{
    type: String,
    require:true
},
codigo:{
    type: Number,
    require:true
},
fecha:{
    type:Date,
    require:true
},
descripcion:{
    type: String,
    require:true
},

},{versionkey: false});

module.exports = mongoose.model('Proveedores', proveedoresSchema);