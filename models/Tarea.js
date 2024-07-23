const { version } = require("os");
const mongoose = require ('mongoose');

/// este modelo debe hacerse igual a lo que tenga la BD

const tareaSchema = mongoose.Schema({


nombre:{
    type: String,
    require:true
},
responsable:{
    type: String,
    require:true
},
fecha:{
    type:Date,
    require:true
},
comentarios:{
    type: String,
    require:true
},

},{versionkey: false});

module.exports = mongoose.model('Tarea', tareaSchema);