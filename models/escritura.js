const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  id: Schema.Types.ObjectId,
  tipo: { type: String, required: true, max: 30},
  descripcion: { type: String, required: true, max: 200},
  fecha: { type: Date, required: true},
  escribano: { type: Schema.Types.ObjectId, ref: 'Escribano'},
  cliente: { type: Schema.Types.ObjectId, ref: 'Cliente'}
})

module.exports = mongoose.model('Escribano', UserSchema)