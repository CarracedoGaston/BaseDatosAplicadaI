const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  id: { type: Number, required: true},
  name: { type: String, required: true, max: 60}
})

module.exports = mongoose.model('Localidad', UserSchema)