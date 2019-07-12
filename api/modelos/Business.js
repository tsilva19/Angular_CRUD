const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  nome: {
    type: String
  },
 cpf: {
    type: Number
  },
  email: {
    type: String
  },
  telefone: {
    type: Number
  },
}, 

  {
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);