const Localidad = require('../../models/localidad')

const getAll = (req, res) => {
  Localidad.find({}, (err, clientes) => {
    if (err) res.send({msg: 'Cant`t get the localidad list', error: err})
    res.send(clientes)
  })
}

const getById = (req, res) => {
  Localidad.findById(req.params.id, (err, cliente) => {
    if (err) res.send({msg: `Cant't get the localidad ${req.params.id}`, error: err})
    res.send(cliente)
  }) 
}

const insert = (req, res) => {
  const localidad = new Localidad({
    id: req.body.id,
    name: req.body.name
  })

  localidad.save((err) => {
    if (err) res.send({msg: 'Cant`t save the localidad', error: err})
    res.send('localidad saved')
  })
}

const upsert  = (req, res) => {
  Localidad.updateOne({_id: req.params.id}, {...req.body}, (err) => {
    if (err) res.send({msg: `Cant't upsert the localidad ${req.params.id}`, error: err})
    res.send('localidad upserted')
  })
}

const update  = (req, res) => {
  Localidad.updateOne({_id: req.params.id}, {[Object.keys(req.body)]: req.body[Object.keys(req.body)]}, (err) => {
    if (err) res.send({msg: `Cant't update the localidad ${req.params.id}`, error: err})
    res.send('localidad updated')
  })
}

const remove = (req, res) => {
  Localidad.deleteOne({_id: req.params.id}, (err) => {
    if (err) res.send({msg: `Cant't delete the localidad ${req.params.id}`, error: err})
    res.send('localidad deleted')
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