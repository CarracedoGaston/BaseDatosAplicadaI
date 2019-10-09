const Escritura = require('../../models/escritura')

const getAll = (req, res) => {
  Escritura.find({}, (err, escrituras) => {
    if (err) res.send({msg: 'Cant`t get the Escritura list', error: err})
    res.send(escrituras)
  })
}

const getById = (req, res) => {
  Escritura.findById(req.params.id, (err, escrituras) => {
    if (err) res.send({msg: `Cant't get the Escritura ${req.params.id}`, error: err})
    res.send(escrituras)
  }) 
}

const insert = (req, res) => {
  const escritura = new Escritura({
    tipo: req.body.tipo,
    descripcion: req.body.descripcion,
    fecha: req.body.fecha,
    escribano: req.body.escribano,
    cliente: req.body.cliente
  })

  escritura.save((err) => {
    if (err) res.send({msg: 'Cant`t save the Escritura', error: err})
    res.send('Escritura saved')
  })
}

const upsert  = (req, res) => {
  Escritura.updateOne({_id: req.params.id}, {...req.body}, (err) => {
    if (err) res.send({msg: `Cant't upsert the Escritura ${req.params.id}`, error: err})
    res.send('Escritura upserted')
  })
}

const update  = (req, res) => {
  Escritura.updateOne({_id: req.params.id}, {[Object.keys(req.body)]: req.body[Object.keys(req.body)]}, (err) => {
    if (err) res.send({msg: `Cant't update the Escritura ${req.params.id}`, error: err})
    res.send('Escritura updated')
  })
}

const remove = (req, res) => {
  Escritura.deleteOne({_id: req.params.id}, (err) => {
    if (err) res.send({msg: `Cant't delete the Escritura ${req.params.id}`, error: err})
    res.send('Escritura deleted')
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