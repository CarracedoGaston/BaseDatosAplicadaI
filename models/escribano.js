const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: { type: String, required: true, max: 60},
  lastName: { type: String, required: true, max: 60},
  dni: { type: Number, required: true}
})

module.exports = mongoose.model('Escribano', UserSchema)