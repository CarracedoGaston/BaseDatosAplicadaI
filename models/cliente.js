const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: { type: String, required: true, max: 60},
  lastName: { type: String, required: true, max: 60},
  email: { type: String, required: true, max: 100},
  phone: { type: String, required: true, max: 25},
  localidad: { type: Schema.Types.ObjectId, ref: 'Localidad'}
})

module.exports = mongoose.model('Cliente', UserSchema)