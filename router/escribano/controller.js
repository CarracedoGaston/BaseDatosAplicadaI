const Escribano = require('../../models/escribano')

const getAll = (req, res) => {
  Escribano.find({}, (err, escribanos) => {
    if (err) res.send({msg: 'Cant`t get the Escribano list', error: err})
    res.send(escribanos)
  })
}

const getById = (req, res) => {
  Escribano.findById(req.params.id, (err, escribanos) => {
    if (err) res.send({msg: `Cant't get the Escribano ${req.params.id}`, error: err})
    res.send(escribanos)
  }) 
}

const insert = (req, res) => {
  const escribano = new Escribano({
    id: req.body.id,
    name: req.body.name,
    lastName: req.body.lastName,
    dni: req.body.dni
  })

  escribano.save((err) => {
    if (err) res.send({msg: 'Cant`t save the Escribano', error: err})
    res.send('Escribano saved')
  })
}

const upsert  = (req, res) => {
  Escribano.updateOne({_id: req.params.id}, {...req.body}, (err) => {
    if (err) res.send({msg: `Cant't upsert the Escribano ${req.params.id}`, error: err})
    res.send('Escribano upserted')
  })
}

const update  = (req, res) => {
  Escribano.updateOne({_id: req.params.id}, {[Object.keys(req.body)]: req.body[Object.keys(req.body)]}, (err) => {
    if (err) res.send({msg: `Cant't update the Escribano ${req.params.id}`, error: err})
    res.send('Escribano updated')
  })
}

const remove = (req, res) => {
  Escribano.deleteOne({_id: req.params.id}, (err) => {
    if (err) res.send({msg: `Cant't delete the Escribano ${req.params.id}`, error: err})
    res.send('Escribano deleted')
  }) 
}

module.exports = {
  getAll,
  getById,
  insert,
  upsert,
  update,
  remove
}