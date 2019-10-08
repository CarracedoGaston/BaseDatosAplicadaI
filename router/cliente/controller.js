const Cliente = require('../../models/cliente')

const getAll = (req, res) => {
    Cliente.find({}, (err, clientes) => {
    if (err) res.send({msg: 'Cant`t get the client list', error: err})
    res.send(clientes)
  })
}

const getById = (req, res) => {
    Cliente.findById(req.params.id, (err, cliente) => {
    if (err) res.send({msg: `Cant't get the cliente ${req.params.id}`, error: err})
    res.send(cliente)
  }) 
}

const insert = (req, res) => {
  const cliente = new Cliente({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    localidad: req.body.localidad
  })

  cliente.save((err) => {
    if (err) res.send({msg: 'Cant`t save the client', error: err})
    res.send('Client saved')
  })
}

const upsert  = (req, res) => {
  Cliente.updateOne({_id: req.params.id}, {...req.body}, (err) => {
    if (err) res.send({msg: `Cant't upsert the client ${req.params.id}`, error: err})
    res.send('Client upserted')
  })
}

const update  = (req, res) => {
  Cliente.updateOne({_id: req.params.id}, {[Object.keys(req.body)]: req.body[Object.keys(req.body)]}, (err) => {
    if (err) res.send({msg: `Cant't update the client ${req.params.id}`, error: err})
    res.send('Client updated')
  })
}

const remove = (req, res) => {
  Cliente.deleteOne({_id: req.params.id}, (err) => {
    if (err) res.send({msg: `Cant't delete the client ${req.params.id}`, error: err})
    res.send('Client deleted')
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