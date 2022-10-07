const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Agenda = mongoose.model(
  "Agenda",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    hora: {
      type: Number,
      required: true,
    },
    especializacao1: {
      type: String,
    },
    especializacao2: {
      type: String,
    },
    especializacao3: {
      type: String,
    },
    especializacao4: {
      type: String,
    },
    especializacao5: {
      type: String,
    },
    especializacao6: {
      type: String,
    },
  })
);

module.exports = Agenda;
